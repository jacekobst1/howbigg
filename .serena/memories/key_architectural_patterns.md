# Key Architectural Patterns

## Display Comparison Architecture

### Display Object Flow

```
User Input → DisplayUrlState → Display class → Calculations → Visual Presentation
```

### Core Components

1. **Display Class** (`types/Display.ts`)
   - Constructor-based initialization with 20+ properties
   - Methods like `getAspectRatioDecimalValue()`
   - Properties: diagonal, resolution, aspect ratio, PPI, viewing distances, dimensions

2. **Display Generator** (`utils/displayGenerator.ts`)
   - Creates Display instances with sensible defaults
   - Functions: `generateDisplays()`, `generateDisplayByExistingOnes()`
   - ALWAYS use these utilities instead of plain object creation

3. **Calculation Pipeline**
   - `displayDetailsFacade.ts` - Orchestrates all calculations
   - `sizeCalculator.ts` - Physical dimensions from diagonal + aspect ratio
   - `ppiCalculator.ts` - Pixels per inch calculations
   - `viewDistanceCalculator.ts` - Optimal viewing distances

4. **URL State Management**
   - `urlEncoder.ts` - Serializes/deserializes Display objects to/from URL
   - `useQueryState` hook - Synchronizes React state with URL query parameters
   - All display configurations are URL-encoded for shareability

### Critical Patterns

#### URL State Synchronization

```typescript
const [queryState, setQueryState, isQueryStateReady] = useQueryState<string[]>("displays");

// ALWAYS wait for ready state before rendering
if (!isQueryStateReady) return <Loading />;

// Encode/decode displays
const encodedDisplays = encodeDisplays(displays); // Display[] → string[]
const decodedDisplays = decodeDisplays(queryState); // string[] → Partial<Display>[]
```

#### Display Object Instantiation

```typescript
// ❌ WRONG - loses class methods
const display = { id: 1, name: "Monitor", diagonal: { value: 27, unit: "in" } };

// ✅ CORRECT - uses generator utilities
const display = generateDisplays(1)[0];
const newDisplay = generateDisplayByExistingOnes(existingDisplays);

// When merging Display instances
import { mapWithPrototype } from "@/utils/objects";
const merged = mapWithPrototype(Display, partialDisplay, existingDisplay);
```

## Server-Side Rendering (SSR) Pattern

### Purpose

- **SEO optimization**: Search engines index full comparison content
- **Dynamic metadata**: Each comparison has unique title/description
- **Performance**: Faster initial render with server-calculated data

### Architecture Flow

```
Server (page.tsx):
  1. Read searchParams from URL
  2. Decode & calculate Display instances
  3. Serialize to plain objects
  4. Generate dynamic metadata
     ↓ (plain objects)
Client (PageClient.tsx):
  1. Deserialize to Display instances
  2. Restore class methods
  3. Store in state
     ↓ (Display instances)
Children (Comparison, ProductRecommendations):
  1. Receive proper Display instances
  2. Use methods (getAspectRatioDecimalValue)
  3. Update via user interactions
```

### Key Components

#### Server Component (src/app/compare/display/page.tsx)

```typescript
// 1. Accept searchParams
interface PageProps {
  searchParams: { displays?: string };
}

// 2. Decode displays server-side
const initialDisplays = getDetailedDisplays(merged);

// 3. Generate dynamic metadata
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  // Create comparison-specific SEO tags
  const title = `${displayDescriptions} - Display Comparison | howbigg.com`;
  return { title, description, openGraph, twitter };
}

// 4. Serialize before passing to client
<PageClient initialDisplays={serializeDisplays(initialDisplays)} />
```

#### Serialization Layer (src/app/compare/display/utils/displaySerializer.ts)

```typescript
// Convert Display instances → plain objects
export function serializeDisplays(displays: Display[]): any[];

// Convert plain objects → Display instances
export function deserializeDisplays(plainObjects: any[]): Display[];
```

#### Client Component (src/app/compare/display/components/PageClient.tsx)

```typescript
// 1. Receive plain objects from server
interface PageClientProps {
  initialDisplays: any[]; // Plain objects, not Display instances
}

// 2. Deserialize to Display instances
const [displays, setDisplays] = useState(() =>
  deserializeDisplays(initialDisplays)
);

// 3. Pass deserialized state to children (CRITICAL!)
<Comparison initialDisplays={displays} /> // ✅ Correct
<Comparison initialDisplays={initialDisplays} /> // ❌ Wrong - plain objects
```

