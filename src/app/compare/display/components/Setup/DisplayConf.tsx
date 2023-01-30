"use client";

import Select from "@/components/form/selects/Select";
import Input from "@/components/form/inputs/Input";
import InputGroup from "@/components/form/inputs/InputGroup";
import Toggle from "@/components/form/inputs/Toggle";
import { aspectRatios } from "../../types/AspectRatio";
import React from "react";
import Display from "@/app/compare/display/types/Display";
import { round } from "lodash";

interface DisplayProps {
  display: Display;
  setDisplay: (display: Display) => void;
}

export default function DisplayConf({ display, setDisplay }: DisplayProps) {
  const setAspectRatio = (aspectRatio: string) => {
    const selectedAspectRatio = aspectRatios.find(
      (ar) => ar.value === aspectRatio
    );

    if (selectedAspectRatio) {
      display.aspectRatio = selectedAspectRatio;
      setDisplay(display);
    }
  };

  const setCustomAspectRatioWidth = (value: string) => {
    display.customAspectRatio.width = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setCustomAspectRatioHeight = (value: string) => {
    display.customAspectRatio.height = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setDiagonal = (size: string) => {
    display.diagonal.length = Math.abs(parseFloat(size)) || 0;
    setDisplay(display);
  };

  const setUnit = (checked: boolean) => {
    const unit = checked ? "cm" : "in";
    display.diagonal.unit = unit;
    display.diagonal.length =
      unit === "cm"
        ? display.diagonal.length * 2.54
        : display.diagonal.length / 2.54;
    setDisplay(display);
  };

  return (
    <div className="flex">
      <div className="w-36">
        <div className="flex">
          <div
            className="w-fit h-full rounded-3xl px-0.5 py-3 mr-1"
            style={{ backgroundColor: display.color }}
          />
          <p className="text-slate-600 font-semibold">{display.name}</p>
        </div>

        <div className="form-control mt-3">
          <Select
            defaultValue="16x9"
            mOnChange={setAspectRatio}
            label="Aspect ratio"
            options={aspectRatios}
            mSize="sm"
          />
        </div>
        {display.aspectRatio.value === "custom" && (
          <div className="form-control mt-2 flex flex-row">
            <Input
              value={display.customAspectRatio.width || ""}
              mOnChange={setCustomAspectRatioWidth}
              type="number"
              mSize="sm"
            />
            <span className="mx-2">x</span>
            <Input
              value={display.customAspectRatio.height || ""}
              mOnChange={setCustomAspectRatioHeight}
              type="number"
              mSize="sm"
            />
          </div>
        )}
        <div className="form-control mt-3">
          <InputGroup size="sm" label="Size">
            <Input
              value={round(display.diagonal.length, 2) || ""}
              mOnChange={setDiagonal}
              type="number"
              mSize="sm"
            />
            <span className="bg-primary-100 text-xs">
              {display.diagonal.unit}
            </span>
          </InputGroup>
        </div>
        <div className="form-control mt-3">
          <Toggle
            checked={display.diagonal.unit === "cm"}
            onChange={setUnit}
            label="Use centimeters"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
