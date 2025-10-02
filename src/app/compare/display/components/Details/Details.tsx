"use client";

import Display from "@/app/compare/display/types/Display";
import React, { ReactNode, useState } from "react";
import Toggle from "@/components/form/checkboxes/Toggle";
import InfoTooltip from "@/components/InfoTooltip";
import clsxm from "@/lib/clsxm";

interface DetailsProps {
  displays: Display[];
}

export default function Details({ displays }: DetailsProps) {
  const [unit, setUnit] = useState<"cm" | "in">("in");
  const unitIsCm = unit === "cm";

  function toggleUnit(checked: boolean) {
    const unit = checked ? "cm" : "in";
    setUnit(unit);
  }

  const tallestDisplayHeight = displays.reduce((prev, current) =>
    current.height.cm > prev.height.cm ? current : prev
  ).height.percentage;

  const marginTop = `-${100 - tallestDisplayHeight}%`;

  return (
    <div
      style={{
        marginTop: marginTop,
        transition: "margin 0.8s, padding 0.8s, opacity 0.8s linear",
        opacity: tallestDisplayHeight > 0 ? 1 : 0,
      }}
    >
      <label className="relative">
        <p className="flex items-center justify-end text-xs md:text-sm font-medium select-none text-gray-700 px-1">
          <span className="mr-2">Use centimeters</span>
          <Toggle size="md" checked={unitIsCm} onChange={toggleUnit} />
        </p>
      </label>
      <div className="overflow-x-auto bg-white border-b border-x rounded-lg border-gray-200 mt-4">
        <table className="table w-full pt-4 rounded-t-lg">
          <thead>
            <tr className="select-none">
              <HeadTh className="rounded-tl-lg">Name</HeadTh>
              <HeadTh>Width</HeadTh>
              <HeadTh>Height</HeadTh>
              <HeadTh>Area</HeadTh>
              <HeadTh>Resolution</HeadTh>
              <HeadTh>
                <InfoTooltip
                  text="PPI"
                  anchorClassName="py-4"
                  positionStrategy="fixed"
                >
                  <span>Pixels Per Inch</span>
                  <br />
                  <span>Calculated only when resolution in selected.</span>
                </InfoTooltip>
              </HeadTh>
              <HeadTh>
                <InfoTooltip
                  text="Optimal distance"
                  anchorClassName="py-4"
                  positionStrategy="fixed"
                >
                  <span>
                    Distance at which the display will fill 28 to 40 degrees of
                    your field of view.{" "}
                  </span>
                  <span>
                    In lower resolutions you should consider the minimal
                    distance.
                  </span>
                  <br />
                  <span>
                    Calculated only for 16x9 TV screens, when resolution is
                    selected.
                  </span>
                </InfoTooltip>
              </HeadTh>
              <HeadTh className="rounded-tr-lg">
                <InfoTooltip
                  text="Minimal distance"
                  anchorClassName="py-4"
                  positionStrategy="fixed"
                >
                  <span>
                    The distance below which image quality decreases, as your
                    eyes begin to see individual pixels.{" "}
                  </span>
                  <br />
                  <span>
                    Calculated only for 16x9 TV screens, when resolution is
                    selected.
                  </span>
                </InfoTooltip>
              </HeadTh>
            </tr>
          </thead>
          <tbody>
            {displays.map((display) => (
              <tr key={display.id} className="group">
                <th className="p-0 bg-white group-hover:bg-gray-100 pr-2">
                  <div className="flex items-center">
                    <div
                      className="w-fit h-full px-1 py-7 mr-1"
                      style={{ backgroundColor: display.color.background }}
                    />
                    {display.name}
                  </div>
                </th>
                <BodyTd>
                  {display.width[unit].toFixed(2)} {unit}
                </BodyTd>
                <BodyTd>
                  {display.height[unit].toFixed(2)} {unit}
                </BodyTd>
                <BodyTd>
                  {(display.width[unit] * display.height[unit]).toFixed(2)}{" "}
                  {unit}
                  <sup>2</sup>
                </BodyTd>
                <BodyTd>
                  {display.resolution.width > 0
                    ? `${display.resolution.width} x ${display.resolution.height}`
                    : "-"}
                </BodyTd>
                <BodyTd>{display.ppi || "-"}</BodyTd>
                <BodyTd>
                  {display.minOptimalViewDistance.ft !== 0
                    ? unit === "in"
                      ? `${display.minOptimalViewDistance.ft} - ${display.maxOptimalViewDistance.ft} ft`
                      : `${display.minOptimalViewDistance.m} - ${display.maxOptimalViewDistance.m} m`
                    : "-"}
                </BodyTd>
                <BodyTd>
                  {display.minViewDistance.ft !== 0
                    ? unit === "in"
                      ? `${display.minViewDistance.ft} ft`
                      : `${display.minViewDistance.m} m`
                    : "-"}
                </BodyTd>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface ChildrenProp {
  children?: ReactNode;
  className?: string;
}

const HeadTh = ({ children, className }: ChildrenProp) => {
  return <th className={clsxm("bg-black text-base-100 pt-0 pb-0", className)}>{children}</th>;
};

const BodyTd = ({ children }: ChildrenProp) => {
  return <td className="bg-white group-hover:bg-gray-100">{children}</td>;
};
