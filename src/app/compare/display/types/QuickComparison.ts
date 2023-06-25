interface QuickComparisonDisplay {
  diagonal: number;
  aspectRatio?: string;
  name?: string;
  isVertical?: boolean;
  resolution?: string;
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

const iphone14Pro: QuickComparisonDisplay = {
  name: "Iphone 14 Pro",
  diagonal: 6.12,
  aspectRatio: "19.5x9 ",
  isVertical: true,
  resolution: "2556x1179",
};

const iphone14ProMax: QuickComparisonDisplay = {
  name: "Iphone 14 Pro Max",
  diagonal: 6.69,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2796x1290",
};

const iphone13Mini: QuickComparisonDisplay = {
  name: "Iphone 13 mini",
  diagonal: 5.42,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2340x1080",
};

const iphone13: QuickComparisonDisplay = {
  name: "Iphone 13",
  diagonal: 6.06,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2532x1170",
};

const iphoneSE2ndGen: QuickComparisonDisplay = {
  name: "Iphone SE (2nd gen)",
  diagonal: 4.7,
  aspectRatio: "16x9",
  isVertical: true,
  resolution: "1334x750",
};

const iphone11: QuickComparisonDisplay = {
  name: "Iphone 11",
  diagonal: 6.06,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "1792x828",
};

const samsungS23Ultra: QuickComparisonDisplay = {
  name: "Samsung S23 Ultra",
  diagonal: 6.8,
  aspectRatio: "19.3x9",
  isVertical: true,
  resolution: "3088x1440",
};

const samsungS23: QuickComparisonDisplay = {
  name: "Samsung S23",
  diagonal: 6.1,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2340x1080",
};

const pixel7Pro: QuickComparisonDisplay = {
  name: "Pixel 7 Pro",
  diagonal: 6.7,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "3120x1440",
};

const pixel7: QuickComparisonDisplay = {
  name: "Pixel 7",
  diagonal: 6.3,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2400x1080",
};

const smartphonesComparisons: QuickComparison[] = [
  {
    display1: iphone14Pro,
    display2: iphone14ProMax,
  },
  {
    display1: iphone13Mini,
    display2: iphone13,
  },
  {
    display1: iphoneSE2ndGen,
    display2: iphone11,
  },
  {
    display1: iphone14ProMax,
    display2: samsungS23Ultra,
  },
  {
    display1: pixel7Pro,
    display2: samsungS23Ultra,
  },
  {
    display1: samsungS23,
    display2: samsungS23Ultra,
  },
  {
    display1: pixel7,
    display2: pixel7Pro,
  },
];

export { tvComparisons, monitorComparisons, smartphonesComparisons };
export type { QuickComparison };
