import React from "react";
import { FaQuestion } from "@react-icons/all-files/fa/FaQuestion";
import { Tooltip } from "react-tooltip";
import clsxm from "@/lib/clsxm";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  anchorClassName?: string;
  placement?: "top" | "bottom" | "left" | "right";
  positionStrategy?: "fixed" | "absolute";
}

export default function InfoTooltip({
  children,
  text,
  anchorClassName,
  placement = "top",
  positionStrategy = "absolute",
}: TooltipProps) {
  const anchorId = text.replace(/[^a-zA-Z0-9]/g, "") + "-tooltip-anchor";

  return (
    <>
      <a
        id={anchorId}
        className={clsxm("flex items-baseline", anchorClassName)}
      >
        {text}
        <FaQuestion className="ml-1 text-primary-300" />
      </a>
      <Tooltip
        anchorSelect={"#" + anchorId}
        place={placement}
        closeOnScroll={true}
        positionStrategy={positionStrategy}
        style={{
          zIndex: 9999,
        }}
      >
        <div
          // TODO ustaw szerokośc zależną od ekranu + popraw niemożność klikania na niektórych telefonach
          className="max-w-xs"
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "break-spaces",
            textTransform: "none",
            fontWeight: "normal",
            fontSize: "12px",
          }}
        >
          {children}
        </div>
      </Tooltip>
    </>
  );
}
