"use client";

import Display from "@/app/compare/display/types/Display";
import React, { ReactNode, useState } from "react";
import Toggle from "@/components/form/inputs/Toggle";

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
        <table className="table w-full mt-2">
          <thead>
            <tr className="select-none">
              <HeadTh>Name</HeadTh>
              <HeadTh>Width</HeadTh>
              <HeadTh>Height</HeadTh>
              <HeadTh>Area</HeadTh>
            </tr>
          </thead>
          <tbody>
            {displays.map((display) => (
              <tr key={display.id} className="group">
                <th className="p-0 group-hover:bg-primary-100 select-none">
                  <div className="flex items-center">
                    <div
                      className="w-fit h-full rounded-3xl px-0.5 py-7 mr-1"
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
