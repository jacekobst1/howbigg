# Codebase Structure

## Directory Organization

```
howbigg/
├── src/
│   ├── app/                      # Next.js 13 App Router
│   │   ├── compare/display/      # Display comparison feature
│   │   │   ├── components/       # Feature-specific components
│   │   │   ├── types/           # Display, AspectRatio, Resolution types
│   │   │   └── utils/           # Calculation utilities
│   │   ├── blog/                # Blog feature
│   │   │   ├── [slug]/          # Dynamic blog post routes
│   │   │   └── utils/           # Post parsing utilities
│   │   ├── contact/             # Contact page
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/              # Shared components
│   │   ├── buttons/             # Button variants
│   │   ├── form/                # Form controls (inputs, selects, checkboxes)
│   │   ├── layout/              # Header, Footer, Navigation
│   │   ├── links/               # Link variants
│   │   └── shared/              # Cross-cutting concerns
│   ├── hooks/                   # Custom React hooks (useQueryState)
│   ├── lib/                     # Utilities (clsxm)
│   ├── utils/                   # General utilities
│   ├── styles/                  # Global CSS
│   ├── config.ts                # Environment configuration
│   └── middleware.ts            # Next.js middleware
├── posts/                       # Blog markdown files
├── public/                      # Static assets
│   └── images/                  # Images organized by feature/post
├── tailwind.config.js           # Tailwind + DaisyUI configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── CLAUDE.md                    # Comprehensive development guide

## Key Architectural Patterns

### Feature-Based Organization
- Features are co-located under `src/app/` with their own components, types, and utils
- Example: `src/app/compare/display/` contains everything for display comparison

### Component Organization
- Shared components in `src/components/` organized by type
- Feature-specific components nested under feature routes
- Layout components handle responsive three-column design

### Type Co-location
- Types defined close to where they're used (`src/app/compare/display/types/`)
- Core domain classes like `Display` use constructor-based initialization

### Utility Organization
- Feature-specific utilities in feature directories
- Global utilities in `src/utils/` and `src/lib/`
- Calculation utilities separate by concern (PPI, size, viewing distance)
```
