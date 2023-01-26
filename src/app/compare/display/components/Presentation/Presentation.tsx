"use client";

import Display from "@/app/compare/display/types/Display";
import setDimensionsOfDisplays from "@/app/compare/display/utils/sizeCalculator";

interface SetupProps {
  displays: Display[];
}

export default function Presentation({ displays }: SetupProps) {
  setDimensionsOfDisplays(displays);

  const colors = ["red", "green", "blue", "purple", "yellow"];

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full relative" style={{ paddingBottom: "100%" }}>
        {displays.map((display) => (
          <div
            key={display.id}
            style={{
              position: "absolute",
              opacity: 0.6,
              transition: "all 0.8s ease",
              width: `${display.width}%`,
              height: `${display.height}%`,
              backgroundColor: colors[display.id - 1],
              zIndex: display.zIndex,
              border:
                display.height * display.width > 0 ? "3px solid black" : "",
            }}
          />
        ))}
      </div>
    </div>
  );
}
