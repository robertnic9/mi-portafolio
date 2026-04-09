"use client";
import "@/styles/Pagetitle.css";

export default function Pagetitle({ title }) {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden px-4">
      <h2 className="whitespace-nowrap uppercase outlineText leading-none my-16">
        {title}
      </h2>
    </div>
  );
}
