import Display from "@/app/compare/screen/components/Setup/Display";

function setDimensionsOfDisplays(displays: Display[]) {
  fillWidthAndHeight(displays);
  changeDimensionsToPercentage(displays);
  sortFromBiggestToSmallest(displays);
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
    prev.width * prev.height > current.width * current.height ? prev : current
  );
  const divider = Math.max(biggestDisplay.width, biggestDisplay.height);

  displays.forEach((display) => {
    display.width = (display.width / divider) * 100;
    display.height = (display.height / divider) * 100;
  });
}

function sortFromBiggestToSmallest(displays: Display[]) {
  displays.sort((a, b) => b.width * b.height - a.width * a.height);
}

export default setDimensionsOfDisplays;
