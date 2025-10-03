# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Howbigg is a Next.js 13 application for comparing display sizes (monitors, TVs, phones, etc.) and providing educational content about display technology through a blog. The app allows users to visually compare multiple displays side-by-side with detailed calculations for PPI, optimal viewing distance, and physical dimensions.

## Development Commands

```bash
# Development server (opens on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

## Tech Stack

- **Framework**: Next.js 13 with App Router (`src/app/`)
- **Styling**: Tailwind CSS + DaisyUI component library
- **TypeScript**: Strict typing throughout
- **Analytics**: PostHog + Vercel Analytics
- **Blog**: Markdown files with gray-matter frontmatter parsing
- **State Management**: React hooks + URL query state synchronization

## Architecture Overview

### Core Application Structure

The app is divided into three main features:

1. **Display Comparison Tool** (`src/app/compare/display/`)
   - Complex state-driven comparison UI
   - URL-encoded display configurations for shareability
   - Real-time calculations for display metrics (PPI, viewing distance, dimensions)
   - Support for up to 6 simultaneous display comparisons
   - Custom aspect ratio support

2. **Blog System** (`src/app/blog/`, `posts/`)
   - Markdown-based content with frontmatter metadata
   - Dynamic routing via `[slug]` pattern
   - Server-side post parsing with `gray-matter`
   - Auto-generated table of contents from H2 headings
   - Custom React Markdown renderer with syntax highlighting

3. **Shared Components** (`src/components/`)
   - Organized by type: `buttons/`, `form/`, `layout/`, `links/`, `shared/`
   - Layout components handle responsive three-column design
   - Reusable form controls for display configuration

### Display Comparison Architecture

The display comparison feature uses a sophisticated calculation pipeline:

**Display Object Flow**:

```
User Input → DisplayUrlState → Display class → Calculations → Visual Presentation
```

**Key Files**:

- `types/Display.ts` - Core Display class with 20+ properties (diagonal, resolution, aspect ratio, PPI, viewing distances)
- `utils/displayGenerator.ts` - Creates Display instances with sensible defaults
- `utils/displayDetailsFacade.ts` - Orchestrates all calculations (size, PPI, viewing distance)
- `utils/urlEncoder.ts` - Serializes/deserializes Display objects to/from URL query params
- `utils/sizeCalculator.ts` - Computes physical dimensions from diagonal + aspect ratio
- `utils/ppiCalculator.ts` - Calculates pixels per inch
- `utils/viewDistanceCalculator.ts` - Computes optimal viewing distances

**State Management**:

- Custom `useQueryState` hook synchronizes React state with URL query parameters
- All display configurations are URL-encoded, making comparisons shareable via links
- Component state updates trigger URL updates, which persist across page reloads

**Server/Client Component Pattern (SEO-Optimized)**:

The comparison page uses a server-side rendering pattern for optimal SEO:

```
Server (page.tsx):
  1. Read searchParams from URL
  2. Decode & calculate Display instances
  3. Serialize to plain objects
  4. Generate dynamic metadata for SEO
     ↓
Client (PageClient.tsx):
  1. Deserialize to Display instances
  2. Restore class methods
  3. Pass to child components
     ↓
Children (Comparison, ProductRecommendations):
  1. Receive proper Display instances
  2. Use methods (getAspectRatioDecimalValue)
  3. Maintain methods through updates
