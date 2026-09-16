import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export function ContactCta() {
  return (
    <section id="contact" style={{ paddingBottom: "128px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px" }}>
        <GlassCard style={{ padding: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <h2
              className="font-display"
              style={{ fontSize: "48px", lineHeight: "56px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
            >
              Let&apos;s build something<br />
              <span style={{ color: "#A78BFA" }}>worth remembering.</span>
            </h2>
            <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "400px", margin: "0 auto 48px" }}>
              I&apos;m selective about what I take on. If you have a hard problem and a high bar, let&apos;s talk.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-display"
              style={{
                display: "inline-block",
                padding: "16px 40px",
                borderRadius: "12px",
                background: "#A78BFA",
                color: "#0A0A0A",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              {profile.email}
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
