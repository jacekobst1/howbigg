import { round } from "@/utils/math";

function inchToFeet(feet: number): number {
  return round(feet / 12);
}

function inchToMeter(feet: number): number {
  return round(feet / 39.37);
}

function inchToCm(feet: number): number {
  return round(feet / 0.3937);
}

function cmToMeter(cm: number): number {
  return round(cm / 100);
}

export { inchToFeet, inchToMeter, inchToCm, cmToMeter };
