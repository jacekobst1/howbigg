interface AspectRatio {
  label: string;
  value: string; // TODO sprawdź czy to w ogóle teraz potrzebne do czegoś (może key w htmlu?)
  decimalValue: number;
}

const aspectRatios: AspectRatio[] = [
  { label: "4 x 3", value: "4x3", decimalValue: 4 / 3 },
  { label: "16 x 9", value: "16x9", decimalValue: 16 / 9 },
  { label: "16 x 10", value: "16x10", decimalValue: 16 / 10 },
  { label: "21 x 9", value: "21x9", decimalValue: 21 / 9 },
  { label: "32 x 9", value: "32x9", decimalValue: 32 / 9 },
  { label: "custom", value: "custom", decimalValue: 0 },
];

export default AspectRatio;
export { aspectRatios };
