"use client";

import React from "react";
import clsxm from "@/lib/clsxm";
import Label from "@/components/form/labels/Label";

interface SwitchProps {
  checked: boolean;
  opt1: string;
  opt2: string;
  onClick: (value: boolean) => void;
  label?: string;
}

export default function Switch({
  checked,
  opt1,
  opt2,
  onClick,
  label,
}: SwitchProps) {
  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    onClick(!checked);
  }

  const staticClasses =
    "bg-white shadow flex items-center justify-center w-1/2 rounded-md h-[1.64rem] transition-all duration-150 ease-linear top-[4px] absolute";

  const mySwitch = (
    <div className="switch-wrapper relative w-full h-9 bg-base-100 text-xs rounded-lg cursor-pointer">
      <div className="relative w-full h-full flex items-center">
        <button
          onClick={handleOnClick}
          className="w-full flex justify-center text-gray-400 cursor-pointer"
        >
          {opt1}
        </button>
        <button
          onClick={handleOnClick}
          className="w-full flex justify-center text-gray-400 cursor-pointer"
        >
          {opt2}
        </button>
      </div>

      <span
        className={
          checked
            ? clsxm("left-1/2 -ml-1 text-gray-800 font-semibold", staticClasses)
            : clsxm("left-1 text-gray-800 font-semibold", staticClasses)
        }
      >
        {checked ? opt2 : opt1}
      </span>
    </div>
  );

  if (label) {
    return <Label text={label}>{mySwitch}</Label>;
  }

  return mySwitch;
}
