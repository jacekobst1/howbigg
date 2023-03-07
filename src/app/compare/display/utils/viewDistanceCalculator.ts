import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";
import { defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";
import { inchToCm, inchToFeet, inchToMeter } from "@/utils/metrics";

export function setViewDistance(displays: Display[]) {
  displays.forEach((display) => {
    if (
      display.ppi === 0 ||
      display.aspectRatio.value !== defaultAspectRatio.value
    ) {
      display.optimalViewDistance = {
        ft: 0,
        m: 0,
      };
      display.minViewDistance = {
        ft: 0,
        m: 0,
      };
      return;
    }

    const resHeight = display.resolution.height;
    const resWidth = resHeight * display.aspectRatio.decimalValue;

    const optimalDistance = calculateOptimalViewDistance(display.width.in);
    const minDistance = calculateMinViewDistance(display.width.in, resWidth);

    display.minViewDistance = {
      ft: inchToFeet(minDistance),
      m: inchToMeter(minDistance),
    };

    if (minDistance > optimalDistance) {
      display.optimalViewDistance = {
        ft: inchToFeet(minDistance),
        m: inchToMeter(minDistance),
      };
    } else {
      display.optimalViewDistance = {
        ft: inchToFeet(optimalDistance),
        m: inchToMeter(optimalDistance),
      };
    }
  });
}

function calculateOptimalViewDistance(displayWidthIn: number): number {
  const optimalViewAngle = 30;
  const tanValue = calculateTangensOfViewAngle(optimalViewAngle);

  return round((0.5 * displayWidthIn) / tanValue);
}

function calculateMinViewDistance(
  displayWidthInt: number,
  resolutionWidthIn: number
): number {
  const minimalViewAngle = resolutionWidthIn / 60;
  const tanValue = calculateTangensOfViewAngle(minimalViewAngle);

  return round(displayWidthInt / (2 * tanValue));
}

function calculateTangensOfViewAngle(viewAngle: number): number {
  const angleInDegrees = viewAngle / 2;
  const angleInRadians = angleInDegrees * (Math.PI / 180);

  return Math.tan(angleInRadians);
}
