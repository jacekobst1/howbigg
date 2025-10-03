import React from "react";
import clsxm from "@/lib/clsxm";
import Label from "@/components/form/labels/Label";

interface InputGroupProps {
  children: React.ReactNode;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const InputGroup = ({ children, label, size = "md" }: InputGroupProps) => {
  const sizeClass = `join-${size}`;

  // Add a join-item class to all children
  const childrenWithJoinItem = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      return React.cloneElement(child, {
        ...(child.props as object),
        className: clsxm(props.className as string | undefined, "join-item"),
      } as any);
    }
    return child;
  });

  const inputGroup = (
    <div className={clsxm("join w-full", sizeClass)}>{childrenWithJoinItem}</div>
  );

  if (label) {
    return <Label text={label}>{inputGroup}</Label>;
  }

  return inputGroup;
};

export default InputGroup;
export type { InputGroupProps };
