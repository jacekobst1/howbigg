# Code Style and Conventions

## TypeScript Standards
- **Strict Mode**: TypeScript strict mode enabled in tsconfig.json
- **Type Declarations**: Explicit types for function parameters and return values
- **Interfaces**: Used for data shapes and component props
- **Classes**: Constructor-based initialization for domain objects (e.g., Display class)
- **Type Inference**: Leverage TypeScript inference where clear

## Naming Conventions
- **Files**: PascalCase for components (Button.tsx), camelCase for utilities (sizeCalculator.ts)
- **Components**: PascalCase (Button, Display, BlogColumn)
- **Functions**: camelCase (calculatePPI, generateDisplays)
- **Variables**: camelCase (queryState, displayList)
- **Constants**: UPPER_SNAKE_CASE for true constants (though rarely used)
- **Types/Interfaces**: PascalCase (Display, AspectRatio, ButtonProps)
- **CSS Classes**: kebab-case with BEM-like patterns for custom classes

## React Patterns
- **Functional Components**: All components use functional style with hooks
- **forwardRef**: Used when ref forwarding needed (e.g., Button component)
- **Component Props**: Defined as TypeScript types with intersection types for native props
  ```typescript
  type ButtonProps = { /* custom props */ } & React.ComponentPropsWithRef<"button">;
  ```
- **Hooks**: Custom hooks prefixed with `use` (useQueryState)
- **Default Exports**: Components use default exports
- **displayName**: Set for forwardRef components

## Styling Patterns
- **Tailwind First**: Use Tailwind utility classes as primary styling method
- **DaisyUI Components**: Leverage DaisyUI component classes (btn, input, select)
- **clsxm Utility**: Use `clsxm` from `src/lib/clsxm.ts` for conditional classes
- **Inline Styles**: Avoid inline styles except for dynamic values
- **CSS Variables**: Use for theme colors defined in global CSS

## Import Patterns
- **Path Aliases**: Use `@/` alias for imports from src directory
  ```typescript
  import Button from "@/components/buttons/Button";
  import { Display } from "@/app/compare/display/types/Display";
  ```
- **Named vs Default**: Components use default exports, utilities use named exports
- **Import Order**: External packages → Internal modules → Types

## Code Organization
- **One Component Per File**: Each component in its own file
- **Co-located Types**: Types defined close to usage or in feature-specific types directories
- **Utility Functions**: Separated by concern into focused files
- **Server vs Client**: Clear separation (blog operations server-only, display comparison client-side)

## Special Patterns
- **URL State Sync**: Use `useQueryState` hook for URL-synchronized state
- **Display Objects**: Always instantiate via `generateDisplays()` or similar utilities, never plain objects
- **Hydration Safety**: Wait for `isQueryStateReady` before rendering URL-dependent content
- **Server Components**: Blog post operations use server-side fs operations

## Linting and Formatting
- **ESLint**: Next.js core-web-vitals config + Prettier integration
- **Prettier**: Empty config (uses defaults)
- **Auto-formatting**: Prettier handles formatting automatically