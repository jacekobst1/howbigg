import clsxm from "@/lib/clsxm";
import Label from "@/components/form/labels/Label";
import React from "react";

interface ToggleProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const Toggle = ({
  checked = false,
  onChange,
  label,
  size = "md",
}: ToggleProps) => {
  const sizeClass = `toggle-${size}`;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.checked);

  const toggle = (
    <input
      checked={checked}
      onChange={handleOnChange}
      type="checkbox"
      className={clsxm("toggle toggle-primary", sizeClass)}
    />
  );

  if (label) {
    return <Label text={label}>{toggle}</Label>;
  }

  return toggle;
};

export default Toggle;
export type { ToggleProps };
