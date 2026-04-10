"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { House, FolderOpen, User, Mail, Globe } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("header");

  const navItems = [
    { name: t("Home"), href: "/", icon: House },
    { name: t("Projects"), href: "/projects", icon: FolderOpen },
    { name: t("About"), href: "/aboutme", icon: User },
    { name: t("Contact"), href: "/contact", icon: Mail },
  ];

  const locales = ["es", "en", "it"];

  const activeIndex = navItems.findIndex((item) => item.href === pathname);
  const [hoverIndex, setHoverIndex] = useState(null);

  const cycleLocale = () => {
    const next = locales[(locales.indexOf(locale) + 1) % locales.length];
    router.replace(pathname, { locale: next });
  };

  const bgIndex = hoverIndex !== null ? hoverIndex : activeIndex !== -1 ? activeIndex : 0;

  return (
    <nav className="fixed top-6 left-0 w-full flex items-center justify-center z-50">
      <ul className="relative grid grid-cols-5 items-center border border-white/10 backdrop-blur-lg rounded-full shadow-lg w-full max-w-[680px] mx-4 md:mx-0">

        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={item.href}
              className={`relative text-center cursor-pointer transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Link
                href={item.href}
                className="relative z-20 p-4 flex items-center justify-center gap-2 whitespace-nowrap font-medium uppercase"
              >
                <Icon size={15} className="shrink-0 md:hidden" />
                <span className="hidden md:inline text-sm">{item.name}</span>
              </Link>
            </li>
          );
        })}

        {/* Language cycle button */}
        <li
          className="relative flex items-center justify-center border-l border-white/10 text-neutral-400 hover:text-white transition-colors duration-300"
          onMouseEnter={() => setHoverIndex(4)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <button
            onClick={cycleLocale}
            className="relative z-20 w-full p-4 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Globe size={14} className="shrink-0" />
            <span className="hidden md:inline text-[11px] font-semibold tracking-wide uppercase">
              {locale}
            </span>
          </button>
        </li>

        {/* Animated background */}
        <div
          className="absolute top-[0px] bottom-[0px] bg-white/10 rounded-full transition-all duration-300 pointer-events-none"
          style={{
            width: "20%",
            left: `${bgIndex * 20}%`,
            opacity: hoverIndex !== null || activeIndex !== -1 ? 1 : 0,
          }}
        />
      </ul>
    </nav>
  );
}