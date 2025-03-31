"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/formentera-diseno-web" },
  { name: "About", href: "/aboutme" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const activeIndex = navItems.findIndex((item) => item.href === pathname);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <nav className="fixed top-8 left-0 w-full flex justify-center py-2 z-10 bg-transparent">
      <ul className="relative grid grid-cols-4 items-center justify-center py-4 border border-white/10 backdrop-blur-md rounded-full shadow-lg transition-all duration-200 ease-in-out mx-2 md:mx-0">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className="relative px-2 md:px-4 text-center  rounded-full cursor-pointer transition-colors duration-300 text-neutral-300"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Link href={item.href} className="relative z-20 py-4 px-4">
              {item.name}
            </Link>
          </li>
        ))}
        <div
          className="absolute top-0 h-full w-1/4 bg-white/10 rounded-full transition-all duration-300"
          style={{
            left: `${(hoverIndex !== null ? hoverIndex : activeIndex) * 25}%`,
            opacity: hoverIndex !== null || activeIndex !== -1 ? 1 : 0,
          }}
        />
      </ul>
    </nav>
  );
}
