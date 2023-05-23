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
  optGroup?: string;
};

// TODO wystylizuj własny dropdown, zamiast domyślnego
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      defaultValue,
      mOnChange,
      label,
      options,
      mSize = "md",
      className,
      ...rest
    },
    ref
  ) => {
    const sizeClass = `select-${mSize}`;

    const optGroups = options
      .map((o) => o.optGroup)
      .filter((v, i, a) => a.indexOf(v) === i && v);

    const optGroupsWithOptions = optGroups.map((groupName) => (
      <optgroup label={groupName} key={groupName}>
        {options
          .filter((o) => o.optGroup === groupName)
          .map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
      </optgroup>
    ));
    const optionsWithoutOptGroup = options
      .filter((o) => !o.optGroup)
      .map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ));
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
      mOnChange?.(e.target.value);

    const select = (
      <select
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        className={clsxm("select w-full mt-1", sizeClass, className)}
        {...rest}
      >
        {optGroupsWithOptions}
        {optionsWithoutOptGroup}
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
