# Task Completion Checklist

When completing a task in this project, follow this checklist:

## Code Quality Checks

### 1. Linting

```bash
npm run lint
```

- Ensure no ESLint errors
- Fix any warnings if reasonable
- Check that code follows Next.js best practices

### 2. Type Checking

- TypeScript strict mode is enabled
- Ensure no type errors during build
- Run `npm run build` to verify types

### 3. Code Review

- Components follow existing patterns (see code_style_conventions memory)
- Proper use of path aliases (@/)
- Consistent naming conventions
- No unused imports or variables

## Feature-Specific Checks

### Display Comparison Features

- Display objects created via `generateDisplays()` utilities, not plain objects
- URL state synchronization working (`useQueryState` hook)
- Wait for `isQueryStateReady` before rendering
- Calculations tested with edge cases (ultra-wide, vertical, custom aspect ratios)

### Blog Features

- Blog operations are server-side only (no client-side fs operations)
- Frontmatter schema matches expected format
- Images exist in `public/images/posts/slug/`
- Multiple aspect ratios provided (16x9, 4x3, 1x1)

### Styling

- DaisyUI component classes used first
- Tailwind utilities for layout and spacing
- `clsxm` used for conditional classes
- Responsive design tested (three-column layout)

## Testing (when implemented)

Currently no test suite exists. When tests are added:

- Run test suite before marking complete
- Ensure new features have test coverage
- Test calculation utilities first priority

## Documentation

- Update CLAUDE.md if architectural changes made
- Add comments for complex logic
- Update type definitions if data shapes changed

## Git Workflow

- Work on feature branch (never main/master)
- Commit messages are descriptive
- `git status` checked before commit
- Changes reviewed with `git diff`

## Pre-Commit Verification

```bash
# Full verification
npm run lint && npm run build
```

## Deployment Considerations

- Environment variables configured (see src/config.ts)
- Static generation working for blog pages
- Redirects tested (next.config.js)
- Analytics integration verified (PostHog, Vercel)
