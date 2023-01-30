"use client";

import Display from "@/app/compare/display/types/Display";

interface SetupProps {
  displays: Display[];
}

export default function Presentation({ displays }: SetupProps) {
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full relative" style={{ paddingBottom: "100%" }}>
        {displays.map((display) => (
          <div
            key={display.id}
            style={{
              position: "absolute",
              opacity: 0.9,
              transition: "all 0.8s ease",
              width: `${display.width.percentage}%`,
              height: `${display.height.percentage}%`,
              backgroundColor: display.color,
              zIndex: display.zIndex,
              border:
                display.height.percentage * display.width.percentage > 0
                  ? "3px solid black"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
