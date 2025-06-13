"use client";
import "@/styles/Pagetitle.css";

export default function Pagetitle({ title }) {
  return (
    <div className="w-full flex items-center justify-center sm:translate-y-14">
      <h2 className="whitespace-nowrap uppercase outlineText">
        {title}
      </h2>
    </div>
  );
}
