import { Metadata } from "next";
import { generateDisplaysWithoutPossibleResolutions } from "@/app/compare/display/utils/displayGenerator";
import { decodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { mapWithPrototype, mergeDeep } from "@/utils/objects";
import Display from "@/app/compare/display/types/Display";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";
import config from "@/config";

/**
 * Generates dynamic metadata for display comparison pages
 * Can be used in both root page and /compare/display page
 */
export function generateComparisonMetadata(displaysParam?: string): Metadata {
  const baseTitle = "Display Size Comparison Tool";
  const baseDescription = "Compare display sizes visually. See exact dimensions, PPI, and optimal viewing distances for monitors, TVs, and smartphones.";

  if (displaysParam) {
    try {
      const encoded = JSON.parse(decodeURIComponent(displaysParam));
      const decoded = decodeDisplays(encoded);
      const defaults = generateDisplaysWithoutPossibleResolutions(decoded.length);
      const merged = mapWithPrototype(
        defaults,
        (display, index) => mergeDeep(display, decoded[index]) as Display
      );
      const displays = getDetailedDisplays(merged);

      const displayDescriptions = displays
        .filter(d => d.diagonal.length > 0)
        .map(d => {
          const size = d.diagonal.length;
          let aspectRatio = d.aspectRatio.value;

          // If custom aspect ratio, format it
          if (aspectRatio === 'custom' && d.customAspectRatio.width && d.customAspectRatio.height) {
            aspectRatio = `${d.customAspectRatio.width}x${d.customAspectRatio.height}`;
          }

          return `${size}in ${aspectRatio}`;
        })
        .join(" vs ");

      if (displayDescriptions) {
        const title = `${displayDescriptions} - Display Comparison | ${config.shortUrl}`;
        const description = `Compare ${displayDescriptions} displays. See size differences, PPI calculations, optimal viewing distances, and physical dimensions side-by-side.`;

        return {
          title,
          description,
          openGraph: {
            title,
            description,
            url: `${config.fullUrl}/compare/display`,
            siteName: config.shortUrl,
            type: "website",
          },
          twitter: {
            card: "summary_large_image",
            title,
            description,
          },
        };
      }
    } catch (e) {
      // Use default metadata on error
    }
  }

  return {
    title: baseTitle,
    description: baseDescription,
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `${config.fullUrl}/compare/display`,
      siteName: config.shortUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
    },
  };
}
