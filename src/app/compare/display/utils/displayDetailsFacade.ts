import Display from "@/app/compare/display/types/Display";
import { cloneDeep } from "@/utils/objects";
import setDisplaysDimensions from "@/app/compare/display/utils/sizeCalculator";
import { setPPI } from "@/app/compare/display/utils/ppiCalculator";

export function getDetailedDisplays(displays: Display[]) {
  let clonedDisplays = cloneDeep(displays);

  setDisplaysDimensions(clonedDisplays);
  setPPI(clonedDisplays);

  return clonedDisplays;
}
