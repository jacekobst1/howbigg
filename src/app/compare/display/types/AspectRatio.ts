interface AspectRatio {
  label: string;
  value: string;
  decimalValue: number;
  optGroup?: string;
}

const aspectRatios: AspectRatio[] = [
  {
    label: "4 x 3",
    value: "4x3",
    decimalValue: 4 / 3,
    optGroup: "Standard",
  },
  {
    label: "5 x 4",
    value: "5x4",
    decimalValue: 5 / 4,
    optGroup: "Standard",
  },

  {
    label: "16 x 9",
    value: "16x9",
    decimalValue: 16 / 9,
    optGroup: "Wide",
  },
  {
    label: "16 x 10",
    value: "16x10",
    decimalValue: 16 / 10,
    optGroup: "Wide",
  },

  {
    label: "21 x 9",
    value: "21x9",
    decimalValue: 21 / 9,
    optGroup: "Ultra wide",
  },
  {
    label: "32 x 9",
    value: "32x9",
    decimalValue: 32 / 9,
    optGroup: "Ultra wide",
  },

  {
    label: "16 x 18",
    value: "16x18",
    decimalValue: 16 / 18,
    optGroup: "Other",
  },
  {
    label: "custom",
    value: "custom",
    decimalValue: 0,
    optGroup: "Other",
  },
];

export default AspectRatio;
export { aspectRatios };
