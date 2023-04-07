import AspectRatio from "./AspectRatio";
import Resolution from "@/app/compare/display/types/Resolution";

class Display {
  constructor(
    public id: number,
    public name: string,
    public aspectRatio: AspectRatio,
    public customAspectRatio: CustomAspectRatio,
    public diagonal: Diagonal,
    public resolution: Resolution,
    public isVertical: boolean,
    public width: Size,
    public height: Size,
    public ppi: number,
    public minOptimalViewDistance: ViewDistance,
    public maxOptimalViewDistance: ViewDistance,
    public minViewDistance: ViewDistance,
    public zIndex: number,
    public color: Color
  ) {}

  public getAspectRatioDecimalValue(): number {
    if (this.resolution.width && this.resolution.height) {
      return this.resolution.width / this.resolution.height;
    }

    if (this.aspectRatio.value === "custom") {
      return this.customAspectRatio.width / this.customAspectRatio.height;
    }

    const [x, y] = this.aspectRatio.value.split("x");

    return parseInt(x) / parseInt(y);
  }
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
