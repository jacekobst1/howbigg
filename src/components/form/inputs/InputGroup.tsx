import React from "react";
import clsxm from "@/lib/clsxm";
import Label from "@/components/form/labels/Label";

interface InputGroupProps {
  children: React.ReactNode;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const InputGroup = ({ children, label, size = "md" }: InputGroupProps) => {
  const sizeClass = `input-group-${size}`;

  const inputGroup = (
    <div
      className={clsxm("input-group w-full border border-slate-300", sizeClass)}
    >
      {children}
    </div>
  );

  if (label) {
    return <Label text={label}>{inputGroup}</Label>;
  }

  return inputGroup;
};

export default InputGroup;
export type { InputGroupProps };
