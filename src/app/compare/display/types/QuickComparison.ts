interface QuickComparisonDisplay {
  diagonal: number;
  aspectRatio?: string;
  name?: string;
  isVertical?: boolean;
}

interface QuickComparison {
  display1: QuickComparisonDisplay;
  display2: QuickComparisonDisplay;
}

const tvComparisons: QuickComparison[] = [
  { display1: { diagonal: 50 }, display2: { diagonal: 55 } },
  { display1: { diagonal: 55 }, display2: { diagonal: 60 } },
  { display1: { diagonal: 60 }, display2: { diagonal: 65 } },
  { display1: { diagonal: 65 }, display2: { diagonal: 70 } },
  { display1: { diagonal: 50 }, display2: { diagonal: 60 } },
  { display1: { diagonal: 55 }, display2: { diagonal: 65 } },
  { display1: { diagonal: 60 }, display2: { diagonal: 70 } },
];

const monitorComparisons: QuickComparison[] = [
  {
    display1: { diagonal: 24, aspectRatio: "16x9" },
    display2: { diagonal: 27, aspectRatio: "16x9" },
  },
  {
    display1: { diagonal: 27, aspectRatio: "16x9" },
    display2: { diagonal: 32, aspectRatio: "16x9" },
  },
  {
    display1: { diagonal: 27, aspectRatio: "16x9" },
    display2: { diagonal: 34, aspectRatio: "21x9" },
  },
  {
    display1: { diagonal: 34, aspectRatio: "21x9" },
    display2: { diagonal: 38, aspectRatio: "21x9" },
  },
  {
    display1: { diagonal: 34, aspectRatio: "21x9" },
    display2: { diagonal: 49, aspectRatio: "32x9" },
  },
];

const smartphonesComparisons: QuickComparison[] = [
  {
    display1: {
      name: "Iphone 14 Pro",
      diagonal: 6.12,
      aspectRatio: "19.5x9 ",
      isVertical: true,
    },
    display2: {
      name: "Iphone 14 Pro Max",
      diagonal: 6.69,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Iphone 13 mini",
      diagonal: 5.42,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
    display2: {
      name: "Iphone 13",
      diagonal: 6.06,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Iphone SE (2nd gen)",
      diagonal: 4.7,
      aspectRatio: "16x9",
      isVertical: true,
    },
    display2: {
      name: "Iphone 11",
      diagonal: 6.06,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Iphone 14 Pro Max",
      diagonal: 6.69,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
    display2: {
      name: "Samsung S23 Ultra",
      diagonal: 6.8,
      aspectRatio: "19.3x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Pixel 7 Pro",
      diagonal: 6.7,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
    display2: {
      name: "Samsung S23 Ultra",
      diagonal: 6.8,
      aspectRatio: "19.3x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Samsung S23",
      diagonal: 6.1,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
    display2: {
      name: "Samsung S23 Ultra",
      diagonal: 6.8,
      aspectRatio: "19.3x9",
      isVertical: true,
    },
  },
  {
    display1: {
      name: "Pixel 7",
      diagonal: 6.3,
      aspectRatio: "20x9",
      isVertical: true,
    },
    display2: {
      name: "Pixel 7 Pro",
      diagonal: 6.7,
      aspectRatio: "19.5x9",
      isVertical: true,
    },
  },
];

export { tvComparisons, monitorComparisons, smartphonesComparisons };
export type { QuickComparison };
