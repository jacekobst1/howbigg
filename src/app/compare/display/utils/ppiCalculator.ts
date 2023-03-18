import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";

export function setPPI(displays: Display[]) {
  displays.forEach((display) => {
    const { height: resHeight, width: resWidth } = display.resolution;

    if (display.diagonal.length === 0) {
      display.ppi = 0;
      return;
    }

    const ppi =
      Math.sqrt(Math.pow(resWidth, 2) + Math.pow(resHeight, 2)) /
      display.diagonal.length;

    display.ppi = round(ppi, 2) || 0;
  });
}
