import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden w-full sm:pt-[6rem]">
      <MacbookScroll
        title={
          <span>
            Cuando juntas curiosidad, creatividad y determinación <br /> Encuentras la solución.
          </span>
        }
        badge={
          ''
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
