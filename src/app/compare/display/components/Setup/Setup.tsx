"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";
import Button from "@/components/buttons/Button";
import { Fragment, useState } from "react";
import setDisplaysDimensions from "@/app/compare/display/utils/sizeCalculator";
import { quickToast } from "@/lib/toast";

interface SetupProps {
  displays: Display[];
  setDisplays: (displays: Display[]) => void;
}

export default function Setup({ displays, setDisplays }: SetupProps) {
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

  function copyUrlToClipboard() {
    navigator.clipboard
      .writeText(location.href)
      .then(() => quickToast("💾 Copied to clipboard"));
  }

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
      <div className="mt-6">
        <Button onClick={compare}>Compare</Button>
        <Button className="ml-2" variant="outline" onClick={copyUrlToClipboard}>
          Copy your comparison
        </Button>
      </div>
    </>
  );
}
