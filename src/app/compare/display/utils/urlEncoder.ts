import Display, { DisplayUrlState } from "@/app/compare/display/types/Display";
import { aspectRatios, defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";

function encodeDisplays(displays: Display[]): string[] {
  return displays.map(
    (display) =>
      `${display.aspectRatio.value}_${display.customAspectRatio.width}_${display.customAspectRatio.height}_${display.diagonal.length}_${display.diagonal.unit}`
  );
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
    };
  });

  return decodedDisplays;
}

export { encodeDisplays, decodeDisplays };
