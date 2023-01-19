"use client";

import Select from "@/components/form/selects/Select";
import Input from "@/components/form/inputs/Input";
import InputGroup from "@/components/form/inputs/InputGroup";
import Toggle from "@/components/form/inputs/Toggle";
import { useState } from "react";
import AspectRatio, { aspectRatios } from "./AspectRatio";

interface DisplayProps {
  name: string;
}

interface DisplayData {
  aspectRatio: AspectRatio;
  size: number;
  unit: "in" | "cm";
}

export default function Display({ name }: DisplayProps) {
  const [displayData, setDisplayData] = useState<DisplayData>({
    aspectRatio: aspectRatios[0],
    size: 0,
    unit: "in",
  });

  const setAspectRatio = (aspectRatio: string) => {
    const selectedAspectRatio = aspectRatios.find(
      (ar) => ar.value === aspectRatio
    );

    if (selectedAspectRatio) {
      setDisplayData((prev) => ({ ...prev, aspectRatio: selectedAspectRatio }));
    }
  };

  const setSize = (size: string) =>
    setDisplayData((prev) => ({ ...prev, size: parseFloat(size) }));

  const setUnit = (checked: boolean) => {
    const unit = checked ? "cm" : "in";
    setDisplayData((prev) => ({ ...prev, unit: unit }));
  };

  return (
    <div className="flex">
      <div className="w-36">
        <p className="text-slate-600">{name}</p>
        <div className="divider divider-vertical" />
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
              defaultValue={displayData.size}
              onChange={setSize}
              type="number"
              size="sm"
            />
            <span className="bg-primary-100 text-xs">{displayData.unit}</span>
          </InputGroup>
        </div>
        <div className="form-control mt-3">
          <Toggle
            checked={displayData.unit === "cm"}
            onChange={setUnit}
            label="Use centimeters"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
