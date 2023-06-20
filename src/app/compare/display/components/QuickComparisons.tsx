import { encodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { generateDisplays } from "@/app/compare/display/utils/displayGenerator";
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
import config from "@/config";

export default function QuickComparisons() {
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

  const setName = (display: Display, name: string) => {
    display.name = name;
  };

  function generateHref(comparison: QuickComparison) {
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

    if (comparison.display1.name) {
      setName(displays[0], comparison.display1.name);
    }
    if (comparison.display2.name) {
      setName(displays[1], comparison.display2.name);
    }

    return (
      config.fullUrl +
      "?displays=" +
      encodeURIComponent(JSON.stringify(encodeDisplays(displays)))
    );
  }

  function boldFirstLetters(
    text: string | number | undefined,
    length: number = 1
  ) {
    return (
      <>
        <span className=" font-semibold">
          {text && text.toString().slice(0, length)}
        </span>
        {text && text.toString().slice(length)}
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl mb-4">Quick comparisons</h2>

      <h3 className="text-lg mb-1">TVs:</h3>
      <ul className="text-sm">
        {tvComparisons.map((comparison, key) => (
          <li key={key} className="mb-2 2xl:mb-1">
            <a
              href={generateHref(comparison)}
              className="hover:underline decoration-2"
            >
              {boldFirstLetters(comparison.display1.diagonal, 2)} inch vs{" "}
              {boldFirstLetters(comparison.display2.diagonal, 2)} inch{" "}
              <span className="invisible">TV</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="divider my-4" />

      <h3 className="text-lg mt-4 mb-1">Monitors:</h3>
      <ul className="text-sm">
        {monitorComparisons.map((comparison, key) => (
          <li key={key} className="mb-2 2xl:mb-1">
            <a
              href={generateHref(comparison)}
              className="hover:underline decoration-2"
            >
              {boldFirstLetters(comparison.display1.diagonal, 2)} inch{" "}
              {comparison.display1.aspectRatio} vs{" "}
              {boldFirstLetters(comparison.display2.diagonal, 2)} inch{" "}
              {comparison.display2.aspectRatio}{" "}
            </a>
          </li>
        ))}
      </ul>

      <div className="divider my-4" />

      <h3 className="text-lg mt-4 mb-1">Smartphones:</h3>
      <ul className="text-sm">
        {smartphonesComparisons.map((comparison, key) => (
          <li key={key} className="mb-2 2xl:mb-1">
            <a
              href={generateHref(comparison)}
              className="hover:underline decoration-2"
            >
              {comparison.display1.name} <b>vs</b> {comparison.display2.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
