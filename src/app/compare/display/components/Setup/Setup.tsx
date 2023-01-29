"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";
import Button from "@/components/buttons/Button";
import { Fragment, useState } from "react";
import setDimensionsOfDisplays from "@/app/compare/display/utils/sizeCalculator";

interface SetupProps {
  displays: Display[];
  setDisplays: (displays: Display[]) => void;
}

export default function Setup({ displays, setDisplays }: SetupProps) {
  const [localDisplays, setLocalDisplays] = useState(displays);

  const setLocalDisplay = (display: Display) => {
    const newDisplays = localDisplays.map((d) =>
      d.id === display.id ? display : d
    );
    setLocalDisplays(newDisplays);
  };

  const compare = () => {
    setDimensionsOfDisplays(localDisplays);
    setDisplays(localDisplays);
  };

  return (
    <>
      <div className="flex">
        {localDisplays.map((localDisplay) => (
          <Fragment key={localDisplay.id}>
            <DisplayConf display={localDisplay} setDisplay={setLocalDisplay} />
            {localDisplay.id !== localDisplays[localDisplays.length - 1].id && (
              <div className="divider divider-horizontal" />
            )}
          </Fragment>
        ))}
      </div>
      <Button className="mt-6" onClick={compare}>
        Compare
      </Button>
    </>
  );
}
