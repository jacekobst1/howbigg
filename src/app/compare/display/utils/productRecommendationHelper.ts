import Display from "@/app/compare/display/types/Display";
import { ProductSection, productSections } from "@/data/productRecommendations";

export interface DisplayInfo {
  id: number;
  name: string;
  color: { background: string; text: string };
  size: number;
}

export interface EnrichedProductSection extends ProductSection {
  matchingDisplays: DisplayInfo[];
}

/**
 * Determines if a display should be classified as a monitor or TV
 * Rules:
 * - Monitor: size ≤ 32" OR aspect ratio ≠ 16:9
 * - TV: size > 32" AND aspect ratio = 16:9
 */
export function determineProductType(display: Display): "monitor" | "tv" {
  const sizeInInches = display.diagonal.length;
  const aspectRatioValue = display.getAspectRatioDecimalValue();
  const is16x9 = Math.abs(aspectRatioValue - 16 / 9) < 0.01;

  if (sizeInInches <= 32 || !is16x9) {
    return "monitor";
  }

  return "tv";
}

/**
 * Checks if any display has a valid size configured
 */
export function hasValidDisplay(displays: Display[]): boolean {
  return displays.some((display) => display.diagonal.length > 0);
}

/**
 * Finds the closest size range for a given display size
 */
function findClosestSizeRange(
  size: number,
  sections: ProductSection[]
): ProductSection | null {
  let closest: ProductSection | null = null;
  let minDistance = Infinity;

  for (const section of sections) {
    const [min, max] = section.sizeRange;
    const midpoint = (min + max) / 2;
    const distance = Math.abs(size - midpoint);

    if (size >= min && size <= max) {
      return section;
    }

    if (distance < minDistance) {
      minDistance = distance;
      closest = section;
    }
  }

  return closest;
}

/**
 * Filters and returns relevant product sections based on user's displays
 * Sorted by size (smallest to largest)
 * Includes display associations for visual indicators
 * @param displays - Array of Display objects to filter products for
 * @param limit - Maximum number of sections to return (default: 4)
 */
export function filterRelevantProducts(
  displays: Display[],
  limit: number = 4
): EnrichedProductSection[] {
  const validDisplays = displays.filter((d) => d.diagonal.length > 0);

  if (validDisplays.length === 0) {
    return [];
  }

  // Map to track sections and their matching displays
  const relevantSectionsMap = new Map<string, EnrichedProductSection>();

  for (const display of validDisplays) {
    const type = determineProductType(display);
    const size = display.diagonal.length;

    const typeSections = productSections.filter((s) => s.type === type);
    const closestSection = findClosestSizeRange(size, typeSections);

    if (closestSection) {
      const displayInfo: DisplayInfo = {
        id: display.id,
        name: display.name || `Display ${display.id}`,
        color: display.color,
        size: display.diagonal.length,
      };

      // If section already exists, add this display to its matching displays
      if (relevantSectionsMap.has(closestSection.title)) {
        const existingSection = relevantSectionsMap.get(closestSection.title)!;
        existingSection.matchingDisplays.push(displayInfo);
      } else {
        // Create new enriched section
        relevantSectionsMap.set(closestSection.title, {
          ...closestSection,
          matchingDisplays: [displayInfo],
        });
      }
    }
  }

  const sections = Array.from(relevantSectionsMap.values());

  // Sort by size (smallest to largest)
  sections.sort((a, b) => {
    const aMidpoint = (a.sizeRange[0] + a.sizeRange[1]) / 2;
    const bMidpoint = (b.sizeRange[0] + b.sizeRange[1]) / 2;
    return aMidpoint - bMidpoint;
  });

  // Apply limit
  return sections.slice(0, limit);
}

/**
 * Groups sections by product type for organized display
 */
export function groupSectionsByType(sections: EnrichedProductSection[]): {
  monitors: EnrichedProductSection[];
  tvs: EnrichedProductSection[];
} {
  return {
    monitors: sections.filter((s) => s.type === "monitor"),
    tvs: sections.filter((s) => s.type === "tv"),
  };
}
