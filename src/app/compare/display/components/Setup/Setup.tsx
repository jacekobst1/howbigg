"use client";

import DisplayConf from "@/app/compare/display/components/Setup/DisplayConf";
import Display from "@/app/compare/display/types/Display";

interface SetupProps {
  displays: Display[];
  setDisplays: (displays: Display[]) => void;
}

export default function Setup({ displays, setDisplays }: SetupProps) {
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
