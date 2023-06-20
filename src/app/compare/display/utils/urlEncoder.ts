import Display, { DisplayUrlState } from "@/app/compare/display/types/Display";
import AspectRatio, {
  aspectRatios,
  defaultAspectRatio,
} from "@/app/compare/display/types/AspectRatio";
import Resolution, {
  defaultResolution,
} from "@/app/compare/display/types/Resolution";

function encodeDisplays(displays: Display[]): string[] {
  return displays.map((display) => {
    const { aspectRatio, customAspectRatio, diagonal, resolution, isVertical } =
      display;
    const { value: aspectValue } = aspectRatio;
    const { width, height } = customAspectRatio;
    const { length, unit } = diagonal;
    const { width: resWidth, height: resHeight } = resolution;
    const orientation = isVertical ? 1 : 0;
    return `${display.name}_${aspectValue}_${width}_${height}_${length}_${unit}_${resWidth}x${resHeight}_${orientation}`;
  });
}

function decodeDisplays(encodedDisplays: string[]) {
  const decodedDisplays: DisplayUrlState[] = [];

  encodedDisplays.forEach((encodedDisplay, index) => {
    const data = encodedDisplay.split("_");

    const aspectRatio =
      aspectRatios.find((ar) => ar.value === data[1]) || defaultAspectRatio;

    const resolution =
      aspectRatio.value !== "custom"
        ? getResolution(data, aspectRatio)
        : getCustomResolution(data);

    decodedDisplays[index] = {
      name: data[0],
      aspectRatio,
      customAspectRatio: {
        width: parseFloat(data[2]),
        height: parseFloat(data[3]),
      },
      diagonal: {
        length: parseFloat(data[4]),
        unit: data[5] as "cm" | "in",
      },
      resolution,
      isVertical: data[7] === "1",
    };
  });

  return decodedDisplays;
}

function getResolution(data: string[], aspectRatio: AspectRatio): Resolution {
  return (
    aspectRatio.possibleResolutions.find(
      (res: { value: string }) => res.value === data[6]
    ) || defaultResolution
  );
}

function getCustomResolution(data: string[]): Resolution {
  const [width, height] = data[6].split("x");

  return {
    ...defaultResolution,
    width: parseFloat(width),
    height: parseFloat(height),
  };
}

export { encodeDisplays, decodeDisplays };
