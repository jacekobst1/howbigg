import React from "react";

interface LabelProps {
  children: React.ReactNode;
  text: string;
}

const Label = ({ children, text }: LabelProps) => {
  return (
    <label>
      <p className="block text-xs md:text-sm font-medium select-none text-gray-700 px-1">
        {text}
      </p>
      {children}
    </label>
  );
};

export default Label;
export type { LabelProps };
