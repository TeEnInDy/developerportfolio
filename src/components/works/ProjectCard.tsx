"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

const SPAN_CLASSES: Record<number, string> = {
  4: "col-span-1 sm:col-span-2 md:col-span-4",
  6: "col-span-1 sm:col-span-2 md:col-span-6",
  8: "col-span-1 sm:col-span-2 md:col-span-8",
  12: "col-span-1 sm:col-span-2 md:col-span-12",
};

export function ProjectCard({
  project,
  span,
  rowSpan = 1,
}: {
  project: Project;
  span: number;
  rowSpan?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const large = span >= 8;
  const colClass = SPAN_CLASSES[span] ?? SPAN_CLASSES[6];
  const rowClass = rowSpan > 1 ? "md:row-span-2" : "";

  return (
    <div className={`${colClass} ${rowClass} relative`}>
      <GlassCard
        className="flex h-full flex-col p-6 sm:p-8"
        style={{
          overflow: "hidden",
          position: "relative",
          transition: "border-color 0.3s, transform 0.3s",
          borderColor: hovered ? `${project.accent}40` : "rgba(255,255,255,0.10)",
          transform: hovered ? "translateY(-2px)" : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`mb-6 w-full shrink-0 overflow-hidden rounded-2xl bg-[#111] ${
            large ? "aspect-16/10 md:aspect-video" : "aspect-4/3"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, large ? 4 : 3).map((tag) => (
              <Tag key={tag} label={tag} color={project.accent} />
            ))}
          </div>
          <span className="font-display text-xs font-medium" style={{ color: "#555" }}>
            {project.year}
          </span>
        </div>

        <h3
          className={`font-display mb-3 font-bold ${large ? "text-2xl sm:text-3xl" : "text-lg"}`}
          style={{ color: "#F5F5F5", letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>

        <p className="font-body flex-1 text-base leading-6" style={{ color: "#A3A3A3" }}>
          {project.description}
        </p>

        <div
          className="mt-6 flex items-center justify-between pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="font-display text-xs font-medium uppercase tracking-wide"
            style={{ color: "#555" }}
          >
            {project.role}
          </span>
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noreferrer" : undefined}
            className="font-display flex items-center gap-1 text-sm font-semibold"
            style={{ color: project.accent, textDecoration: "none" }}
          >
            View project <span aria-hidden="true">→</span>
          </a>
        </div>

        {hovered && (
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
          />
        )}
      </GlassCard>
    </div>
  );
}
