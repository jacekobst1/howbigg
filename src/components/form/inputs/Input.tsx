import clsxm from "@/lib/clsxm";
import Label from "@/components/form/labels/Label";
import React from "react";

interface InputProps {
  defaultValue?: string | number;
  onChange?: (value: string) => void;
  type?: "text" | "number";
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const Input = ({
  defaultValue,
  onChange,
  label,
  type = "text",
  size = "md",
}: InputProps) => {
  const sizeClass = `input-${size}`;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.value);

  const input = (
    <input
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      type={type}
      className={clsxm("input shadow w-full", sizeClass)}
    />
  );

  if (label) {
    return <Label text={label}>{input}</Label>;
  }

  return input;
};

export default Input;
export type { InputProps };
