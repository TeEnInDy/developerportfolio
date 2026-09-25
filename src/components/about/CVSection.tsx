import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "./Reveal";
import styles from "./about.module.css";

function SectionTitle({ th, en }: { th: string; en: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-3">
      <h2 className={`${styles.display} text-2xl font-bold sm:text-3xl`} style={{ letterSpacing: "-0.01em" }}>
        {th}
      </h2>
      <span className="text-sm uppercase tracking-[0.12em]" style={{ color: "var(--faint)" }}>
        {en}
      </span>
    </div>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
      style={{ background: "rgba(167,139,250,0.12)", color: "var(--accent)" }}
    >
      {children}
    </div>
  );
}

const svg = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CVSection() {
  return (
    <section id="cv" className={`${styles.root} pb-20`}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6">
        {/* ================= HERO ================= */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-6 py-10 sm:px-12 sm:py-14"
            style={{ background: "#110E22", border: "1px solid var(--line)" }}
          >
            <div
              aria-hidden="true"
              className={styles.orb}
              style={{
                width: 480,
                height: 480,
                left: -140,
                top: -180,
                background: "radial-gradient(circle, rgba(124,92,255,.4), rgba(124,92,255,0) 65%)",
              }}
            />

            <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <div
                className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[28px] sm:h-48 sm:w-48"
                style={{ border: "1px solid var(--line)" }}
              >
                <Image src={profile.photo} alt={profile.name} fill sizes="192px" className="object-cover" priority />
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium"
                  style={{ background: "rgba(167,139,250,0.10)", border: "1px solid rgba(167,139,250,0.25)", color: "var(--accent)" }}
                >
                  <span className={`${styles.blink} h-1.5 w-1.5 rounded-full`} style={{ background: "#34D399", boxShadow: "0 0 8px #34D399" }} />
                  {profile.availability}
                </span>

                <h1 className={`${styles.display} text-4xl font-extrabold leading-tight sm:text-5xl`} style={{ letterSpacing: "-0.02em" }}>
                  {profile.name}
                </h1>
                <p className="text-lg font-medium" style={{ color: "#C9BEFF" }}>
                  {profile.role} · {profile.age} ปี · {profile.location}
                </p>
                <p className="max-w-[560px] text-base leading-7" style={{ color: "var(--muted)" }}>
                  {profile.summary}
                </p>

                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[15px]" style={{ color: "var(--muted)" }}>
                  <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>{profile.email}</a>
                  <span>โทร {profile.phone}</span>
                  <span>LINE {profile.line}</span>
                  <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>GitHub ↗</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>LinkedIn ↗</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= EDUCATION ================= */}
        <Reveal>
          <div className={`${styles.card} flex flex-col gap-6 p-7 sm:p-8`}>
            <SectionTitle th="การศึกษา" en="Education" />
            <div className="flex flex-col gap-5">
              {education.map((item, i) => (
                <div key={item.school} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1">
                    <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                    {i < education.length - 1 && (
                      <span className="mt-1 w-px flex-1" style={{ background: "var(--line)" }} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1 pb-2">
                    <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{item.period}</span>
                    <span className="text-[17px] font-semibold">{item.school}</span>
                    <span className="text-sm" style={{ color: "var(--faint)" }}>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ================= SKILLS + EXPERIENCE ================= */}
        <div className="grid items-start gap-5 md:grid-cols-2">
          <Reveal delay={60}>
            <div className={`${styles.card} flex h-full flex-col gap-5 p-7 sm:p-8`}>
              <SectionTitle th="ทักษะ" en="Skills" />
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
              <div className="mt-2 flex flex-col gap-3">
                {profile.languages.map((lang) => (
                  <div key={lang.label} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 text-sm font-semibold" style={{ color: "var(--muted)" }}>{lang.label}</span>
                    <div className="flex flex-1 gap-1.5">
                      {Array.from({ length: lang.max }).map((_, i) => (
                        <span
                          key={i}
                          className="h-2 flex-1 rounded-full"
                          style={{ background: i < lang.level ? "var(--accent)" : "rgba(255,255,255,0.08)" }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={`${styles.card} flex h-full flex-col gap-5 p-7 sm:p-8`}>
              <SectionTitle th="ประสบการณ์อื่น ๆ" en="Other Experience" />
              <ul className="flex flex-col gap-4">
                {experience.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <IconCircle>
                      <svg {...svg}><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
                    </IconCircle>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-sm leading-6" style={{ color: "var(--muted)" }}>{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
