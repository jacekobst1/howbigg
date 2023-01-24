"use client";

import Display from "@/app/compare/display/types/Display";
import setDimensionsOfDisplays from "@/app/compare/display/utils/sizeCalculator";

interface SetupProps {
  displays: Display[];
}

export default function Presentation({ displays }: SetupProps) {
  // const displays: Display[] = [
  //   {
  //     id: 1,
  //     name: "Display 1",
  //     aspectRatio: aspectRatios[1],
  //     size: 24,
  //     unit: "in",
  //     width: 0,
  //     height: 0,
  //     aspectRatioDecimal: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Display 2",
  //     aspectRatio: aspectRatios[3],
  //     size: 34,
  //     unit: "in",
  //     width: 0,
  //     height: 0,
  //     aspectRatioDecimal: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Display 3",
  //     aspectRatio: { label: "21 x 9", value: "21x9", decimalValue: 9 / 21 },
  //     size: 34,
  //     unit: "in",
  //     width: 0,
  //     height: 0,
  //     aspectRatioDecimal: 0,
  //   },
  // ];

  setDimensionsOfDisplays(displays);

  const colors = ["red", "green", "blue", "purple", "yellow"];

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full relative" style={{ paddingBottom: "100%" }}>
        {displays.map((display) => (
          <div
            key={display.id}
            style={{
              width: `${display.width}%`,
              height: `${display.height}%`,
              backgroundColor: colors[display.id - 1],
              zIndex: display.zIndex,
              position: "absolute",
              opacity: 0.6,
              border: `3px solid black`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
