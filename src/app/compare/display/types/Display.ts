import AspectRatio from "./AspectRatio";

interface Display {
  id: number;
  name: string;
  aspectRatio: AspectRatio;
  customAspectRatio: CustomAspectRatio;
  diagonal: Diagonal;
  width: Size;
  height: Size;
  zIndex: number;
}

interface CustomAspectRatio {
  width: number;
  height: number;
}

interface Diagonal {
  length: number;
  unit: "in" | "cm";
}

interface Size {
  in: number;
  cm: number;
  percentage: number;
}

export default Display;
