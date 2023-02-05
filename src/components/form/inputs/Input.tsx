"use client";

import Label from "@/components/form/labels/Label";
import React from "react";
import clsxm from "@/lib/clsxm";

type InputProps = {
  type?: "text" | "number";
  label?: string;
  mOnChange?: (value: string) => void;
  mSize?: "xs" | "sm" | "md" | "lg";
} & React.ComponentPropsWithRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      label,
      type = "text",
      mOnChange,
      mSize = "md",
      className,
      ...rest
    },
    ref
  ) => {
    const sizeClass = `input-${mSize}`;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
      mOnChange?.(e.target.value);

    const input = (
      <input
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        type={type}
        className={clsxm("input w-full", sizeClass, className)}
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
