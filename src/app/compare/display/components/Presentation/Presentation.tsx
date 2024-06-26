"use client";

import Display from "@/app/compare/display/types/Display";
import { getWindowDimensions } from "@/hooks/useWindowDimensions";
import { useEffect, useRef } from "react";

interface PresentationProps {
  displays: Display[];
}

export default function Presentation({ displays }: PresentationProps) {
  const borderSize = useRef(3);

  useEffect(() => {
    const windowDimensions = getWindowDimensions();
    if (windowDimensions.width < 768) {
      borderSize.current = 2;
    }
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="w-full relative aspect-square">
        {displays.map((display) => (
          <div
            key={display.id}
            style={{
              position: "absolute",
              opacity: 0.9,
              transition: "all 0.8s ease",
              width: `${display.width.percentage}%`,
              height: `${display.height.percentage}%`,
              backgroundColor: display.color.background,
              zIndex: display.zIndex,
              border:
                display.height.percentage * display.width.percentage > 0
                  ? `${borderSize.current}px solid black`
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
