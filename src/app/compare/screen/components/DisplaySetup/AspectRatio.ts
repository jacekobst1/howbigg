interface AspectRatio {
  label: string;
  value: string;
}

const aspectRatios: AspectRatio[] = [
  { label: "4 x 3", value: "4x3" },
  { label: "16 x 9", value: "16x9" },
  { label: "16 x 10", value: "16x10" },
  { label: "21 x 9", value: "21x9" },
  { label: "32 x 9", value: "32x9" },
  { label: "custom", value: "custom" },
];

export default AspectRatio;
export { aspectRatios };
