"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { profile } from "@/data/profile";
import { quotation, quotationTotal } from "@/data/quotation";
import { Reveal } from "./Reveal";
import styles from "./about.module.css";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

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

function NumberBadge({ n }: { n: string }) {
  return (
    <div
      className={`${styles.display} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold`}
      style={{ background: "var(--pink)", color: "#0A0A0A" }}
    >
      {n}
    </div>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
      style={{ background: "rgba(167,139,250,0.12)", color: "var(--accent)" }}
    >
      {children}
    </div>
  );
}

const svg = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Dot({ color = "var(--accent)", square = false }: { color?: string; square?: boolean }) {
  return (
    <span
      className="inline-block h-[7px] w-[7px] shrink-0"
      style={{ background: color, borderRadius: square ? 2 : 999 }}
    />
  );
}

export function ServiceQuotation() {
  const [phase, setPhase] = useState(0);
  const current = quotation.phases[phase];
  const lastPhase = quotation.phases.length - 1;
  const cumulative = quotation.payments.reduce<number[]>((acc, p, i) => {
    acc.push((acc[i - 1] ?? 0) + p.percent);
    return acc;
  }, []);

  return (
    <section id="services" className={`${styles.root} pb-32`}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6">
        {/* ================= HEADER ================= */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-6 py-10 sm:px-12 sm:py-14"
            style={{ background: "#110E22", border: "1px solid var(--line)" }}
          >
            <div
              aria-hidden="true"
              className={styles.orb}
              style={{
                width: 520,
                height: 520,
                left: "40%",
                top: -200,
                background: "radial-gradient(circle, rgba(124,92,255,.45), rgba(124,92,255,0) 65%)",
              }}
            />
            <div
              aria-hidden="true"
              className={styles.orb}
              style={{
                width: 380,
                height: 380,
                right: -80,
                bottom: -160,
                animationDelay: "-5s",
                background: "radial-gradient(circle, rgba(244,114,182,.35), rgba(244,114,182,0) 65%)",
              }}
            />
            <svg
              aria-hidden="true"
              className={`${styles.spin} pointer-events-none absolute hidden md:block`}
              width="520"
              height="520"
              viewBox="0 0 520 520"
              style={{ right: 60, top: -80, opacity: 0.14 }}
            >
              <circle cx="260" cy="260" r="220" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 10" />
              <circle cx="260" cy="260" r="160" fill="none" stroke="#fff" strokeWidth="1" />
            </svg>

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex flex-1 flex-col gap-4">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium"
                  style={{ background: "rgba(167,139,250,0.10)", border: "1px solid rgba(167,139,250,0.25)", color: "var(--accent)" }}
                >
                  <span className={`${styles.blink} h-1.5 w-1.5 rounded-full`} style={{ background: "#34D399", boxShadow: "0 0 8px #34D399" }} />
                  UX/UI Design Service
                </span>
                <h2
                  className={`${styles.display} text-5xl font-extrabold leading-[1.05] sm:text-7xl`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ใบเสนอราคา
                </h2>
                <p className={`${styles.display} text-xl font-medium sm:text-2xl`} style={{ color: "#C9BEFF" }}>
                  ออกแบบ UX/UI · Quotation
                </p>
                <p className="max-w-[480px] text-base leading-7" style={{ color: "var(--muted)" }}>
                  งานออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้สำหรับ Mobile Application
                  พร้อมจัดทำ Design System ที่ทีมพัฒนานำไปใช้ต่อได้ทันที
                </p>
              </div>

              {/* floating phones */}
              <div aria-hidden="true" className="relative hidden h-[400px] w-[290px] shrink-0 md:block">
                <div
                  className={`${styles.phoneB} absolute overflow-hidden`}
                  style={{ left: 115, top: 20, width: 165, height: 330, borderRadius: 30, background: "#221E3D", border: "6px solid #2F2A52", boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)" }}
                >
                  <div className="flex flex-col gap-2.5 px-3.5 py-4">
                    <div className="h-2.5 w-14 rounded" style={{ background: "#4B4480" }} />
                    <div className="h-[110px] rounded-2xl" style={{ background: "linear-gradient(160deg, #F472B6, #7C5CFF)" }} />
                    <div className="grid grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-16 rounded-xl" style={{ background: "#3A3468" }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.phoneA} absolute overflow-hidden`}
                  style={{ left: 0, top: 50, width: 175, height: 350, borderRadius: 32, background: "#F5F5F5", border: "6px solid #000", boxShadow: "0 40px 70px -24px rgba(0,0,0,.8)" }}
                >
                  <div className="flex flex-col gap-2.5 px-3.5 py-5">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-16 rounded" style={{ background: "#D9D4EE" }} />
                      <div className="h-5 w-5 rounded-full" style={{ background: "var(--accent-strong)" }} />
                    </div>
                    <div className="relative h-[115px] overflow-hidden rounded-2xl" style={{ background: "linear-gradient(150deg, #7C5CFF, #3B2A9E)" }}>
                      <div className={styles.shine} />
                    </div>
                    <div className="h-2.5 w-28 rounded" style={{ background: "#17142B" }} />
                    <div className="h-2 w-32 rounded" style={{ background: "#D9D4EE" }} />
                    <div className="h-2 w-20 rounded" style={{ background: "#D9D4EE" }} />
                    <div className="mt-2 h-10 rounded-xl" style={{ background: "var(--accent-strong)" }} />
                  </div>
                </div>
              </div>

              {/* document meta */}
              <div
                className="flex w-full shrink-0 flex-col gap-4 rounded-[22px] p-6 lg:w-[280px]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(14px)" }}
              >
                <div className="text-xs tracking-[0.14em]" style={{ color: "var(--faint)" }}>รายละเอียดเอกสาร</div>
                <div>
                  <div className="text-[13px]" style={{ color: "var(--muted)" }}>เลขที่เอกสาร</div>
                  <div className={`${styles.display} text-xl font-semibold`}>{quotation.documentNo}</div>
                </div>
                <div className="h-px" style={{ background: "var(--line)" }} />
                <div>
                  <div className="text-[13px]" style={{ color: "var(--muted)" }}>วันที่จัดทำ</div>
                  <div className="font-medium">{quotation.issuedAt}</div>
                </div>
                <div>
                  <div className="text-[13px]" style={{ color: "var(--muted)" }}>ราคานี้ใช้ได้ถึง</div>
                  <div className="font-medium">
                    {quotation.validUntil} <span style={{ color: "var(--pink)" }}>({quotation.validDays} วัน)</span>
                  </div>
                </div>
                <div className="h-px" style={{ background: "var(--line)" }} />
                <div className="flex items-center gap-3">
                  <div
                    className={`${styles.pulse} ${styles.display} flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold`}
                    style={{ background: "var(--accent)", color: "#0A0A0A" }}
                  >
                    {profile.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{profile.name}</div>
                    <div className="text-[13px]" style={{ color: "var(--accent)" }}>UX/UI Designer · Freelance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= OVERVIEW ================= */}
        <Reveal>
          <div className={`${styles.card} flex flex-col gap-5 p-7 sm:flex-row sm:p-8`}>
            <IconCircle>
              <svg {...svg}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" /></svg>
            </IconCircle>
            <div className="flex flex-col gap-2">
              <SectionTitle th="ภาพรวมโครงการ" en="Project Overview" />
              <p className="text-base leading-8" style={{ color: "var(--muted)" }}>{quotation.overview}</p>
            </div>
          </div>
        </Reveal>

        {/* ================= SCOPE ================= */}
        <div className="flex flex-col gap-5">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[18px] px-6 py-4"
              style={{ background: "linear-gradient(100deg, #3B2A9E, #7C5CFF 55%, #DB2777)" }}
            >
              <div className={styles.shine} />
              <div className="relative flex items-baseline gap-3">
                <h2 className={`${styles.display} text-2xl font-bold sm:text-3xl`}>ขอบเขตงาน</h2>
                <span className="text-sm tracking-[0.12em]" style={{ color: "#E4DEFF" }}>SCOPE OF WORK</span>
              </div>
            </div>
          </Reveal>

          <div className="grid items-start gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              {/* 01 UX */}
              <Reveal delay={60}>
                <article className={`${styles.card} flex flex-col gap-5 p-7`}>
                  <div className="flex items-center gap-4">
                    <NumberBadge n="01" />
                    <div className="flex-1">
                      <h3 className={`${styles.display} text-xl font-bold tracking-wide`}>UX DESIGN</h3>
                      <span className="text-sm" style={{ color: "var(--faint)" }}>ออกแบบประสบการณ์ผู้ใช้</span>
                    </div>
                    <IconCircle>
                      <svg {...svg}><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-3h14v3" /></svg>
                    </IconCircle>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {quotation.uxItems.map((item) => (
                      <li key={item} className={`${styles.row} flex items-center gap-3 px-2.5 py-1.5`} style={{ color: "var(--muted)" }}>
                        <Dot />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              {/* 02 UI */}
              <Reveal delay={120}>
                <article className={`${styles.card} flex flex-col gap-5 p-7`}>
                  <div className="flex items-center gap-4">
                    <NumberBadge n="02" />
                    <div className="flex-1">
                      <h3 className={`${styles.display} text-xl font-bold tracking-wide`}>UI DESIGN</h3>
                      <span className="text-sm" style={{ color: "var(--faint)" }}>ออกแบบส่วนติดต่อผู้ใช้</span>
                    </div>
                    <IconCircle>
                      <svg {...svg}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 18h4M9 7h6M9 11h4" /></svg>
                    </IconCircle>
                  </div>
                  <p className="leading-7" style={{ color: "var(--muted)" }}>
                    ออกแบบ Mobile Application สำหรับผู้ใช้งานทั้งหมด{" "}
                    <span className="rounded-full px-2.5 py-0.5 font-semibold" style={{ background: "rgba(167,139,250,0.14)", color: "var(--accent)" }}>
                      {quotation.ui.userRoles} User Roles (Actors)
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quotation.ui.tags.map((t) => (
                      <span key={t} className="rounded-full px-3 py-1 text-[13px]" style={{ border: "1px solid var(--line)", color: "var(--muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--faint)" }}>หน้าจอที่ออกแบบ</div>
                  <ul className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                    {quotation.ui.screens.map((s) => (
                      <li key={s} className={`${styles.row} flex items-center gap-2.5 px-2.5 py-1.5 text-[15px]`} style={{ color: "var(--muted)" }}>
                        <Dot color="var(--pink)" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm leading-6"
                    style={{ background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.3)", color: "#F9A8D4" }}
                  >
                    <svg {...svg} width={20} height={20} strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
                    {quotation.ui.note}
                  </div>
                </article>
              </Reveal>
            </div>

            <div className="flex flex-col gap-5">
              {/* 03 Design System */}
              <Reveal delay={180}>
                <article className={`${styles.card} flex flex-col gap-5 p-7`}>
                  <div className="flex items-center gap-4">
                    <NumberBadge n="03" />
                    <div className="flex-1">
                      <h3 className={`${styles.display} text-xl font-bold tracking-wide`}>DESIGN SYSTEM</h3>
                      <span className="text-sm" style={{ color: "var(--faint)" }}>ระบบดีไซน์สำหรับทีมพัฒนา</span>
                    </div>
                    <IconCircle>
                      <svg {...svg}><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="3.5" /><rect x="3" y="14" width="7" height="7" rx="2" /><path d="M17.5 14v7M14 17.5h7" /></svg>
                    </IconCircle>
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--faint)" }}>ประกอบด้วย</div>
                  <ul className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                    {quotation.designSystem.map((d) => (
                      <li key={d} className={`${styles.row} flex items-center gap-2.5 px-2.5 py-1.5 text-[15px]`} style={{ color: "var(--muted)" }}>
                        <Dot square />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              {/* 04 Deliverables */}
              <Reveal delay={240}>
                <article
                  className={`${styles.card} relative flex flex-col gap-5 overflow-hidden p-7`}
                  style={{ background: "#141026" }}
                >
                  <div
                    aria-hidden="true"
                    className={styles.orb}
                    style={{ width: 260, height: 260, right: -70, top: -90, background: "radial-gradient(circle, rgba(124,92,255,.45), rgba(124,92,255,0) 65%)" }}
                  />
                  <div className="relative flex items-center gap-4">
                    <NumberBadge n="04" />
                    <div className="flex-1">
                      <h3 className={`${styles.display} text-xl font-bold tracking-wide`}>DELIVERABLES</h3>
                      <span className="text-sm" style={{ color: "var(--faint)" }}>สิ่งที่จะได้รับ</span>
                    </div>
                    <IconCircle>
                      <svg {...svg}><circle cx="12" cy="12" r="9" /><path d="M12 7v9M8 12l4 4 4-4" /></svg>
                    </IconCircle>
                  </div>
                  <ul className="relative flex flex-col gap-2.5">
                    {quotation.deliverables.map((d) => (
                      <li
                        key={d.title}
                        className="flex items-center gap-3 rounded-xl px-3.5 py-3"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--line)" }}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--accent)" }}>
                          <svg {...svg} width={14} height={14} stroke="#0A0A0A" strokeWidth={3}><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                        <span className="flex-1 font-semibold">{d.title}</span>
                        <span className="text-[13px]" style={{ color: "var(--faint)" }}>{d.note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>

          {/* Out of scope */}
          <Reveal>
            <div
              className="flex flex-col gap-4 rounded-[22px] px-7 py-5 md:flex-row md:items-center md:gap-7"
              style={{ background: "rgba(244,114,182,0.06)", border: "1px solid rgba(244,114,182,0.25)" }}
            >
              <div className="shrink-0">
                <h3 className={`${styles.display} text-xl font-bold`} style={{ color: "#F9A8D4" }}>สิ่งที่ไม่รวม</h3>
                <span className="text-[13px]" style={{ color: "#BE7C9B" }}>Out of Scope</span>
              </div>
              <div className="flex flex-1 flex-wrap gap-2.5">
                {quotation.outOfScope.map((o) => (
                  <span
                    key={o}
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[15px]"
                    style={{ border: "1px solid rgba(244,114,182,0.3)", color: "#FBCFE8" }}
                  >
                    <svg {...svg} width={14} height={14} strokeWidth={2.8} stroke="#F472B6"><path d="M6 6l12 12M18 6L6 18" /></svg>
                    {o}
                  </span>
                ))}
              </div>
              <div className="text-[13px] leading-6 md:max-w-[220px]" style={{ color: "#BE7C9B" }}>
                งานนอกขอบเขตเสนอราคาแยกเพิ่มเติมได้
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================= PRICING + PAYMENT ================= */}
        <div className="grid items-start gap-5 lg:grid-cols-[7fr_5fr]">
          <Reveal>
            <div className={`${styles.card} overflow-hidden`} style={{ transform: "none" }}>
              <div className="px-7 pb-4 pt-7">
                <SectionTitle th="ค่าบริการ" en="Pricing" />
              </div>
              <div
                className="grid grid-cols-[44px_1fr_110px] px-7 py-3 text-[13px] font-semibold sm:grid-cols-[56px_1fr_140px]"
                style={{ background: "rgba(167,139,250,0.08)", color: "var(--faint)" }}
              >
                <div>ลำดับ</div>
                <div>รายการ</div>
                <div className="text-right">ราคา ({quotation.currency})</div>
              </div>
              {quotation.pricing.map((p, i) => (
                <div
                  key={p.title}
                  className={`${styles.row} grid grid-cols-[44px_1fr_110px] items-center px-7 py-5 sm:grid-cols-[56px_1fr_140px]`}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", borderRadius: 0 }}
                >
                  <div className={`${styles.display} text-lg font-bold`} style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[17px] font-semibold">{p.title}</span>
                    <span className="text-sm" style={{ color: "var(--faint)" }}>{p.description}</span>
                  </div>
                  <div className={`${styles.display} text-right text-lg font-semibold sm:text-xl`}>{fmt(p.price)}</div>
                </div>
              ))}
              <div
                className="relative m-7 flex flex-wrap items-center justify-between gap-3 overflow-hidden rounded-[18px] px-6 py-5"
                style={{ background: "linear-gradient(120deg, #3B2A9E, #7C5CFF 55%, #9B5CFF)" }}
              >
                <div className={styles.shine} />
                <div className="relative flex flex-col">
                  <span className={`${styles.display} text-xl font-semibold`}>รวมทั้งสิ้น</span>
                  <span className="text-[13px]" style={{ color: "#E4DEFF" }}>Total · ยังไม่รวมภาษีมูลค่าเพิ่ม</span>
                </div>
                <div className="relative flex items-baseline gap-2">
                  <span className={`${styles.display} text-4xl font-extrabold sm:text-5xl`}>{fmt(quotationTotal)}</span>
                  <span className="text-lg">{quotation.currency}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={`${styles.card} flex flex-col gap-4 p-7`} style={{ transform: "none" }}>
              <SectionTitle th="เงื่อนไขชำระเงิน" en="Payment Terms" />
              {quotation.payments.map((m, i) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-2.5 rounded-2xl px-4 py-4"
                  style={{ border: "1px solid var(--line)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${styles.display} w-[68px] text-3xl font-extrabold`} style={{ color: "var(--accent)" }}>
                      {m.percent}%
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="font-semibold">{m.label}</span>
                      <span className="text-[13px]" style={{ color: "var(--faint)" }}>{m.when}</span>
                    </div>
                    <div className={`${styles.display} whitespace-nowrap font-semibold`}>
                      {fmt((quotationTotal * m.percent) / 100)} ฿
                    </div>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div
                      className={`${styles.bar} h-full rounded-full`}
                      style={{ width: `${cumulative[i]}%`, background: "linear-gradient(90deg, var(--accent-strong), var(--accent))" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ================= TIMELINE ================= */}
        <Reveal>
          <div className={`${styles.card} flex flex-col gap-7 p-7 sm:p-8`} style={{ transform: "none" }}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <SectionTitle th="ระยะเวลาดำเนินงาน" en="Timeline" />
                <p className="text-[15px]" style={{ color: "var(--faint)" }}>
                  นับจากวันที่ได้รับข้อมูลครบถ้วนและชำระมัดจำ · คลิกแต่ละช่วงเพื่อดูรายละเอียด
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span style={{ color: "var(--muted)" }}>ประมาณ</span>
                <span className={`${styles.display} text-4xl font-extrabold`} style={{ color: "var(--accent)" }}>
                  {quotation.timelineTotal}
                </span>
                <span className="font-semibold">สัปดาห์</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[30px] right-[30px] top-[29px] hidden h-1 rounded sm:block" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div
                className={`${styles.progress} absolute left-[30px] top-[29px] hidden h-1 rounded sm:block`}
                style={{ width: `calc((100% - 60px) * ${phase / lastPhase})`, background: "var(--accent)", boxShadow: "0 0 12px rgba(167,139,250,.7)" }}
              />
              <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
                {quotation.phases.map((ph, i) => {
                  const active = i === phase;
                  const done = i < phase;
                  return (
                    <button
                      key={ph.title}
                      type="button"
                      className={styles.phase}
                      onClick={() => setPhase(i)}
                      aria-pressed={active}
                    >
                      <span
                        className={`${active ? styles.pulse : ""} ${styles.display} flex h-[62px] w-[62px] items-center justify-center rounded-full text-xl font-bold`}
                        style={{
                          background: active || done ? "var(--accent)" : "#0A0A0A",
                          border: "3px solid var(--accent)",
                          color: active || done ? "#0A0A0A" : "var(--accent)",
                          transition: "background .3s, color .3s",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="text-[17px] font-semibold" style={{ color: active ? "var(--text)" : "var(--muted)" }}>
                          {ph.title}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{ph.duration}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              key={phase}
              className="flex flex-col gap-2 rounded-2xl px-6 py-5 sm:flex-row sm:gap-5"
              style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}
              aria-live="polite"
            >
              <div className={`${styles.display} whitespace-nowrap font-bold`} style={{ color: "var(--accent)" }}>
                ช่วงที่ {String(phase + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="text-[17px] font-semibold">{current.title} · {current.duration}</div>
                <div className="text-[15px] leading-7" style={{ color: "var(--muted)" }}>{current.detail}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= REVISIONS / CHANGE / NOTE ================= */}
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className={`${styles.card} flex h-full flex-col gap-4 p-7`}>
              <SectionTitle th="การแก้ไขงาน" en="Revision" />
              <div className="flex items-center gap-5">
                <div className="relative h-[108px] w-[108px] shrink-0">
                  <svg width="108" height="108" viewBox="0 0 108 108" aria-hidden="true">
                    <circle cx="54" cy="54" r="48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                    <circle
                      className={styles.ringArc}
                      cx="54"
                      cy="54"
                      r="48"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      transform="rotate(-90 54 54)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`${styles.display} text-4xl font-extrabold leading-none`}>{quotation.freeRevisions}</span>
                    <span className="text-[13px]" style={{ color: "var(--faint)" }}>รอบ</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-[15px] leading-6" style={{ color: "var(--muted)" }}>
                  <div>
                    <strong style={{ color: "var(--text)" }}>แก้ไขฟรี {quotation.freeRevisions} รอบ</strong> ตามขอบเขตงานที่ตกลงกัน
                  </div>
                  <div>
                    ส่วนเกินคิดตามชั่วโมง/รอบ{" "}
                    <span style={{ color: "var(--text)" }}>{quotation.extraRevisionRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={`${styles.card} flex h-full flex-col gap-3 p-7`}>
              <SectionTitle th="การเปลี่ยนแปลงขอบเขต" en="Change Request" />
              <p className="text-[15px] leading-7" style={{ color: "var(--muted)" }}>{quotation.changeRequest}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className={`${styles.card} flex h-full flex-col gap-3 p-7`}
              style={{ background: "rgba(251,191,36,0.06)", borderColor: "rgba(251,191,36,0.25)" }}
            >
              <div className="flex items-center gap-2.5">
                <svg {...svg} width={22} height={22} strokeWidth={2} stroke="#FBBF24"><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9L2.4 17.5A2 2 0 004.1 20.5h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" /></svg>
                <h3 className={`${styles.display} text-xl font-bold`} style={{ color: "#FCD34D" }}>หมายเหตุ</h3>
              </div>
              <p className="text-[15px] leading-7" style={{ color: "#E7D3A1" }}>
                {quotation.note} · ใบเสนอราคามีอายุ <strong>{quotation.validDays} วัน</strong> นับจากวันที่จัดทำ
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= CTA ================= */}
        <Reveal>
          <div
            className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[28px] px-7 py-9 sm:flex-row sm:items-center sm:px-12"
            style={{ background: "#110E22", border: "1px solid var(--line)" }}
          >
            <div
              aria-hidden="true"
              className={styles.orb}
              style={{ width: 360, height: 360, left: -80, top: -180, background: "radial-gradient(circle, rgba(124,92,255,.4), rgba(124,92,255,0) 65%)" }}
            />
            <div className="relative flex flex-col gap-1">
              <div className={`${styles.display} text-2xl font-bold`}>
                Let&apos;s create something great together <span className={styles.blink} style={{ color: "#C9BEFF" }}>✦</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]" style={{ color: "var(--muted)" }}>
                <span>โทร {profile.phone}</span>
                <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>{profile.email}</a>
                <span>LINE {profile.line}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className={`${styles.display} relative shrink-0 rounded-xl px-8 py-3.5 text-[15px] font-bold`}
              style={{ background: "var(--accent)", color: "#0A0A0A", textDecoration: "none" }}
            >
              ขอใบเสนอราคา →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
