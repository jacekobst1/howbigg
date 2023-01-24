import AspectRatio from "./AspectRatio";

interface Display {
  id: number;
  name: string;
  aspectRatio: AspectRatio;
  size: number;
  unit: "in" | "cm";
  width: number;
  height: number;
  aspectRatioDecimal: number;
  zIndex: number;
}

export default Display;
