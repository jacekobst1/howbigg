import { defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";
import Display from "@/app/compare/display/types/Display";
import { defaultResolution } from "@/app/compare/display/types/Resolution";

function generateDisplays(numberOfDisplays: number) {
  const displays: Display[] = [];

  for (let i = 1; i <= numberOfDisplays; i++) {
    const display = initDisplay(i);
    display.color = colors[i - 1];
    displays.push(display);
  }

  return displays;
}

function generateDisplayByExistingOnes(existingDisplays: Display[]) {
  const nonUsedColors = colors.filter(
    (color) =>
      !existingDisplays.some(
        (display) => display.color.background === color.background
      )
  );
  const maxId = Math.max(...existingDisplays.map((display) => display.id));

  const newDisplay = initDisplay(maxId + 1);
  newDisplay.color = nonUsedColors[0];

  return newDisplay;
}

const initDisplay = (id: number): Display => ({
  id: id,
  name: `Display ${id}`,
  aspectRatio: defaultAspectRatio,
  customAspectRatio: {
    width: 0,
    height: 0,
  },
  diagonal: {
    length: 0,
    unit: "in",
  },
  resolution: defaultResolution,
  isVertical: false,
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
  ppi: 0,
  minOptimalViewDistance: {
    ft: 0,
    m: 0,
  },
  maxOptimalViewDistance: {
    ft: 0,
    m: 0,
  },
  minViewDistance: {
    ft: 0,
    m: 0,
  },
  zIndex: 0,
  color: {
    background: "#000",
    text: "#FFF",
  },
});

const dark = "#000";
const light = "#FFF";

const colors = [
  { background: "#413C69", text: light },
  { background: "#F4B0C7", text: dark },
  { background: "#7E7F9A", text: light },
  { background: "#adb1ff", text: dark },
  { background: "#608983", text: light },
  { background: "#F3DE8A", text: dark },
];

export { generateDisplays, generateDisplayByExistingOnes };
