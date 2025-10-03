"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";
import React, { Fragment } from "react";
import CopyComparisonButton from "@/app/compare/display/components/Setup/CopyComparisonButton";
import AddNewDisplayButton from "@/app/compare/display/components/Setup/AddNewDisplayButton";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";
import { cloneDeep } from "lodash";

interface SetupProps {
  displays: Display[];
  setDisplays: (displays: Display[]) => void;
  createDisplay: () => void;
  deleteDisplay: (id: number) => void;
}

export default function Setup({
  displays,
  setDisplays,
  createDisplay,
  deleteDisplay,
}: SetupProps) {
  function setDisplay(display: Display) {
    const newDisplays = displays.map((d) =>
      d.id === display.id ? display : d
    );
    const calculatedDisplays = getDetailedDisplays(newDisplays);
    setDisplays(calculatedDisplays);
  }

  return (
    <div>
      <div className="flex overflow-x-auto px-1">
        {displays.map((display) => (
          <Fragment key={display.id}>
            <DisplayConf
              display={cloneDeep(display)}
              setDisplay={setDisplay}
              deleteDisplay={deleteDisplay}
            />
            {display.id !== displays[displays.length - 1].id && (
              <div className="border-l border-gray-200 mx-4 self-stretch" />
            )}
          </Fragment>
        ))}
      </div>
      <div className="mt-12">
        <CopyComparisonButton />
        <AddNewDisplayButton
          createDisplay={createDisplay}
          displaysLength={displays.length}
        />
      </div>
    </div>
  );
}
