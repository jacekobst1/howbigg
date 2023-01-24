import { aspectRatios } from "@/app/compare/display/types/AspectRatio";
import Display from "@/app/compare/display/types/Display";

const initDisplay = (id: number): Display => ({
  id: id,
  name: `Display ${id}`,
  aspectRatio: aspectRatios[0],
  size: 0,
  unit: "in",
  width: 0,
  height: 0,
  aspectRatioDecimal: 0,
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
