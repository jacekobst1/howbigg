"use client";

import { aspectRatios } from "@/app/compare/screen/components/Setup/AspectRatio";
import Display from "@/app/compare/screen/components/Setup/Display";
import setDimensionsOfDisplays from "@/app/compare/screen/utils/sizeCalculator";

export default function Presentation() {
  const displays: Display[] = [
    {
      id: 1,
      name: "Display 1",
      aspectRatio: aspectRatios[1],
      size: 24,
      unit: "in",
      width: 0,
      height: 0,
      aspectRatioDecimal: 0,
    },
    {
      id: 2,
      name: "Display 2",
      aspectRatio: aspectRatios[3],
      size: 34,
      unit: "in",
      width: 0,
      height: 0,
      aspectRatioDecimal: 0,
    },
  ];

  setDimensionsOfDisplays(displays);

  // TODO ogarnij czemu przy większej rozdzielczości się rozjeżdża
  return (
    <div className="w-11/12 absolute">
      <div
        className="w-full bg-teal-500 absolute"
        style={{ paddingBottom: "100%" }}
      >
        {displays.map((display) => (
          <div
            key={display.id}
            className={`absolute`}
            style={{
              width: `${display.width}%`,
              height: `${display.height}%`,
              backgroundColor:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
            }}
          />
        ))}
      </div>
    </div>
  );
}
