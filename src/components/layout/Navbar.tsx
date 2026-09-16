import Link from "next/link";
import { profile } from "@/data/profile";

const LINKS = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          padding: "12px 24px",
          borderRadius: "999px",
          background: "rgba(10,10,10,0.85)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <Link
          href="/"
          className="font-display"
          style={{ fontSize: "15px", fontWeight: 700, color: "#F5F5F5", letterSpacing: "-0.02em" }}
        >
          {profile.initials}
        </Link>
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.12)" }} />
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display"
            style={{ fontSize: "14px", fontWeight: 500, color: "#A3A3A3", textDecoration: "none" }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.12)" }} />
        <a
          href={profile.github}
          className="font-display"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "13px", fontWeight: 600, color: "#A78BFA", textDecoration: "none" }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
