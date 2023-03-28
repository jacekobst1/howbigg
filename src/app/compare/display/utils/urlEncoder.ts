import Display, { DisplayUrlState } from "@/app/compare/display/types/Display";
import {
  aspectRatios,
  defaultAspectRatio,
} from "@/app/compare/display/types/AspectRatio";
import { defaultResolution } from "@/app/compare/display/types/Resolution";

function encodeDisplays(displays: Display[]): string[] {
  return displays.map((display) => {
    const { aspectRatio, customAspectRatio, diagonal, resolution, isVertical } =
      display;
    const { value: aspectValue } = aspectRatio;
    const { width, height } = customAspectRatio;
    const { length, unit } = diagonal;
    const { value: resValue } = resolution;
    const orientation = isVertical ? 1 : 0;

    return `${aspectValue}_${width}_${height}_${length}_${unit}_${resValue}_${orientation}`;
  });
}

function decodeDisplays(encodedDisplays: string[]) {
  const decodedDisplays: DisplayUrlState[] = [];

  encodedDisplays.forEach((encodedDisplay, index) => {
    const data = encodedDisplay.split("_");

    const aspectRatio =
      aspectRatios.find((ar) => ar.value === data[0]) || defaultAspectRatio;

    const resolution =
      aspectRatio.possibleResolutions.find(
        (res: { value: string }) => res.value === data[5]
      ) || defaultResolution;

    decodedDisplays[index] = {
      aspectRatio,
      customAspectRatio: {
        width: parseFloat(data[1]),
        height: parseFloat(data[2]),
      },
      diagonal: {
        length: parseFloat(data[3]),
        unit: data[4] as "cm" | "in",
      },
      resolution,
      isVertical: data[6] === "1",
    };
  });

  return decodedDisplays;
}

export { encodeDisplays, decodeDisplays };
