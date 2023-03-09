import AspectRatio from "./AspectRatio";
import Resolution from "@/app/compare/display/types/Resolution";

interface Display {
  id: number;
  name: string;
  aspectRatio: AspectRatio;
  customAspectRatio: CustomAspectRatio;
  diagonal: Diagonal;
  resolution: Resolution;
  isVertical: boolean;
  width: Size;
  height: Size;
  ppi: number;
  minOptimalViewDistance: ViewDistance;
  maxOptimalViewDistance: ViewDistance;
  minViewDistance: ViewDistance;
  zIndex: number;
  color: Color;
}

interface DisplayUrlState {
  aspectRatio: AspectRatio;
  customAspectRatio: CustomAspectRatio;
  diagonal: Diagonal;
  resolution: Resolution;
  isVertical: boolean;
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

interface ViewDistance {
  ft: number;
  m: number;
}

interface Color {
  background: string;
  text: string;
}

export default Display;
export type { DisplayUrlState };
