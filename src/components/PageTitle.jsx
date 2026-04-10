"use client";
import { useEffect, useRef } from "react";

export default function Pagetitle({ title }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fitText = () => {
      // Reset para medir correctamente
      text.style.fontSize = "1px";

      const containerWidth = container.offsetWidth;

      // Búsqueda binaria para encontrar el font-size óptimo
      let min = 1;
      let max = 1000;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = `${mid}px`;

        if (text.scrollWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      // max es el último valor que cabe
      text.style.fontSize = `${max}px`;
    };

    fitText();

    const observer = new ResizeObserver(fitText);
    observer.observe(container);

    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      ref={containerRef}
      className="w-[80%] mx-auto flex items-center justify-center overflow-hidden"
    >
      <h2
        ref={textRef}
        className="whitespace-nowrap uppercase outlineText leading-none my-16"
      >
        {title}
      </h2>
    </div>
  );
}