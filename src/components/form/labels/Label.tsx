import React from "react";

interface LabelProps {
  children: React.ReactNode;
  text: string;
}

const Label = ({ children, text }: LabelProps) => {
  return (
    <label>
      <span className="block text-sm font-medium select-none text-gray-700 px-1">
        {text}
      </span>
      {children}
    </label>
  );
};

export default Label;
export type { LabelProps };
