# Important Constraints and Gotchas

## Critical Constraints

### Display Object Handling

- **Never create Display objects as plain objects** - always use generator utilities
- Display class has methods that will be lost with plain object creation
- Use `mapWithPrototype()` when merging Display instances
- Display objects have complex nested structures (diagonal, resolution, customAspectRatio)

### URL State Hydration

- **Always wait for `isQueryStateReady`** before rendering URL-dependent content
- Prevents hydration mismatches between server and client
- Critical for display comparison feature functionality

```typescript
const [queryState, setQueryState, isQueryStateReady] =
  useQueryState<string[]>("displays");
if (!isQueryStateReady) return null; // or loading state
```

### Server vs Client Components

- **Blog operations are server-side only** - uses Node.js fs module
- Never import `postGetter.ts` utilities in client components
- Mark client components with `"use client"` directive when needed
- Display comparison is client-side (interactive, URL state)

### Next.js App Router

- Uses App Router (not Pages Router)
- Server components by default
- Client components require `"use client"` directive
- Dynamic routes use `[slug]` folder pattern

## Testing Constraints

- **No test suite currently exists** - be cautious with refactoring
- Manual testing required for all changes
- Test edge cases for display calculations (ultra-wide, vertical, custom ratios)
- Verify URL encoding/decoding for complex display configurations

## Build and Deployment

- `npm run build` must succeed before deployment
- Static generation preferred for blog pages
- Environment variables required for analytics (PostHog, Vercel)
- Redirects configured in `next.config.js` for legacy routes

## Styling Constraints

- **Tailwind + DaisyUI only** - no other CSS frameworks
- Custom CSS in global styles only
- Use `clsxm` utility for conditional classes
- Three-column layout is responsive (collapses on mobile)

## Browser Compatibility

- Modern browsers only (ES6+)
- No IE11 support
- Assumes JavaScript enabled (SPA-like experience)

## Performance Considerations

- Calculation utilities run on every state change
- Display comparison can have up to 6 displays simultaneously
- Large display arrays in URL can cause long query strings
- Blog images should be optimized before adding

## Data Validation

- **No runtime validation for Display objects** - TypeScript only
- Assume valid input from URL parameters
- Edge cases: custom aspect ratios with 0 dimensions
- Division by zero potential in aspect ratio calculations

## File System Operations

- **Blog posts must be in `posts/` directory** - hardcoded path
- Images must be in `public/images/posts/{slug}/`
- Multiple aspect ratios required per blog post (16x9, 4x3, 1x1)
- Frontmatter schema must match expected format exactly

## State Management Gotchas

- URL query parameters are the source of truth for display comparison
- Component state updates trigger URL updates
- Browser back/forward affects state
- Direct URL manipulation supported (shareable links)

## Type System Constraints

- Strict mode enabled - all types must be explicit
- No `any` types without good reason
- Intersection types used for component props with native elements
- Enums avoided - use const arrays with `as const` instead

## Common Pitfalls

1. Creating Display objects without generators → methods missing
2. Not waiting for `isQueryStateReady` → hydration errors
3. Importing server-side utilities in client components → build errors
4. Forgetting `"use client"` directive → hooks fail
5. Missing blog post images → broken image links
6. Invalid aspect ratio combinations → calculation errors
