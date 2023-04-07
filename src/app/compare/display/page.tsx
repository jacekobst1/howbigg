"use client";

import Setup from "@/app/compare/display/components/Setup/Setup";
import Presentation from "@/app/compare/display/components/Presentation/Presentation";
import {
  generateDisplayByExistingOnes,
  generateDisplays,
  generateDisplaysWithoutPossibleResolutions,
} from "@/app/compare/display/utils/displayGenerator";
import Details from "@/app/compare/display/components/Details/Details";
import useQueryState from "@/hooks/useQueryState";
import React, { useEffect, useState } from "react";
import Display from "@/app/compare/display/types/Display";
import {
  decodeDisplays,
  encodeDisplays,
} from "@/app/compare/display/utils/urlEncoder";
import { mapWithPrototype, mergeDeep } from "@/utils/objects";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";

export default function DisplayPage() {
  const [displays, setDisplays] = useState(generateDisplays(2));
  const [queryState, setQueryState, isQueryStateReady] =
    useQueryState<string[]>("displays");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isQueryStateReady) return;

    if (!queryState || !Array.isArray(queryState)) {
      setIsReady(true);
      return;
    }

    const defaultDisplays = generateDisplaysWithoutPossibleResolutions(
      queryState.length
    );
    const decodedDisplays = decodeDisplays(queryState);
    const mergedDisplays = mapWithPrototype(
      defaultDisplays,
      (display, index) => mergeDeep(display, decodedDisplays[index]) as Display
    );
    const calculatedDisplays = getDetailedDisplays(mergedDisplays);

    setDisplays(calculatedDisplays);
    setIsReady(true);
  }, [isQueryStateReady]);

  function setData(displays: Display[]) {
    setDisplays(displays);
    setQueryState(encodeDisplays(displays));
  }

  function createDisplay() {
    if (displays.length < 6) {
      const newDisplay = generateDisplayByExistingOnes(displays);
      setData([...displays, newDisplay]);
    }
  }

  function deleteDisplay(id: number) {
    const newDisplays = displays.filter((d) => d.id !== id);
    const calculatedDisplays = getDetailedDisplays(newDisplays);
    setData(calculatedDisplays);
  }

  return isReady ? (
    <div>
      <Setup
        displays={displays}
        setDisplays={setData}
        createDisplay={createDisplay}
        deleteDisplay={deleteDisplay}
      />
      <div className="mt-14" />
      <Presentation displays={displays} />
      <div className="mt-14" />
      <Details displays={displays} />
    </div>
  ) : (
    <span>Loading...</span>
  );
}
