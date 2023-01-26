"use client";

import Label from "@/components/form/labels/Label";
import React from "react";
import clsxm from "@/lib/clsxm";

type InputProps = {
  value?: string | number;
  defaultValue?: string | number;
  myOnChange?: (value: string) => void;
  type?: "text" | "number";
  label?: string;
  mSize?: "xs" | "sm" | "md" | "lg";
} & React.ComponentPropsWithRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      myOnChange,
      label,
      type = "text",
      mSize = "md",
      ...rest
    },
    ref
  ) => {
    const sizeClass = `input-${mSize}`;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
      myOnChange?.(e.target.value);

    const input = (
      <input
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        type={type}
        className={clsxm("input shadow w-full", sizeClass)}
        {...rest}
      />
    );

    if (label) {
      return <Label text={label}>{input}</Label>;
    }

    return input;
  }
);

Input.displayName = "Input";
export default Input;
export type { InputProps };
