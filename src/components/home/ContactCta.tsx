import { GlassCard } from "@/components/ui/GlassCard";
import { LineLink } from "@/components/ui/LineLink";
import { Reveal } from "@/components/ui/Reveal";
import fx from "@/components/ui/effects.module.css";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section id="contact" style={{ paddingBottom: "clamp(80px, 12vw, 128px)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 72px)" }}>
        <Reveal>
        <GlassCard style={{ padding: "clamp(48px, 8vw, 80px) clamp(20px, 6vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div
            aria-hidden="true"
            className={fx.orb}
            style={{
              top: "-100px",
              left: "calc(50% - 250px)",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className={fx.orb}
            style={{
              bottom: "-160px",
              right: "-80px",
              width: "360px",
              height: "360px",
              background: "radial-gradient(circle, rgba(244,114,182,0.10) 0%, transparent 70%)",
              animationDelay: "-6s",
            }}
          />

          <div style={{ position: "relative" }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1.15, fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
            >
              Let&apos;s build something{" "}
              <br className="hidden sm:inline" />
              <span style={{ color: "#A78BFA" }}>worth remembering.</span>{" "}
              <span aria-hidden="true" className={fx.blink} style={{ color: "#C9BEFF" }}>✦</span>
            </h2>
            <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "400px", margin: "0 auto 48px" }}>
              I&apos;m selective about what I take on. If you have a hard problem and a high bar, let&apos;s talk.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <a
                href={`mailto:${profile.email}`}
                className={`font-display ${fx.lift}`}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  maxWidth: "100%",
                  padding: "16px clamp(24px, 5vw, 40px)",
                  borderRadius: "12px",
                  background: "#A78BFA",
                  color: "#0A0A0A",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                <span aria-hidden="true" className={fx.shine} />
                {profile.email}
              </a>
              <LineLink
                iconSize={24}
                className={`font-display ${fx.lift}`}
                style={{
                  padding: "12px 32px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#F5F5F5",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  gap: "12px",
                }}
              >
                Add on LINE
              </LineLink>
            </div>
          </div>
        </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
