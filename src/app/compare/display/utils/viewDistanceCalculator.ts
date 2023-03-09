import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";
import { defaultAspectRatio } from "@/app/compare/display/types/AspectRatio";
import { inToFt, inToM } from "@/utils/metrics";

const minThxViewAngle = 28;
const maxThxViewAngle = 40;

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

    display.minViewDistance = calculateMinViewDistance(
      display.width.in,
      resWidth
    );
    display.minOptimalViewDistance = calculateOptimalViewDistance(
      display.width.in,
      minThxViewAngle
    );
    display.maxOptimalViewDistance = calculateOptimalViewDistance(
      display.width.in,
      maxThxViewAngle
    );
  });
}

function calculateOptimalViewDistance(
  displayWidthIn: number,
  viewAngle: number
) {
  const distance = round(
    (0.5 * displayWidthIn) / calculateTangensOfViewAngle(viewAngle)
  );

  return {
    ft: inToFt(distance),
    m: inToM(distance),
  };
}

function calculateMinViewDistance(
  displayWidthInt: number,
  resolutionWidthIn: number
) {
  const minimalViewAngle = resolutionWidthIn / 60;
  const tanValue = calculateTangensOfViewAngle(minimalViewAngle);

  const distance = round(displayWidthInt / (2 * tanValue));

  return {
    ft: inToFt(distance),
    m: inToM(distance),
  };
}

function calculateTangensOfViewAngle(viewAngle: number): number {
  const angleInDegrees = viewAngle / 2;
  const angleInRadians = angleInDegrees * (Math.PI / 180);

  return Math.tan(angleInRadians);
}

function setViewDistancesTo0(display: Display) {
  display.minOptimalViewDistance = {
    ft: 0,
    m: 0,
  };
  display.maxOptimalViewDistance = {
    ft: 0,
    m: 0,
  };
  display.minViewDistance = {
    ft: 0,
    m: 0,
  };
}
