import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "32px clamp(20px, 5vw, 72px)",
        maxWidth: "1440px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 24px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className="font-display" style={{ fontSize: "13px", color: "#555", fontWeight: 500 }}>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="font-body" style={{ fontSize: "13px", color: "#555" }}>
        {profile.location}
      </span>
    </footer>
  );
}
