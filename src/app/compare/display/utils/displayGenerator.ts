import { defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";
import Display from "@/app/compare/display/types/Display";
import { defaultResolution } from "@/app/compare/display/types/Resolution";
import { clone } from "lodash";

function generateDisplays(numberOfDisplays: number) {
  const displays: Display[] = [];

  for (let i = 1; i <= numberOfDisplays; i++) {
    const display = initDisplay(i);
    display.color = colors[i - 1];
    displays.push(display);
  }

  return displays;
}

function generateDisplaysWithoutPossibleResolutions(numberOfDisplays: number) {
  let displays = generateDisplays(numberOfDisplays);

  displays.forEach((display) => {
    display.aspectRatio = {
      ...display.aspectRatio,
      possibleResolutions: [],
    };
  });

  return displays;
}

function generateDisplayByExistingOnes(existingDisplays: Display[]) {
  const nonUsedColors = colors.filter(
    (color) =>
      !existingDisplays.some(
        (display) => display.color.background === color.background,
      ),
  );
  const maxId = Math.max(...existingDisplays.map((display) => display.id));

  const newDisplay = initDisplay(maxId + 1);
  newDisplay.color = nonUsedColors[0];

  return newDisplay;
}

function initDisplay(id: number) {
  return new Display(
    id,
    `Display ${id}`,
    clone(defaultAspectRatio),
    { width: 0, height: 0 },
    { length: 0, unit: "in" },
    clone(defaultResolution),
    false,
    { in: 0, cm: 0, percentage: 0 },
    { in: 0, cm: 0, percentage: 0 },
    0,
    { ft: 0, m: 0 },
    { ft: 0, m: 0 },
    { ft: 0, m: 0 },
    0,
    { background: dark, text: light },
  );
}

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

export {
  generateDisplays,
  generateDisplayByExistingOnes,
  generateDisplaysWithoutPossibleResolutions,
};
