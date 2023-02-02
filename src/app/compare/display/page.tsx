"use client";

import Setup from "@/app/compare/display/components/Setup/Setup";
import Presentation from "@/app/compare/display/components/Presentation/Presentation";
import { useState } from "react";
import { generateDisplays } from "@/app/compare/display/utils/displayGenerator";

export default function DisplayPage() {
  const [displays, setDisplays] = useState(generateDisplays(2));

  return (
    <div>
      <Setup displays={displays} setDisplays={setDisplays} />
      <div className="mt-14" />
      <Presentation displays={displays} />
    </div>
  );
}
