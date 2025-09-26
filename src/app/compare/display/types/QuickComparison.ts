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
const iphone17ProMax: QuickComparisonDisplay = {
  name: "iPhone 17 Pro Max",
  diagonal: 6.9,
  aspectRatio: "19.55x9",
  isVertical: true,
  resolution: "2868x1320",
};

const iphone17Pro: QuickComparisonDisplay = {
  name: "iPhone 17 Pro",
  diagonal: 6.3,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2556x1179",
};

const iphone17: QuickComparisonDisplay = {
  name: "iPhone 17",
  diagonal: 6.3,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2556x1179",
};

// Samsungs
const samsungS25Ultra: QuickComparisonDisplay = {
  name: "Samsung Galaxy S25 Ultra",
  diagonal: 6.9,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "3120x1440",
};

const samsungS25Plus: QuickComparisonDisplay = {
  name: "Samsung Galaxy S25+",
  diagonal: 6.7,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "3120x1440",
};

const samsungS25: QuickComparisonDisplay = {
  name: "Samsung Galaxy S25",
  diagonal: 6.2,
  aspectRatio: "19.5x9",
  isVertical: true,
  resolution: "2340x1080",
};

// Pixels
const pixel10ProXL: QuickComparisonDisplay = {
  name: "Google Pixel 10 Pro XL",
  diagonal: 6.8,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2992x1344",
};

const pixel10Pro: QuickComparisonDisplay = {
  name: "Google Pixel 10 Pro",
  diagonal: 6.3,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2856x1280",
};

const pixel10: QuickComparisonDisplay = {
  name: "Google Pixel 10",
  diagonal: 6.3,
  aspectRatio: "20x9",
  isVertical: true,
  resolution: "2424x1080",
};

const smartphonesComparisons: QuickComparison[] = [
  {
    display1: iphone17,
    display2: iphone17Pro,
  },
  {
    display1: iphone17,
    display2: iphone17ProMax,
  },
  {
    display1: iphone17Pro,
    display2: iphone17ProMax,
  },
  {
    display1: samsungS25,
    display2: samsungS25Plus,
  },
  {
    display1: samsungS25,
    display2: samsungS25Ultra,
  },
  {
    display1: samsungS25Plus,
    display2: samsungS25Ultra,
  },
  {
    display1: pixel10,
    display2: pixel10Pro,
  },
  {
    display1: pixel10,
    display2: pixel10ProXL,
  },
  {
    display1: pixel10Pro,
    display2: pixel10ProXL,
  },
  {
    display1: iphone17,
    display2: samsungS25,
  },
  {
    display1: iphone17Pro,
    display2: samsungS25Plus,
  },
  {
    display1: iphone17ProMax,
    display2: samsungS25Ultra,
  },
  {
    display1: iphone17,
    display2: pixel10,
  },
  {
    display1: iphone17Pro,
    display2: pixel10Pro,
  },
  {
    display1: iphone17ProMax,
    display2: pixel10ProXL,
  },
  {
    display1: samsungS25,
    display2: pixel10,
  },
  {
    display1: samsungS25Plus,
    display2: pixel10Pro,
  },
  {
    display1: samsungS25Ultra,
    display2: pixel10ProXL,
  },
];

export { tvComparisons, monitorComparisons, smartphonesComparisons };
export type { QuickComparison };
