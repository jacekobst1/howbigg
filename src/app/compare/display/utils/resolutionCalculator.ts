import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";

export function setResolution(displays: Display[]) {
  displays.forEach((display) => {
    display.resolution.width = round(
      display.resolution.height * display.aspectRatio.decimalValue,
      0
    );
  });
}
