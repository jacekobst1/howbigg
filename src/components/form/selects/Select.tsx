import clsxm from "@/lib/clsxm";
import React from "react";
import Label from "@/components/form/labels/Label";

interface SelectProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  options: Option[];
  size?: "xs" | "sm" | "md" | "lg";
}

interface Option {
  label: string;
  value: string;
}

// TODO wystylizuj własny dropdown, zamiast domyślnego
const Select = ({
  defaultValue,
  onChange,
  label,
  options,
  size = "md",
}: SelectProps) => {
  const sizeClass = `select-${size}`;
  const classNames = clsxm("select shadow w-full mt-1 select-sm", sizeClass);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange?.(e.target.value);

  const select = (
    <select
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      className={classNames}
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
};

export default Select;
export type { SelectProps, Option };
