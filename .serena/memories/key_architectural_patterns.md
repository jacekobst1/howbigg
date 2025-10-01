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
readingTime: 8  # minutes
image:
  alt: "Image description"
  author: "Photographer | Source"
  sources: ["/images/posts/slug/image_16x9.png", "/images/posts/slug/image_4x3.png"]
author: "Author Name"
```

### Critical Patterns

#### Server vs Client
```typescript
// ✅ Server Component - OK
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";

// ❌ Client Component - FAILS
"use client";
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

### Display Comparison Flow
1. User modifies display input
2. Component updates local state
3. State encoded to URL via `useQueryState`
4. Display object created via generator
5. Calculations triggered via facade
6. UI re-renders with new calculations

### Blog Content Flow
1. Markdown files read from filesystem (server-side)
2. Frontmatter parsed with gray-matter
3. Post metadata/content passed to components
4. Custom React Markdown renderer displays content
5. Table of contents auto-generated from headings