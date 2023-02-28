import Display, { DisplayUrlState } from "@/app/compare/display/types/Display";
import { aspectRatios, defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";

function encodeDisplays(displays: Display[]): string[] {
  return displays.map((display) => {
    const { aspectRatio, customAspectRatio, diagonal, isVertical } = display;
    const { value } = aspectRatio;
    const { width, height } = customAspectRatio;
    const { length, unit } = diagonal;
    const orientation = isVertical ? 1 : 0;

    return `${value}_${width}_${height}_${length}_${unit}_${orientation}`;
  });
}

function decodeDisplays(encodedDisplays: string[]) {
  const decodedDisplays: DisplayUrlState[] = [];

  encodedDisplays.forEach((encodedDisplay, index) => {
    const data = encodedDisplay.split("_");

    decodedDisplays[index] = {
      aspectRatio:
        aspectRatios.find((ar) => ar.value === data[0]) || defaultAspectRatio,
      customAspectRatio: {
        width: parseFloat(data[1]),
        height: parseFloat(data[2]),
      },
      diagonal: {
        length: parseFloat(data[3]),
        unit: data[4] as "cm" | "in",
      },
      isVertical: data[5] === "1",
    };
  });

  return decodedDisplays;
}

export { encodeDisplays, decodeDisplays };
