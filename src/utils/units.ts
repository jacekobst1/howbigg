import { round } from "@/utils/math";

export function inToFt(value: number): number {
  return round(value / 12);
}

export function ftToIn(value: number): number {
  return round(value * 12);
}

export function inToCm(value: number): number {
  return round(value * 2.54);
}

export function cmToIn(value: number): number {
  return round(value * 0.393701);
}

export function inToM(value: number): number {
  return round(value * 0.0254);
}

export function mToIn(value: number): number {
  return round(value * 39.3701);
}

export function cmToM(value: number): number {
  return round(value * 0.01);
}

export function mToCm(value: number): number {
  return round(value * 100);
}
