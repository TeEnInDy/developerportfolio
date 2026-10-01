import { GlassCard } from "@/components/ui/GlassCard";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section style={{ paddingBottom: "clamp(80px, 12vw, 128px)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 72px)" }}>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6">
          <Reveal>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1.15, fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
            >
              Tools I trust.
            </h2>
            <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "380px" }}>
              เครื่องมือและเทคโนโลยีที่ผมใช้ในการพัฒนาเว็บแอปพลิเคชัน
            </p>
          </Reveal>

          <Reveal delay={150}>
          <GlassCard style={{ padding: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
