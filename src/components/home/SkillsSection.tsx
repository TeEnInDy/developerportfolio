import { GlassCard } from "@/components/ui/GlassCard";
import { Tag } from "@/components/ui/Tag";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section style={{ paddingBottom: "128px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "center" }}>
          <div>
            <h2
              className="font-display"
              style={{ fontSize: "48px", lineHeight: "56px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
            >
              Tools I trust.
            </h2>
            <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "380px" }}>
              A stack I go deep on, not wide.
            </p>
          </div>

          <GlassCard style={{ padding: "32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
