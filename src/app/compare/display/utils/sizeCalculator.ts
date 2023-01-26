import Display from "@/app/compare/display/types/Display";

// TODO uprość kod tutaj
// dodaj do typu Display width: {cm: percentage} i height: {cm: percentage}
function setDimensionsOfDisplays(displays: Display[]) {
  fillWidthAndHeight(displays);
  changeDimensionsToPercentage(displays);
  setZIndexFromBiggestToSmallest(displays);
}

function fillWidthAndHeight(displays: Display[]) {
  displays.forEach((display) => {
    const { width, height } = calculateSize(
      display.aspectRatio.decimalValue,
      display.size
    );

    display.width = width;
    display.height = height;
  });
}

function calculateSize(aspectRatio: number, diagonalSizeInch: number) {
  const diagonalSizeCm = diagonalSizeInch * 2.54;
  const heightCm = Math.sqrt(
    (diagonalSizeCm * diagonalSizeCm) / (1 + aspectRatio * aspectRatio)
  );
  const widthCm = heightCm * aspectRatio;

  return { width: widthCm, height: heightCm };
}

function changeDimensionsToPercentage(displays: Display[]) {
  const biggestDisplay = displays.reduce((prev, current) =>
    prev.width > current.width ? prev : current
  );
  const divider = Math.max(biggestDisplay.width);

  displays.forEach((display) => {
    display.width = (display.width / divider) * 100 || 0;
    display.height = (display.height / divider) * 100 || 0;
  });
}

function setZIndexFromBiggestToSmallest(displays: Display[]) {
  const sortedDisplays = [...displays].sort((a, b) => b.width - a.width);

  displays.forEach((display) => {
    display.zIndex = sortedDisplays.indexOf(display);
  });
}

export default setDimensionsOfDisplays;
