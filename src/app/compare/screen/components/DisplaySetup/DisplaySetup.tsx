"use client";

import { useState } from "react";
import DisplayData, {
  generateDisplays,
} from "@/app/compare/screen/components/DisplaySetup/DisplayData";
import Display from "@/app/compare/screen/components/DisplaySetup/Display/Display";

export default function DisplaySetup() {
  const [displays, setDisplays] = useState(generateDisplays(2));

  const setDisplay = (display: DisplayData) => {
    const newDisplays = displays.map((d) =>
      d.id === display.id ? display : d
    );
    setDisplays(newDisplays);
  };

  return (
    <div className="flex">
      {displays.map((display) => (
        <>
          <Display
            key={display.id}
            displayData={display}
            setDisplayData={setDisplay}
          />
          {display.id !== displays[displays.length - 1].id && (
            <div className="divider divider-horizontal" />
          )}
        </>
      ))}
    </div>
  );
}
