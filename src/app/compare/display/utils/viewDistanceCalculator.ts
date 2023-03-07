import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";
import { defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";
import { inToCm, inToFt, inToM } from "@/utils/metrics";

export function setViewDistance(displays: Display[]) {
  displays.forEach((display) => {
    if (
      display.ppi === 0 ||
      display.aspectRatio.value !== defaultAspectRatio.value
    ) {
      setViewDistancesTo0(display);
      return;
    }

    const resHeight = display.resolution.height;
    const resWidth = resHeight * display.aspectRatio.decimalValue;

    const optimalDistance = calculateOptimalViewDistance(display.width.in);
    const minDistance = calculateMinViewDistance(display.width.in, resWidth);

    display.minViewDistance = minDistance;
    display.optimalViewDistance =
      minDistance.ft > optimalDistance.ft ? minDistance : optimalDistance;
  });
}

function calculateOptimalViewDistance(displayWidthIn: number) {
  const optimalViewAngle = 30;
  const tanValue = calculateTangensOfViewAngle(optimalViewAngle);

  const optimalDistance = round((0.5 * displayWidthIn) / tanValue);

  return {
    ft: inToFt(optimalDistance),
    m: inToM(optimalDistance),
  };
}

function calculateMinViewDistance(
  displayWidthInt: number,
  resolutionWidthIn: number
) {
  const minimalViewAngle = resolutionWidthIn / 60;
  const tanValue = calculateTangensOfViewAngle(minimalViewAngle);

  const minDistance = round(displayWidthInt / (2 * tanValue));

  return {
    ft: inToFt(minDistance),
    m: inToM(minDistance),
  };
}

function calculateTangensOfViewAngle(viewAngle: number): number {
  const angleInDegrees = viewAngle / 2;
  const angleInRadians = angleInDegrees * (Math.PI / 180);

  return Math.tan(angleInRadians);
}

function setViewDistancesTo0(display: Display) {
  display.optimalViewDistance = {
    ft: 0,
    m: 0,
  };
  display.minViewDistance = {
    ft: 0,
    m: 0,
  };
}
