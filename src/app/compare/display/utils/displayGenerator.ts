import { aspectRatios } from "@/app/compare/display/types/AspectRatio";
import Display from "@/app/compare/display/types/Display";

const initDisplay = (id: number): Display => ({
  id: id,
  name: `Display ${id}`,
  aspectRatio: aspectRatios[1],
  diagonal: {
    length: 0,
    unit: "in",
  },
  width: {
    in: 0,
    cm: 0,
    percentage: 0,
  },
  height: {
    in: 0,
    cm: 0,
    percentage: 0,
  },
  zIndex: 0,
});

const generateDisplays = (numberOfDisplays: number) => {
  const displays: Display[] = [];

  for (let i = 1; i <= numberOfDisplays; i++) {
    displays.push(initDisplay(i));
  }

  return displays;
};

export { generateDisplays };
