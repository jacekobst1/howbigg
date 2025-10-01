# SSR and Class Serialization Patterns

## The Problem

Next.js 13 App Router separates Server Components and Client Components. **Class instances with methods cannot cross this boundary** - React automatically serializes data passed between server and client, which strips away class methods.

### What Happens Without Serialization

```typescript
// Server Component
const display = new Display(/* ... */);
console.log(display.getAspectRatioDecimalValue()); // ✅ Works - it's a method

// Pass to Client Component
<ClientComponent display={display} />

// Client Component receives:
const display = props.display;
console.log(display.getAspectRatioDecimalValue()); // ❌ TypeError: not a function
```

React serializes the instance to JSON, losing all methods. You receive a plain object, not a Display instance.

---

## The Solution: Serialize/Deserialize Pattern

### Architecture Overview

```
┌─────────────────────────────────────────────┐
│ SERVER COMPONENT (page.tsx)                 │
│                                             │
│ 1. Decode URL params                        │
│ 2. Create Display instances                 │
│ 3. Calculate properties (PPI, dimensions)   │
│ 4. Serialize to plain objects               │
│    ↓ serializeDisplays()                    │
└──────────────┬──────────────────────────────┘
               │ Plain objects (JSON-safe)
               ▼
┌─────────────────────────────────────────────┐
│ CLIENT COMPONENT (PageClient.tsx)           │
│                                             │
│ 1. Receive plain objects                    │
│    ↓ deserializeDisplays()                  │
│ 2. Reconstruct Display instances            │
│ 3. Store in state with methods intact       │
│ 4. Pass instances to child components       │
└──────────────┬──────────────────────────────┘
               │ Display instances with methods
               ▼
┌─────────────────────────────────────────────┐
│ CHILD COMPONENTS (Comparison, etc.)         │
│                                             │
│ 1. Receive Display instances                │
│ 2. Use methods freely                       │
│    display.getAspectRatioDecimalValue() ✅  │
└─────────────────────────────────────────────┘
```

---

## Implementation Details

### Step 1: Server Component Decodes & Serializes

**File**: `src/app/compare/display/page.tsx`

```typescript
import { serializeDisplays } from "@/app/compare/display/utils/displaySerializer";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";

interface PageProps {
  searchParams: { displays?: string };
}

export default function CompareDisplayPage({ searchParams }: PageProps) {
  // 1. Decode URL parameters server-side
  let initialDisplays: Display[] = generateDisplays(2);
  
  if (searchParams.displays) {
    try {
      const encoded = JSON.parse(decodeURIComponent(searchParams.displays));
      const decoded = decodeDisplays(encoded);
      const defaults = generateDisplaysWithoutPossibleResolutions(decoded.length);
      const merged = mapWithPrototype(defaults, (display, index) => 
        mergeDeep(display, decoded[index]) as Display
      );
      // 2. Calculate all display properties (PPI, dimensions, etc.)
      initialDisplays = getDetailedDisplays(merged);
    } catch (e) {
      console.error("Failed to decode displays:", e);
    }
  }

  // 3. Serialize Display instances to plain objects
  return (
    <div className="layout__container layout-xl">
      <section className="layout__left-section">
        <QuickComparisons />
      </section>
      <PageClient posts={posts} initialDisplays={serializeDisplays(initialDisplays)} />
    </div>
  );
}
```

**Key Points**:
- Server reads `searchParams.displays` from URL
- Decodes and calculates Display instances
- **Must serialize before passing to PageClient**

---

### Step 2: Serialization Utilities

**File**: `src/app/compare/display/utils/displaySerializer.ts`

```typescript
import Display from "../types/Display";

/**
 * Converts Display instances to plain objects
 * React can serialize these across server/client boundary
 */
export function serializeDisplays(displays: Display[]): any[] {
  return displays.map(display => ({
    id: display.id,
    name: display.name,
    aspectRatio: display.aspectRatio,
    customAspectRatio: display.customAspectRatio,
    diagonal: display.diagonal,
    resolution: display.resolution,
    isVertical: display.isVertical,
    width: display.width,
    height: display.height,
    ppi: display.ppi,
    minOptimalViewDistance: display.minOptimalViewDistance,
    maxOptimalViewDistance: display.maxOptimalViewDistance,
    minViewDistance: display.minViewDistance,
    zIndex: display.zIndex,
    color: display.color,
  }));
}

/**
 * Reconstructs Display instances from plain objects
 * Restores all class methods
 */
export function deserializeDisplays(plainObjects: any[]): Display[] {
  return plainObjects.map(obj => {
    // Create new Display instance with constructor
    const display = new Display(
      obj.id,
      obj.name,
      obj.aspectRatio,
      obj.customAspectRatio,
      obj.diagonal,
      obj.resolution,
      obj.isVertical,
      obj.width,
      obj.height,
      obj.ppi,
      obj.minOptimalViewDistance,
      obj.maxOptimalViewDistance,
      obj.minViewDistance,
      obj.zIndex,
      obj.color
    );
    return display; // Now has all methods!
  });
}
```