### Common Pitfalls

❌ **Don't**: Pass Display instances from server to client

```typescript
// page.tsx (Server)
<PageClient initialDisplays={displayInstances} /> // React strips methods!
```

❌ **Don't**: Pass plain objects to components expecting Display instances

```typescript
// PageClient.tsx
<Comparison initialDisplays={initialDisplays} /> // Methods undefined
```

❌ **Don't**: Re-decode from URL in client components

```typescript
// Comparison.tsx
useEffect(() => {
  const decoded = decodeDisplays(queryState); // Creates new instances without methods!
}, [queryState]);
```

✅ **Do**: Serialize on server, deserialize on client, pass deserialized state

```typescript
// page.tsx (Server)
<PageClient initialDisplays={serializeDisplays(displays)} />

// PageClient.tsx (Client)
const displays = deserializeDisplays(initialDisplays);
<Comparison initialDisplays={displays} />
```

### Benefits

1. **SEO**: Quick comparison links (e.g., "55 vs 65 inch") properly indexed
2. **Performance**: No "Loading..." state for initial render
3. **Social**: Dynamic Open Graph tags for link previews
4. **Standards**: Follows Next.js 13 server/client best practices

## Blog System Architecture

### Content Pipeline

```
Markdown files (posts/) → gray-matter parsing → Post objects → React components
```

### Key Components

1. **Post Files** (`posts/*.md`)
   - YAML frontmatter metadata
   - Markdown content body
   - Images in `public/images/posts/slug/`

2. **Post Getter** (`src/app/blog/utils/postGetter.ts`)
   - Server-side file system operations
   - Functions: `getAllPostsMetadata()`, `getPostBySlug()`
   - ⚠️ **SERVER ONLY** - never use in client components

3. **Dynamic Routes** (`src/app/blog/[slug]/page.tsx`)
   - Server component for individual posts
   - Auto-generated table of contents from H2 headings
   - Custom React Markdown renderer

4. **Frontmatter Schema**

```yaml
createdAt: "YYYY-MM-DD"
title: "Post Title"
subtitle: "Post Subtitle"
readingTime: 8 # minutes
image:
  alt: "Image description"
  author: "Photographer | Source"
  sources:
    ["/images/posts/slug/image_16x9.png", "/images/posts/slug/image_4x3.png"]
author: "Author Name"
```

### Critical Patterns

#### Server vs Client

```typescript
// ✅ Server Component - OK
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";

// ❌ Client Component - FAILS
("use client");
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter"; // Error: fs module
```

## State Management Patterns

### URL as Single Source of Truth

- All display comparison state stored in URL query parameters
- Enables sharing configurations via links
- Persists across page reloads
- Use `useQueryState` hook for synchronization

### Component State

- Local state with `useState` for UI-only concerns
- URL state via `useQueryState` for shareable data
- No global state management library (Redux, Zustand, etc.)

## Styling Architecture

### Three-Column Layout

```
.layout__left-section   (sidebar)
.layout__center-section (main content)
.layout__right-section  (sidebar/blog)
```

### Styling Hierarchy

1. **DaisyUI Components** - Use first for common UI elements (btn, input, select)
2. **Tailwind Utilities** - For layout, spacing, colors
3. **Custom CSS** - Only for complex animations or unique requirements
4. **CSS Variables** - Theme colors in global CSS

### Conditional Classes

```typescript
import clsxm from "@/lib/clsxm";

className={clsxm(
  "base-classes",
  condition && "conditional-classes",
  {
    "class-1": variant === "primary",
    "class-2": variant === "secondary",
  }
)}
```

## Data Flow Patterns

### Display Comparison Flow (SSR-Enabled)

1. **Server**: Decode URL params → Calculate displays → Serialize → Generate metadata
2. **Client**: Deserialize → Store in state → Pass to children
3. **User**: Modify display input → Component updates state
4. **State**: Encode to URL via `useQueryState`
5. **Display**: Object created via generator
6. **Calculations**: Triggered via facade
7. **UI**: Re-renders with new calculations

### Blog Content Flow

1. Markdown files read from filesystem (server-side)
2. Frontmatter parsed with gray-matter
3. Post metadata/content passed to components
4. Custom React Markdown renderer displays content
5. Table of contents auto-generated from headings
