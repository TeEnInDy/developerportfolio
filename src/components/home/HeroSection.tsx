import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import fx from "@/components/ui/effects.module.css";

export function HeroSection() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "128px", overflowX: "clip" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px", position: "relative" }}>
        <div
          aria-hidden="true"
          className={fx.orb}
          style={{
            top: "-80px",
            left: "calc(50% - 300px)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className={fx.orb}
          style={{
            top: "120px",
            left: "8%",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
            animationDelay: "-6s",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(167,139,250,0.10)",
                border: "1px solid rgba(167,139,250,0.25)",
              }}
            >
              <div className={fx.pulse} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399" }} />
              <span className="font-display" style={{ fontSize: "13px", color: "#A78BFA", fontWeight: 500, letterSpacing: "0.05em" }}>
                {profile.availability}
              </span>
            </div>
          </div>
          </Reveal>

          <Reveal delay={120}>
          <h1
            className="font-display"
            style={{
              fontSize: "72px",
              lineHeight: "80px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              marginBottom: "24px",
              color: "#F5F5F5",
            }}
          >
            {profile.tagline}
          </h1>

          <p
            className="font-body"
            style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "520px", margin: "0 auto 48px" }}
          >
            {profile.summary}
          </p>
          </Reveal>

          <Reveal delay={240}>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/works"
              className={`font-display ${fx.lift}`}
              style={{
                position: "relative",
                overflow: "hidden",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "#A78BFA",
                color: "#0A0A0A",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              <span aria-hidden="true" className={fx.shine} />
              View my work
            </a>
            <a
              href="/contact"
              className={`font-display ${fx.lift}`}
              style={{
                padding: "14px 32px",
                borderRadius: "12px",
                background: "transparent",
                color: "#F5F5F5",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                letterSpacing: "-0.01em",
              }}
            >
              Get in touch
            </a>
          </div>
          </Reveal>

          <div
            aria-hidden="true"
            className={fx.float}
            style={{ position: "absolute", right: "-120px", top: "60px", width: "220px" }}
          >
            <GlassCard style={{ padding: "20px" }}>
              <div>
                <div className="font-display" style={{ fontSize: "12px", color: "#F5F5F5", fontWeight: 600 }}>Performance</div>
                <div className="font-body" style={{ fontSize: "11px", color: "#A3A3A3" }}>Core Web Vitals</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