**Why This Works**:
- `serializeDisplays()` creates plain objects that React can serialize
- `deserializeDisplays()` calls `new Display()` to restore methods
- All Display methods like `getAspectRatioDecimalValue()` work after deserialization

---

### Step 3: Client Component Deserializes

**File**: `src/app/compare/display/components/PageClient.tsx`

```typescript
"use client";

import { deserializeDisplays } from "../utils/displaySerializer";
import Display from "../types/Display";

interface PageClientProps {
  posts: PostMetadata[];
  initialDisplays: any[]; // Plain objects from server
}

export default function PageClient({ posts, initialDisplays }: PageClientProps) {
  // Deserialize plain objects to Display instances with methods
  const [displays, setDisplays] = useState<Display[]>(() =>
    deserializeDisplays(initialDisplays)
  );

  return (
    <>
      <section className="layout__center-section">
        {/* CRITICAL: Pass deserialized state, not props! */}
        <Comparison onDisplaysChange={setDisplays} initialDisplays={displays} />
      </section>
      <section className="layout__right-section">
        <RightSidebarContent displays={displays} posts={posts} />
      </section>
    </>
  );
}
```

**Key Points**:
- Receives `initialDisplays` as plain objects (type: `any[]`)
- **Immediately deserializes** in useState initializer
- **Passes deserialized `displays` state** to children, not raw `initialDisplays`

---

### Step 4: Children Use Display Methods

**File**: `src/app/compare/display/components/Comparison.tsx`

```typescript
interface ComparisonProps {
  onDisplaysChange?: (displays: Display[]) => void;
  initialDisplays?: Display[]; // Receives proper Display instances
}

export default function Comparison({ onDisplaysChange, initialDisplays }: ComparisonProps) {
  const [displays, setDisplays] = useState(initialDisplays || generateDisplays(2));

  // Methods work! ✅
  const aspectRatio = displays[0].getAspectRatioDecimalValue();
  
  return <div>{ /* render */ }</div>;
}
```

**File**: `src/app/compare/display/utils/productRecommendationHelper.ts`

```typescript
export function determineProductType(display: Display): "monitor" | "tv" {
  // Methods work! ✅
  const aspectRatioValue = display.getAspectRatioDecimalValue();
  
  const is16x9 = Math.abs(aspectRatioValue - 16 / 9) < 0.01;
  
  if (sizeInInches <= 32 || !is16x9) {
    return "monitor";
  }
  return "tv";
}
```

---

## Critical Rules

### ✅ Do This

1. **Serialize on server before passing to client**
```typescript
<PageClient initialDisplays={serializeDisplays(displays)} />
```

2. **Deserialize immediately in first client component**
```typescript
const [displays, setDisplays] = useState(() => deserializeDisplays(initialDisplays));
```

3. **Pass deserialized state to children, not raw props**
```typescript
<Comparison initialDisplays={displays} /> // ✅ State
<Comparison initialDisplays={initialDisplays} /> // ❌ Props
```

4. **Trust server-provided state, don't re-decode from URL**
```typescript
// ❌ Don't do this in client components
useEffect(() => {
  const decoded = decodeDisplays(queryState); // Creates new instances without methods!
}, [queryState]);
```

### ❌ Don't Do This

1. **Pass class instances from server to client**
```typescript
// page.tsx (Server)
<PageClient initialDisplays={displayInstances} /> // ❌ React strips methods
```

2. **Pass plain objects to components expecting Display instances**
```typescript
// PageClient.tsx
<Comparison initialDisplays={initialDisplays} /> // ❌ No methods
```

3. **Create Display instances without using constructor**
```typescript
const display = { id: 1, name: "Monitor", ... }; // ❌ Not a Display instance
```

---

## Files Modified

### Created
- `src/app/compare/display/utils/displaySerializer.ts` - Serialization utilities

### Modified
- `src/app/compare/display/page.tsx` - Server decode + serialize
- `src/app/compare/display/components/PageClient.tsx` - Client deserialize
- `src/app/compare/display/components/Comparison.tsx` - Remove redundant URL decode
- `src/app/page.tsx` - Pass searchParams through

---

## Benefits

1. **SEO**: Search engines see full content in initial HTML
2. **Methods**: Display.getAspectRatioDecimalValue() works everywhere
3. **Performance**: No "Loading..." state for initial render
4. **React**: No warnings about passing class instances
5. **Standards**: Follows Next.js 13 official patterns

---

## Troubleshooting

### Error: "display.getAspectRatioDecimalValue is not a function"

**Cause**: Display instance lost methods during serialization

**Check**:
1. Is `serializeDisplays()` called in page.tsx before passing to PageClient?
2. Is `deserializeDisplays()` called in PageClient to restore instances?
3. Are you passing deserialized `displays` state to children, not raw `initialDisplays` props?
4. Are child components re-decoding from URL, creating new plain objects?

**Fix**: Follow the complete serialize → deserialize → pass state pattern

---

## Related Documentation

- `claudedocs/seo-architecture-upgrade.md` - Complete implementation history
- `CLAUDE.md` - Project-wide documentation
- Next.js Docs: Server and Client Components - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns