"use client";

import Display from "@/app/compare/display/types/Display";
import React, { ReactNode, useState } from "react";
import Toggle from "@/components/form/checkboxes/Toggle";
import InfoTooltip from "@/components/InfoTooltip";

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
  const paddingBottom =
    tallestDisplayHeight > 70 ? 0 : `${70 - tallestDisplayHeight}%`;

  return (
    <div
      style={{
        marginTop: marginTop,
        paddingBottom: paddingBottom,
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
      <div className="overflow-x-auto">
        <table className="table w-full mt-4">
          <thead>
            <tr className="select-none">
              <HeadTh>Name</HeadTh>
              <HeadTh>Width</HeadTh>
              <HeadTh>Height</HeadTh>
              <HeadTh>Area</HeadTh>
              {/*<HeadTh>Resolution</HeadTh>*/}
              <HeadTh>
                <InfoTooltip text="Pixels Per Inch. Calculated only when resolution in selected.">
                  PPI
                </InfoTooltip>
              </HeadTh>
              <HeadTh>
                <InfoTooltip text="Distance at which the display will fill 28 to 40 degrees of your field of view. In lower resolutions you should consider the minimal distance. Calculated only for 16x9 TV screens, when resolution is selected.">
                  Optimal distance
                </InfoTooltip>
              </HeadTh>
              <HeadTh>
                <InfoTooltip text="The distance below which image quality decreases, as your eyes begin to see individual pixels. Calculated only for 16x9 TV screens, when resolution is selected.">
                  Minimal distance
                </InfoTooltip>
              </HeadTh>
            </tr>
          </thead>
          <tbody>
            {displays.map((display) => (
              <tr key={display.id} className="group">
                <th className="p-0 group-hover:bg-primary-100 select-none pr-2">
                  <div className="flex items-center">
                    <div
                      className="w-fit h-full rounded-3xl px-1 py-7 mr-1"
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
                {/*<BodyTd>{`${display.resolution.width} x ${display.resolution.height}`}</BodyTd>*/}
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
}

const HeadTh = ({ children }: ChildrenProp) => {
  return <th className="bg-primary-500 text-base-100">{children}</th>;
};

const BodyTd = ({ children }: ChildrenProp) => {
  return <td className="group-hover:bg-primary-100">{children}</td>;
};
