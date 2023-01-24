"use client";

import { useState } from "react";
import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import { generateDisplays } from "@/app/compare/display/utils/displayGenerator";
import Display from "@/app/compare/display/types/Display";

export default function Setup() {
  const [displays, setDisplays] = useState(generateDisplays(2));

  const setDisplay = (display: Display) => {
    const newDisplays = displays.map((d) =>
      d.id === display.id ? display : d
    );
    setDisplays(newDisplays);
  };

  return (
    <div className="flex">
      {displays.map((display) => (
        <>
          <DisplayConf
            key={display.id}
            display={display}
            setDisplay={setDisplay}
          />
          {display.id !== displays[displays.length - 1].id && (
            <div className="divider divider-horizontal" />
          )}
        </>
      ))}
    </div>
  );
}
