import AspectRatio, { aspectRatios } from "./AspectRatio";

interface Display {
  id: number;
  name: string;
  aspectRatio: AspectRatio;
  size: number;
  unit: "in" | "cm";
  width: number;
  height: number;
  aspectRatioDecimal: number;
}

const initDisplay = (id: number): Display => ({
  id: id,
  name: `Display ${id}`,
  aspectRatio: aspectRatios[0],
  size: 0,
  unit: "in",
  width: 0,
  height: 0,
  aspectRatioDecimal: 0,
});

const generateDisplays = (numberOfDisplays: number) => {
  const displays: Display[] = [];

  for (let i = 1; i <= numberOfDisplays; i++) {
    displays.push(initDisplay(i));
  }

  return displays;
};

export default Display;
export { generateDisplays };
