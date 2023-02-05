"use client";

import Display from "@/app/compare/display/types/Display";
import React from "react";

interface DetailsProps {
  displays: Display[];
}

export default function Details({ displays }: DetailsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Width</th>
            <th>Height</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {displays.map((display) => (
            <tr key={display.id} className="hover">
              <th className="p-0">
                <div className="flex items-center">
                  <div
                    className="w-fit h-full rounded-3xl px-0.5 py-7 mr-1"
                    style={{ backgroundColor: display.color.background }}
                  />
                  {display.name}
                </div>
              </th>
              <td>{display.width.cm.toFixed(2)} cm</td>
              <td>{display.height.cm.toFixed(2)} cm</td>
              <td>{(display.width.cm * display.height.cm).toFixed(2)} cm3</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
