import Display from "@/app/compare/display/types/Display";

/**
 * Formats displays into a human-readable string for titles/metadata
 * Example: "24in 16x9 vs 55in 16x9"
 * @param displays - Array of Display instances to format
 * @returns Formatted string with display sizes and aspect ratios, or empty string if no valid displays
 */
export function formatDisplayDescriptions(displays: Display[]): string {
  return displays
    .filter((d) => d.diagonal.length > 0)
    .map((d) => {
      const size = d.diagonal.length;
      let aspectRatio = d.aspectRatio.value;

      if (
        aspectRatio === "custom" &&
        d.customAspectRatio.width &&
        d.customAspectRatio.height
      ) {
        aspectRatio = `${d.customAspectRatio.width}x${d.customAspectRatio.height}`;
      }

      return `${size}in ${aspectRatio}`;
    })
    .join(" vs ");
}
