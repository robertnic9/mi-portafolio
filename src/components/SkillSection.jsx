"use client";
import Pagetitle from "./PageTitle";
import { useTranslations } from "next-intl";
import SkillData1 from "@/data/SkillData1";
import SkillData2 from "@/data/SkillData2";
import "@/styles/SkillSection.css";

function SkillSection() {
  const t = useTranslations("skills");

  return (
    <section id="skill">
      <Pagetitle title={t("title")} />
      <div
        className="slider"
        style={{
          "--width": "100px",
          "--height": "100px",
          "--quantity": SkillData1.length,
        }}
      >
        <div className="list">
          {SkillData1.map((skill, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1 }}
            >
              <img src={skill.src} alt={skill.name} />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="slider"
        style={{
          "--width": "100px",
          "--height": "100px",
          "--quantity": SkillData2.length,
        }}
        reverse="true"
      >
        <div className="list">
          {SkillData2.map((skill, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1 }}
            >
              <img src={skill.src} alt={skill.name} />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
