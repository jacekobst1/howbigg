import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";

export function setPPI(displays: Display[]) {
  displays.forEach((display) => {
    const resHeight = display.resolution.height;
    const resWidth = resHeight * display.aspectRatio.decimalValue;

    if (display.diagonal.length === 0) {
      display.ppi = null;
      return;
    }

    const ppi =
      Math.sqrt(Math.pow(resWidth, 2) + Math.pow(resHeight, 2)) /
      display.diagonal.length;

    display.ppi = round(ppi, 1) || null;
  });
}
