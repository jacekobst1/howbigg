"use client";

import useQueryState from "@/hooks/useQueryState";
import { encodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { generateDisplays } from "@/app/compare/display/utils/displayGenerator";
import Button from "@/components/buttons/Button";
import {
  aspectRatios,
  customAspectRatio,
} from "@/app/compare/display/types/AspectRatio";
import { toNumber } from "lodash";
import {
  monitorComparisons,
  QuickComparison,
  smartphonesComparisons,
  tvComparisons,
} from "@/app/compare/display/types/QuickComparison";
import Display from "@/app/compare/display/types/Display";

export default function QuickComparisons() {
  const [queryState, setQueryState, isQueryStateReady] =
    useQueryState<string[]>("displays");

  const setDiagonalLength = (display: Display, diagonal: number) => {
    display.diagonal.length = diagonal;
  };

  const setAspectRatio = (display: Display, aspectRatio: string) => {
    const foundAspectRatio = aspectRatios.find(
      (ratio) => ratio.value === aspectRatio
    );
    if (foundAspectRatio) {
      display.aspectRatio = foundAspectRatio;
    } else {
      display.aspectRatio = customAspectRatio;
      display.customAspectRatio.width = toNumber(aspectRatio.split("x")[0]);
      display.customAspectRatio.height = toNumber(aspectRatio.split("x")[1]);
    }
  };

  const setIsVertical = (display: Display, isVertical: boolean) => {
    display.isVertical = isVertical;
  };

  function clickBtn(comparison: QuickComparison) {
    const displays = generateDisplays(2);

    setDiagonalLength(displays[0], comparison.display1.diagonal);
    setDiagonalLength(displays[1], comparison.display2.diagonal);

    if (comparison.display1.aspectRatio) {
      setAspectRatio(displays[0], comparison.display1.aspectRatio);
    }
    if (comparison.display2.aspectRatio) {
      setAspectRatio(displays[1], comparison.display2.aspectRatio);
    }

    if (comparison.display1.isVertical) {
      setIsVertical(displays[0], true);
    }
    if (comparison.display2.isVertical) {
      setIsVertical(displays[1], true);
    }

    setQueryState(encodeDisplays(displays));
    window.location.reload();
  }

  return (
    <>
      <h2 className="text-2xl mb-4">Quick comparisons</h2>

      <h3 className="text-lg mb-1">TVs:</h3>
      <ul>
        {tvComparisons.map((comparison, key) => (
          <li key={key}>
            <Button
              onClick={() => clickBtn(comparison)}
              variant="simple-underline"
            >
              {comparison.display1.diagonal} inch vs{" "}
              {comparison.display2.diagonal} inch{" "}
              <span className="invisible">TV</span>
            </Button>
          </li>
        ))}
      </ul>

      <div className="divider my-4" />

      <h3 className="text-lg mt-4 mb-1">Monitors:</h3>
      <ul>
        {monitorComparisons.map((comparison, key) => (
          <li key={key}>
            <Button
              onClick={() => clickBtn(comparison)}
              variant="simple-underline"
            >
              {comparison.display1.diagonal} inch{" "}
              {comparison.display1.aspectRatio} vs{" "}
              {comparison.display2.diagonal} inch{" "}
              {comparison.display2.aspectRatio}{" "}
              <span className="invisible">monitor</span>
            </Button>
          </li>
        ))}
      </ul>

      <div className="divider my-4" />

      <h3 className="text-lg mt-4 mb-1">Smartphones:</h3>
      <ul>
        {smartphonesComparisons.map((comparison, key) => (
          <li key={key}>
            <Button
              onClick={() => clickBtn(comparison)}
              variant="simple-underline"
            >
              {comparison.display1.name} vs {comparison.display2.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
