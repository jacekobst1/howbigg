import Display from "@/app/compare/display/types/Display";
import { cmToIn, inToCm } from "@/utils/units";

function setDisplaysDimensions(displays: Display[]) {
  setWidthAndHeightStandard(displays);
  setWidthAndHeightPercentage(displays);
  setZIndexFromBiggestToSmallest(displays);
}

function setWidthAndHeightStandard(displays: Display[]) {
  displays.forEach((display) => {
    const aspectRatioDecimalValue = display.isVertical
      ? 1 / tmpTodoGetAspectRatioDecimalValue(display)
      : tmpTodoGetAspectRatioDecimalValue(display);

    const { widthCm, heightCm, widthIn, heightIn } = calculateSize(
      aspectRatioDecimalValue,
      display.diagonal.length,
      display.diagonal.unit === "in"
    );

    display.width.cm = widthCm;
    display.width.in = widthIn;
    display.height.cm = heightCm;
    display.height.in = heightIn;
  });
}

/**
 * TODO it should be encapsulated in Display object
 */
function tmpTodoGetAspectRatioDecimalValue(display: Display): number {
  if (display.resolution.width && display.resolution.height) {
    return display.resolution.width / display.resolution.height;
  }

  if (display.aspectRatio.value === "custom") {
    return display.customAspectRatio.width / display.customAspectRatio.height;
  }

  const [x, y] = display.aspectRatio.value.split("x");
  return parseInt(x) / parseInt(y);
}

function calculateSize(
  aspectRatio: number,
  diagonalSize: number,
  isInches: boolean = true
) {
  const diagonalSizeCm = isInches ? inToCm(diagonalSize) : diagonalSize;
  const heightCm = Math.sqrt(
    (diagonalSizeCm * diagonalSizeCm) / (1 + aspectRatio * aspectRatio)
  );
  const widthCm = heightCm * aspectRatio;

  const widthIn = cmToIn(widthCm);
  const heightIn = cmToIn(heightCm);

  return { widthCm, heightCm, widthIn, heightIn };
}

function setWidthAndHeightPercentage(displays: Display[]) {
  const biggestDisplay = displays.reduce((prev, current) =>
    Math.max(current.width.cm, current.height.cm) >
    Math.max(prev.width.cm, prev.height.cm)
      ? current
      : prev
  );
  const divider = Math.max(biggestDisplay.width.cm, biggestDisplay.height.cm);

  displays.forEach((display) => {
    display.width.percentage = (display.width.cm / divider) * 100 || 0;
    display.height.percentage = (display.height.cm / divider) * 100 || 0;
  });
}

function setZIndexFromBiggestToSmallest(displays: Display[]) {
  const sortedDisplays = [...displays].sort(
    (a, b) => b.width.cm * b.height.cm - a.width.cm * a.height.cm
  );

  displays.forEach((display) => {
    display.zIndex = sortedDisplays.indexOf(display);
  });
}

export default setDisplaysDimensions;
