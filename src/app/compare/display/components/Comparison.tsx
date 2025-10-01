"use client";

import React, { useEffect, useState } from "react";
import {
  generateDisplayByExistingOnes,
  generateDisplays,
  generateDisplaysWithoutPossibleResolutions,
} from "@/app/compare/display/utils/displayGenerator";
import useQueryState from "@/hooks/useQueryState";
import {
  decodeDisplays,
  encodeDisplays,
} from "@/app/compare/display/utils/urlEncoder";
import { mapWithPrototype, mergeDeep } from "@/utils/objects";
import Display from "@/app/compare/display/types/Display";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";
import Setup from "@/app/compare/display/components/Setup";
import Presentation from "@/app/compare/display/components/Presentation";
import Details from "@/app/compare/display/components/Details";
import config from "@/config";

interface ComparisonProps {
  onDisplaysChange?: (displays: Display[]) => void;
  initialDisplays?: Display[];
}

export default function Comparison({ onDisplaysChange, initialDisplays }: ComparisonProps) {
  const [displays, setDisplays] = useState(initialDisplays || generateDisplays(2));
  const [queryState, setQueryState, isQueryStateReady] =
    useQueryState<string[]>("displays");

  useEffect(() => {
    if (onDisplaysChange) {
      onDisplaysChange(displays);
    }
  }, [displays, onDisplaysChange]);

  useEffect(() => {
    const displayDescriptions = displays
      .filter(d => d.diagonal.length > 0)
      .map(d => {
        const size = d.diagonal.length;
        let aspectRatio = d.aspectRatio.value;

        if (aspectRatio === 'custom' && d.customAspectRatio.width && d.customAspectRatio.height) {
          aspectRatio = `${d.customAspectRatio.width}x${d.customAspectRatio.height}`;
        }

        return `${size}in ${aspectRatio}`;
      })
      .join(" vs ");

    if (displayDescriptions) {
      document.title = `${displayDescriptions} - Display Comparison | ${config.shortUrl}`;
    } else {
      document.title = "Display Size Comparison Tool";
    }
  }, [displays]);

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

  return (
    <div>
      <Setup
        displays={displays}
        setDisplays={setData}
        createDisplay={createDisplay}
        deleteDisplay={deleteDisplay}
      />
      <div className="mt-12" />
      <Presentation displays={displays} />
      <div className="mt-12" />
      <Details displays={displays} />
    </div>
  );
}
