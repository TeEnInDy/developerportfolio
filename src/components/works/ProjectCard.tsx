"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

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

  return (
    <div style={{ gridColumn: `span ${span}`, gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined, position: "relative" }}>
      <GlassCard
        style={{
          height: "100%",
          padding: "32px",
          overflow: "hidden",
          position: "relative",
          transition: "border-color 0.3s, transform 0.3s",
          borderColor: hovered ? `${project.accent}40` : "rgba(255,255,255,0.10)",
          transform: hovered ? "translateY(-2px)" : "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            width: "100%",
            height: span >= 8 ? "340px" : "180px",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "24px",
            background: "#111",
            flexShrink: 0,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.03)" : "scale(1)" }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.slice(0, span >= 8 ? 4 : 2).map((tag) => (
              <Tag key={tag} label={tag} color={project.accent} />
            ))}
          </div>
          <span className="font-display" style={{ fontSize: "12px", color: "#555", fontWeight: 500 }}>{project.year}</span>
        </div>

        <h3
          className="font-display"
          style={{ fontSize: span >= 8 ? "28px" : "18px", lineHeight: span >= 8 ? "34px" : "24px", fontWeight: 700, color: "#F5F5F5", marginBottom: "12px", letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>

        <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="font-display" style={{ fontSize: "12px", color: "#555", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>{project.role}</span>
          <a
            href={project.link}
            className="font-display"
            style={{ fontSize: "13px", fontWeight: 600, color: project.accent, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}
          >
            View project <span>→</span>
          </a>
        </div>

        {hovered && (
          <div
            aria-hidden="true"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
          />
        )}
      </GlassCard>
    </div>
  );
}
