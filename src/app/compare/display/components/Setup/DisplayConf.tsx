"use client";

import Select from "@/components/form/selects/Select";
import Input from "@/components/form/inputs/Input";
import InputGroup from "@/components/form/inputs/InputGroup";
import { aspectRatios } from "../../types/AspectRatio";
import React, { useRef } from "react";
import Display from "@/app/compare/display/types/Display";
import { round } from "@/utils/math";
import { debounce } from "lodash";
import { defaultResolution } from "@/app/compare/display/types/Resolution";
import Label from "@/components/form/labels/Label";
import Switch from "@/components/form/checkboxes/Switch";
import Button from "@/components/buttons/Button";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

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
  const diagonalRef = useRef<HTMLInputElement>(null);

  const setAspectRatio = (value: string) => {
    const selectedAspectRatio = aspectRatios.find((ar) => ar.value === value);

    if (selectedAspectRatio) {
      display.aspectRatio = selectedAspectRatio;
      display.resolution = defaultResolution;
      setDisplay(display);
    }
  };

  const setDisplayName = (value: string) => {
    display.name = value;
    setDisplay(display);
  };

  const setCustomAspectRatioWidth = (value: string) => {
    display.customAspectRatio.width = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setCustomAspectRatioHeight = (value: string) => {
    display.customAspectRatio.height = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setDiagonal = debounce((value: string) => {
    display.diagonal.length = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  }, 500);

  const setResolution = (value: string) => {
    const selectedResolution = display.aspectRatio.possibleResolutions.find(
      (ar: { value: string }) => ar.value === value
    );

    if (selectedResolution) {
      display.resolution = selectedResolution;
      setDisplay(display);
    }
  };

  const setCustomResolutionWidth = (value: string) => {
    display.resolution.width = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setCustomResolutionHeight = (value: string) => {
    display.resolution.height = Math.abs(parseFloat(value)) || 0;
    setDisplay(display);
  };

  const setIsVertical = (checked: boolean) => {
    display.isVertical = checked;
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

    if (diagonalRef.current) {
      diagonalRef.current.value = String(round(display.diagonal.length) || "");
    }
  };

  return (
    <div className="flex">
      <div className="w-36">
        <div className="flex pt-2">
          <div
            className="flex justify-between items-stretch flex-1 rounded font-semibold select-none px-2 focus:outline focus:outline-1 focus:outline-primary-400"
            style={{
              backgroundColor: display.color.background,
              color: display.color.text,
            }}
          >
            <Input
              defaultValue={display.name}
              mOnChange={setDisplayName}
              mSize="sm"
              className="rounded-none outline-none focus:outline-none p-0 h-[28px]"
              style={{ backgroundColor: display.color.background }}
            />
          </div>
          {display.id > 2 && (
            <div className="flex ml-2">
              <Button
                onClick={() => deleteDisplay(display.id)}
                size="sm"
                variant="light"
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
              noSpin
            />
            <span className="mx-2">x</span>
            <Input
              value={round(display.customAspectRatio.height) || ""}
              mOnChange={setCustomAspectRatioHeight}
              type="number"
              mSize="sm"
              noSpin
            />
          </div>
        )}
        <div className="form-control mt-3">
          <InputGroup size="sm" label="Size *">
            <Input
              ref={diagonalRef}
              defaultValue={round(display.diagonal.length) || ""}
              mOnChange={setDiagonal}
              type="number"
              mSize="sm"
              step="0.1"
            />
            <span className="bg-slate-200 text-xs">
              {display.diagonal.unit}
            </span>
          </InputGroup>
        </div>
        <div className="form-control mt-3">
          <Label text="Resolution">
            {display.aspectRatio.value !== "custom" ? (
              <Select
                value={display.resolution?.value}
                mOnChange={setResolution}
                options={display.aspectRatio.possibleResolutions}
                mSize="sm"
              />
            ) : (
              <div className="flex flex-row mt-1">
                <Input
                  value={round(display.resolution.width) || ""}
                  mOnChange={setCustomResolutionWidth}
                  type="number"
                  mSize="sm"
                  noSpin
                />
                <span className="mx-2">x</span>
                <Input
                  value={round(display.resolution.height) || ""}
                  mOnChange={setCustomResolutionHeight}
                  type="number"
                  mSize="sm"
                  noSpin
                />
              </div>
            )}
          </Label>
        </div>
        <div className="form-control mt-3">
          <Switch
            checked={display.isVertical}
            opt1="Horizontal"
            opt2="Vertical"
            onClick={setIsVertical}
            label="Orientation"
          />
        </div>
        <div className="form-control mt-3">
          <Switch
            checked={display.diagonal.unit === "cm"}
            opt1="in"
            opt2="cm"
            onClick={setUnit}
            label="Unit"
          />
        </div>
      </div>
    </div>
  );
}
