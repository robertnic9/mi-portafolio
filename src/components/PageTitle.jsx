"use client";
import "@/styles/Pagetitle.css";

export default function Pagetitle({ title }) {
  return (
    <div className="w-full flex items-center justify-center pb-28">
      <h1 className="whitespace-nowrap uppercase absolute text-xl sm:text-lg md:text-base lg:text-sm outlineText">
        {title}
      </h1>
    </div>
  );
}
