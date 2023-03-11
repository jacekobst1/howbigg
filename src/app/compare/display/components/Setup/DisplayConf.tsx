"use client";

import Select from "@/components/form/selects/Select";
import Input from "@/components/form/inputs/Input";
import InputGroup from "@/components/form/inputs/InputGroup";
import Toggle from "@/components/form/inputs/Toggle";
import { aspectRatios } from "../../types/AspectRatio";
import React from "react";
import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";
import Button from "@/components/buttons/Button";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { resolutions } from "@/app/compare/display/types/Resolution";
import { debounce } from "lodash";

interface DisplayProps {
  display: Display;
  setDisplay: (display: Display) => void;
  deleteDisplay: (id: number) => void;
}

export default function DisplayConf({
  display,
  setDisplay,
  deleteDisplay,
}: DisplayProps) {
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

  const setDiagonal = debounce((size: string) => {
    display.diagonal.length = Math.abs(parseFloat(size)) || 0;
    setDisplay(display);
  }, 500);

  const setResolution = (resolution: string) => {
    const selectedResolution = resolutions.find(
      (ar: { value: string }) => ar.value === resolution
    );

    if (selectedResolution) {
      display.resolution = selectedResolution;
      setDisplay(display);
    }
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

  const setIsVertical = (checked: boolean) => {
    display.isVertical = checked;
    setDisplay(display);
  };

  return (
    <div className="flex">
      <div className="w-36">
        <div className="flex">
          <p
            className="flex-1 rounded text-center font-semibold select-none px-2"
            style={{
              backgroundColor: display.color.background,
              color: display.color.text,
            }}
          >
            {display.name}
          </p>
          {display.id > 2 && (
            <div className="flex ml-2">
              <Button
                onClick={() => deleteDisplay(display.id)}
                size="sm"
                variant="outline"
              >
                <AiOutlineClose />
              </Button>
            </div>
          )}
        </div>

        <div className="form-control mt-3">
          <Select
            value={display.aspectRatio.value}
            mOnChange={setAspectRatio}
            label="Aspect ratio *"
            options={aspectRatios}
            mSize="sm"
          />
        </div>
        {display.aspectRatio.value === "custom" && (
          <div className="form-control mt-2 flex flex-row">
            <Input
              value={round(display.customAspectRatio.width) || ""}
              mOnChange={setCustomAspectRatioWidth}
              type="number"
              mSize="sm"
            />
            <span className="mx-2">x</span>
            <Input
              value={round(display.customAspectRatio.height) || ""}
              mOnChange={setCustomAspectRatioHeight}
              type="number"
              mSize="sm"
            />
          </div>
        )}
        <div className="form-control mt-3">
          <InputGroup size="sm" label="Size *">
            <Input
              defaultValue={round(display.diagonal.length) || ""}
              mOnChange={setDiagonal}
              type="number"
              mSize="sm"
              step="0.1"
            />
            <span className="bg-primary-100 text-xs">
              {display.diagonal.unit}
            </span>
          </InputGroup>
        </div>
        <div className="form-control mt-3">
          <Select
            value={display.resolution?.value}
            mOnChange={setResolution}
            label="Resolution"
            options={resolutions}
            mSize="sm"
          />
        </div>
        <div className="form-control mt-3">
          <Toggle
            checked={display.isVertical}
            onChange={setIsVertical}
            label="Vertical"
            size="md"
          />
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
