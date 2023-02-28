"use client";

import Setup from "@/app/compare/display/components/Setup/Setup";
import Presentation from "@/app/compare/display/components/Presentation/Presentation";
import { generateDisplays } from "@/app/compare/display/utils/displayGenerator";
import Details from "@/app/compare/display/components/Details/Details";
import useQueryState from "@/hooks/useQueryState";
import React, { useEffect, useState } from "react";
import Display from "@/app/compare/display/types/Display";
import setDisplaysDimensions from "@/app/compare/display/utils/sizeCalculator";
import { decodeDisplays, encodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { mergeDeep } from "@/utils/objects";

interface DisplayOnlyRequired {
  arv: string;
  carw: number;
  carh: number;
  dl: number;
  du: string;
}

export default function DisplayPage() {
  const defaultDisplays = generateDisplays(2);
  const [displays, setDisplays] = useState(defaultDisplays);
  const [queryState, setQueryState, isQueryStateReady] =
    useQueryState("displays");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isQueryStateReady) return;

    if (queryState && Array.isArray(queryState)) {
      const decodedDisplays = decodeDisplays(queryState);
      const mergedDisplays = displays.map(
        (display, index) =>
          mergeDeep(display, decodedDisplays[index]) as Display
      );

      const dimensionedDisplays = setDisplaysDimensions(mergedDisplays);
      setDisplays(dimensionedDisplays);
    }

    setIsReady(true);
  }, [isQueryStateReady]);

  function setData(displays: Display[]) {
    setDisplays(displays);
    setQueryState(encodeDisplays(displays));
  }

  return isReady ? (
    <div>
      <Setup displays={displays} setDisplays={setData} />
      <div className="mt-14" />
      <Presentation displays={displays} />
      <div className="mt-14" />
      <Details displays={displays} />
    </div>
  ) : (
    <span>Loading...</span>
  );
}
