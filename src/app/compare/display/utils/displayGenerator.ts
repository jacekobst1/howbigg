import { aspectRatios } from "@/app/compare/display/types/AspectRatio";
import Display from "@/app/compare/display/types/Display";

const initDisplay = (id: number): Display => ({
  id: id,
  name: `Display ${id}`,
  aspectRatio: aspectRatios[2],
  customAspectRatio: {
    width: 0,
    height: 0,
  },
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
  color: "#000000",
});

const colors = ["#413C69", "#F4B0C7", "#4A47A3", "#AD62AA"];

const generateDisplays = (numberOfDisplays: number) => {
  const displays: Display[] = [];

  for (let i = 1; i <= numberOfDisplays; i++) {
    const display = initDisplay(i);
    display.color = colors[i - 1];
    displays.push(display);
  }

  return displays;
};

export { generateDisplays };
