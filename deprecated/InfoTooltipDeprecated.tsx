import React from "react";

// import RcTooltip from "rc-tooltip";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  placement?: "top" | "bottom";
}

export default function InfoTooltipDeprecated({
  children,
  text,
  placement = "top",
}: TooltipProps) {
  return (
    <></>
    // <RcTooltip
    //   placement={placement}
    //   overlayClassName="w-9/12 sm:w-auto select-none"
    //   overlayStyle={{ padding: "0 1rem" }}
    //   overlay={<span>{text}</span>}
    // >
    //   <div className="flex">
    //     {children}
    //     <FaInfoCircle className="ml-1" />
    //   </div>
    // </RcTooltip>
  );
}