```

**Key Files**:

- `page.tsx` - Server Component, decodes URL params, generates metadata
- `displaySerializer.ts` - Converts Display ↔ plain objects
- `PageClient.tsx` - Deserializes and manages client state

**Why This Matters**:

- **SEO**: Search engines see full content in initial HTML
- **React**: Can't pass class instances across server/client boundary
- **Methods**: Display.getAspectRatioDecimalValue() works throughout app

### Blog System Architecture

**Content Pipeline**:

```
Markdown files (posts/) → gray-matter parsing → Post objects → React components
```

**Key Files**:

- `posts/*.md` - Blog content with YAML frontmatter (title, subtitle, image, author, createdAt, readingTime)
- `src/app/blog/utils/postGetter.ts` - Server-side file system operations to read/parse posts
- `src/app/blog/[slug]/page.tsx` - Dynamic route for individual blog posts
- `src/app/blog/[slug]/components/MyReactMarkdown.tsx` - Custom markdown renderer
- `src/app/blog/[slug]/components/TableOfContents.tsx` - Auto-generated from H2 headings

**Blog Post Frontmatter Schema**:

```yaml
createdAt: "YYYY-MM-DD"
title: "Post Title"
subtitle: "Post Subtitle"
readingTime: 8 # in minutes
image:
  alt: "Image description"
  author: "Photographer | Source"
  sources: ["/images/posts/slug/image_16x9.png", ...]
author: "Author Name"
```

### Styling System

- **Tailwind + DaisyUI**: Component-first approach with utility classes
- **Custom Theme**: Defined in `tailwind.config.js` with custom primary colors and animations
- **CSS Variables**: Primary color shades defined in global CSS, referenced via Tailwind
- **Responsive Design**: Three-column layout (`.layout__left-section`, `.layout__center-section`, `.layout__right-section`)
- **Animations**: Custom flicker and shimmer keyframes for visual effects

## Important Patterns

### URL State Synchronization

The app heavily relies on URL query parameters for state persistence:

```typescript
// Custom hook used throughout comparison feature
const [queryState, setQueryState, isQueryStateReady] =
  useQueryState<string[]>("displays");

// Displays are encoded/decoded to/from URL
const encodedDisplays = encodeDisplays(displays); // Display[] → string[]
const decodedDisplays = decodeDisplays(queryState); // string[] → Partial<Display>[]
```

Always wait for `isQueryStateReady` before rendering to avoid hydration mismatches.

### Display Object Instantiation & Serialization

The Display class uses constructor-based initialization, not plain objects:

```typescript
// ❌ Wrong - loses class methods
const display = { id: 1, name: "Monitor", ... };

// ✅ Correct - uses displayGenerator utilities
const display = generateDisplays(1)[0];
const newDisplay = generateDisplayByExistingOnes(existingDisplays);
```

Use `mapWithPrototype()` from `src/utils/objects.ts` when merging Display instances.

**Server/Client Serialization**:

When passing Display instances from Server to Client Components, you must serialize/deserialize:

```typescript
// Server Component (page.tsx)
import { serializeDisplays } from "@/app/compare/display/utils/displaySerializer";

const displays = getDetailedDisplays(merged);
<PageClient initialDisplays={serializeDisplays(displays)} />

// Client Component (PageClient.tsx)
import { deserializeDisplays } from "@/app/compare/display/utils/displaySerializer";

const [displays, setDisplays] = useState(() =>
  deserializeDisplays(initialDisplays)
);

// Now safe to use methods ✅
displays[0].getAspectRatioDecimalValue();
```

**⚠️ Critical**: Never pass Display class instances directly from Server to Client Components - React will strip methods!

### Blog Post Retrieval

All blog operations are server-side only (fs operations):

```typescript
// Server components only
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";

// Never use in client components - will fail
```

## File Organization Conventions

- **Types**: Co-located with features (`src/app/compare/display/types/`)
- **Utils**: Feature-specific utilities in feature directories
- **Components**: Feature components nested under feature routes
- **Shared Components**: Cross-cutting concerns in `src/components/shared/`
- **Hooks**: Global custom hooks in `src/hooks/`
- **Blog Posts**: Markdown files in root-level `posts/` directory
- **Images**: Public assets in `public/images/`, organized by feature/post

## Testing Approach

Currently no test suite exists. When adding tests:

- Use Jest + React Testing Library
- Test calculation utilities first (PPI, size, viewing distance)
- Test Display object methods and serialization
- Test URL encoding/decoding logic

## Key Configuration

### Environment Variables

See `src/config.ts`:

- `FULL_URL` - Full site URL (default: https://howbigg.com)
- `SHORT_URL` - Short URL for display (default: howbigg.com)
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics key
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host URL

### Next.js Configuration

- Redirects configured in `next.config.js` for legacy routes and www canonicalization
- Uses App Router (not Pages Router)
- Static generation preferred for blog pages

## Common Tasks

### Adding a New Display Preset

1. Add preset data to `src/app/compare/display/components/QuickComparisons.tsx`
2. Use `generateDisplays()` or manually create Display instances
3. Ensure aspect ratio and resolution are valid combinations

### Adding a New Blog Post

1. Create `posts/your-slug.md` with proper frontmatter
2. Add images to `public/images/posts/your-slug/`
3. Include multiple aspect ratios (16x9, 4x3, 1x1) for responsive display
4. Post will auto-appear in blog list, sorted by `createdAt` descending

### Modifying Display Calculations

1. Locate the specific calculator in `src/app/compare/display/utils/`
2. Update calculation logic (ensure units are consistent)
3. Test with edge cases (ultra-wide, vertical displays, custom aspect ratios)
4. Update `displayDetailsFacade.ts` if adding new calculated properties

### Styling Components

1. Use DaisyUI component classes first (`btn`, `input`, `select`, etc.)
2. Use Tailwind utilities for layout and spacing
3. Add custom utilities to `tailwind.config.js` theme.extend if needed
4. Use `clsxm` utility from `src/lib/clsxm.ts` for conditional classes
