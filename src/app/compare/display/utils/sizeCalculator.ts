import Display from "@/app/compare/display/types/Display";

function setDimensionsOfDisplays(displays: Display[]) {
  fillWidthAndHeight(displays);
  changeDimensionsToPercentage(displays);
  setZIndexFromBiggestToSmallest(displays);
}

function fillWidthAndHeight(displays: Display[]) {
  displays.forEach((display) => {
    const { widthCm, heightCm, widthIn, heightIn } = calculateSize(
      display.aspectRatio.decimalValue,
      display.diagonal.length,
      display.diagonal.unit === "in"
    );

    display.width.cm = widthCm;
    display.width.in = widthIn;
    display.height.cm = heightCm;
    display.height.in = heightIn;
  });
}

function calculateSize(
  aspectRatio: number,
  diagonalSize: number,
  isInches: boolean = true
) {
  const diagonalSizeCm = isInches ? diagonalSize * 2.54 : diagonalSize;
  const heightCm = Math.sqrt(
    (diagonalSizeCm * diagonalSizeCm) / (1 + aspectRatio * aspectRatio)
  );
  const widthCm = heightCm * aspectRatio;

  const widthIn = widthCm / 2.54;
  const heightIn = heightCm / 2.54;

  return { widthCm, heightCm, widthIn, heightIn };
}

function changeDimensionsToPercentage(displays: Display[]) {
  const biggestDisplay = displays.reduce((prev, current) =>
    prev.width.cm > current.width.cm ? prev : current
  );
  const divider = Math.max(biggestDisplay.width.cm);

  displays.forEach((display) => {
    display.width.percentage = (display.width.cm / divider) * 100 || 0;
    display.height.percentage = (display.height.cm / divider) * 100 || 0;
  });
}

function setZIndexFromBiggestToSmallest(displays: Display[]) {
  const sortedDisplays = [...displays].sort((a, b) => b.width.cm - a.width.cm);

  displays.forEach((display) => {
    display.zIndex = sortedDisplays.indexOf(display);
  });
}

export default setDimensionsOfDisplays;
