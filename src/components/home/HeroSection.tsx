import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "128px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
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
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399", boxShadow: "0 0 8px #34D399" }} />
              <span className="font-display" style={{ fontSize: "13px", color: "#A78BFA", fontWeight: 500, letterSpacing: "0.05em" }}>
                {profile.availability}
              </span>
            </div>
          </div>

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

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/works"
              className="font-display"
              style={{
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
              View my work
            </a>
            <a
              href="/contact"
              className="font-display"
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

          <div
            aria-hidden="true"
            style={{ position: "absolute", right: "-120px", top: "60px", width: "220px", animation: "float 6s ease-in-out infinite" }}
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
