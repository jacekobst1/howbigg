import Label from "@/components/form/labels/Label";
import React from "react";

interface SwapProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  offChildren: React.ReactElement;
  onChildren: React.ReactElement;
  style?: React.CSSProperties;
}

const Swap = ({
  checked = false,
  onChange,
  label,
  offChildren,
  onChildren,
  style,
}: SwapProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.checked);

  const swap = (
    <label className="swap swap-rotate" style={style}>
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      {React.cloneElement(offChildren, {
        className: `swap-off w-10 h-10 text-primary-500 ${offChildren.props.className}`,
      })}
      {React.cloneElement(onChildren, {
        className: `swap-on w-10 h-10 text-primary-500 ${onChildren.props.className}`,
      })}
    </label>
  );

  if (label) {
    return <Label text={label}>{swap}</Label>;
  }

  return swap;
};

export default Swap;
export type { SwapProps };
