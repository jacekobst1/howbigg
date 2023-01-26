import AspectRatio from "./AspectRatio";

interface Display {
  id: number;
  name: string;
  aspectRatio: AspectRatio;
  diagonal: Diagonal;
  width: Size;
  height: Size;
  zIndex: number;
}

interface Size {
  in: number;
  cm: number;
  percentage: number;
}

interface Diagonal {
  length: number;
  unit: "in" | "cm";
}

export default Display;
