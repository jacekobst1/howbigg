"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";
import Button from "@/components/buttons/Button";
import React, { Fragment, useEffect, useState } from "react";
import setDisplaysDimensions from "@/app/compare/display/utils/sizeCalculator";
import { cloneDeep } from "@/utils/objects";
import CopyComparisonButton from "@/app/compare/display/components/Setup/CopyComparisonButton";
import AddNewDisplayButton from "@/app/compare/display/components/Setup/AddNewDisplayButton";

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
  const [localDisplays, setLocalDisplays] = useState(displays);

  function setLocalDisplay(display: Display) {
    const newDisplays = localDisplays.map((d) =>
      d.id === display.id ? display : d
    );
    setLocalDisplays(newDisplays);
  }

  function compare() {
    const dimensionedDisplays = setDisplaysDimensions(localDisplays);
    setDisplays(dimensionedDisplays);
  }

  useEffect(() => {
    setLocalDisplays(displays);
  }, [displays]);

  return (
    <>
      <div className="flex overflow-x-auto px-1">
        {localDisplays.map((localDisplay) => (
          <Fragment key={localDisplay.id}>
            <DisplayConf
              display={cloneDeep(localDisplay)}
              setDisplay={setLocalDisplay}
              deleteDisplay={deleteDisplay}
            />
            {localDisplay.id !== localDisplays[localDisplays.length - 1].id && (
              <div className="divider divider-horizontal" />
            )}
          </Fragment>
        ))}
      </div>
      <div className="mt-6">
        <Button onClick={compare}>Compare</Button>
        <CopyComparisonButton />
        <AddNewDisplayButton
          createDisplay={createDisplay}
          displaysLength={displays.length}
        />
      </div>
    </>
  );
}
