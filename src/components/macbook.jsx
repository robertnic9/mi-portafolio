import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { useTranslations } from "next-intl";
export function MacbookScrollDemo() {
  const t = useTranslations("activities");
  return (
    <div className="overflow-hidden w-full sm:pt-[6rem]">
      <MacbookScroll
        title={
          <span>
            {t("about.title1")} <br /> {t("about.title2")}
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
