"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";
import Button from "@/components/buttons/Button";
import { useState } from "react";

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
    setDisplays(localDisplays);
  };

  return (
    <>
      <div className="flex">
        {localDisplays.map((localDisplay) => (
          <>
            <DisplayConf
              key={localDisplay.id}
              display={localDisplay}
              setDisplay={setLocalDisplay}
            />
            {localDisplay.id !== localDisplays[localDisplays.length - 1].id && (
              <div className="divider divider-horizontal" />
            )}
          </>
        ))}
      </div>
      <Button className="mt-10" onClick={compare}>
        Compare
      </Button>
    </>
  );
}
