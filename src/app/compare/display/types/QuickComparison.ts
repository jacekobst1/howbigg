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

// Iphones
const iphone15ProMax: QuickComparisonDisplay = {
  name: "Iphone 15 Pro Max",
  diagonal: 6.7,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2796x1290",
};

const iphone15Pro: QuickComparisonDisplay = {
  name: "Iphone 15 Pro",
  diagonal: 6.1,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2556x1179",
};

const iphone15: QuickComparisonDisplay = {
  name: "Iphone 15",
  diagonal: 6.1,
  aspectRatio: "19.5x9",
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

const iphone14Pro: QuickComparisonDisplay = {
  name: "Iphone 14 Pro",
  diagonal: 6.12,
  aspectRatio: "19.5x9 ",
  isVertical: true,
  resolution: "2556x1179",
};

const iphone14: QuickComparisonDisplay = {
  name: "Iphone 14",
  diagonal: 6.06,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2532x1170",
};

const iphone13: QuickComparisonDisplay = {
  name: "Iphone 13",
  diagonal: 6.06,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2532x1170",
};

const iphone13Mini: QuickComparisonDisplay = {
  name: "Iphone 13 mini",
  diagonal: 5.42,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2340x1080",
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

// Samsungs
const samsungS24Ultra: QuickComparisonDisplay = {
  name: "Samsung S24 Ultra",
  diagonal: 6.8,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "3120x1440",
};

const samsungS24: QuickComparisonDisplay = {
  name: "Samsung S24",
  diagonal: 6.1,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2340x1080",
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

// Pixels
const pixel8Pro: QuickComparisonDisplay = {
  name: "Pixel 8 Pro",
  diagonal: 6.7,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2992x1344",
};

const pixel8: QuickComparisonDisplay = {
  name: "Pixel 8",
  diagonal: 6.2,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2400x1080",
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
    display1: iphone15,
    display2: iphone15Pro,
  },
  {
    display1: iphone15,
    display2: iphone15ProMax,
  },
  {
    display1: iphone15Pro,
    display2: iphone15ProMax,
  },
  {
    display1: iphone15,
    display2: iphone14,
  },
  {
    display1: iphone15Pro,
    display2: iphone14Pro,
  },
  {
    display1: iphone15ProMax,
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
    display1: samsungS24,
    display2: samsungS24Ultra,
  },
  {
    display1: samsungS24,
    display2: iphone15,
  },
  {
    display1: samsungS24,
    display2: pixel8,
  },
  {
    display1: samsungS24Ultra,
    display2: iphone15ProMax,
  },
  {
    display1: samsungS24Ultra,
    display2: pixel8Pro,
  },
  {
    display1: pixel8,
    display2: pixel8Pro,
  },
  {
    display1: pixel8,
    display2: iphone15
  },
  {
    display1: pixel8Pro,
    display2: iphone15ProMax
  },
];

export { tvComparisons, monitorComparisons, smartphonesComparisons };
export type { QuickComparison };
