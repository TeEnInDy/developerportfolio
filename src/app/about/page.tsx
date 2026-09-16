import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "128px", background: "#0A0A0A", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <h1
          className="font-display"
          style={{ fontSize: "56px", lineHeight: "64px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "32px" }}
        >
          About
        </h1>
        <p className="font-body" style={{ fontSize: "18px", lineHeight: "28px", color: "#A3A3A3", marginBottom: "16px" }}>
          {profile.summary}
        </p>
        <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#555" }}>
          {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  );
}
