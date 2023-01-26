"use client";

import Select from "@/components/form/selects/Select";
import Input from "@/components/form/inputs/Input";
import InputGroup from "@/components/form/inputs/InputGroup";
import Toggle from "@/components/form/inputs/Toggle";
import { aspectRatios } from "../../types/AspectRatio";
import React from "react";
import Display from "@/app/compare/display/types/Display";

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
      setDisplay({
        ...display,
        aspectRatio: selectedAspectRatio,
      });
    }
  };

  const setSize = (size: string) =>
    setDisplay({ ...display, size: parseFloat(size) });

  const setUnit = (checked: boolean) => {
    const unit = checked ? "cm" : "in";
    setDisplay({ ...display, unit: unit });
  };

  return (
    <div className="flex">
      <div className="w-36">
        <p className="text-slate-600 text-lg mb-3">{display.name}</p>
        <div className="form-control">
          <Select
            defaultValue="16x9"
            onChange={setAspectRatio}
            label="Aspect ratio"
            options={aspectRatios}
            size="sm"
          />
        </div>
        <div className="form-control mt-3">
          <InputGroup size="sm" label="Size">
            <Input
              defaultValue={display.size}
              onChange={setSize}
              type="number"
              size="sm"
            />
            <span className="bg-primary-100 text-xs">{display.unit}</span>
          </InputGroup>
        </div>
        <div className="form-control mt-3">
          <Toggle
            checked={display.unit === "cm"}
            onChange={setUnit}
            label="Use centimeters"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
