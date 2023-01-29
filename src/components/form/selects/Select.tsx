"use client";

import React from "react";
import Label from "@/components/form/labels/Label";
import clsxm from "@/lib/clsxm";

type SelectProps = {
  mOnChange?: (value: string) => void;
  label?: string;
  options: Option[];
  mSize?: "xs" | "sm" | "md" | "lg";
} & React.ComponentPropsWithRef<"select">;

type Option = {
  label: string;
  value: string;
};

// TODO wystylizuj własny dropdown, zamiast domyślnego
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ defaultValue, mOnChange, label, options, mSize = "md", ...rest }, ref) => {
    const sizeClass = `select-${mSize}`;
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
      mOnChange?.(e.target.value);

    const select = (
      <select
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        className={clsxm("select shadow w-full mt-1", sizeClass)}
        {...rest}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );

    if (label) {
      return <Label text={label}>{select}</Label>;
    }

    return select;
  }
);

Select.displayName = "Select";
export default Select;
export type { SelectProps, Option };
