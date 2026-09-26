import { WorksGrid } from "@/components/works/WorksGrid";
import { Reveal } from "@/components/ui/Reveal";
import fx from "@/components/ui/effects.module.css";

export default function WorksPage() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "128px", background: "#0A0A0A", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        className={fx.orb}
        style={{ top: "40px", left: "-120px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)" }}
      />
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px", position: "relative" }}>
        <Reveal>
        <h1
          className="font-display"
          style={{ fontSize: "56px", lineHeight: "64px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "64px" }}
        >
          Work
        </h1>
        </Reveal>
        <WorksGrid />
      </div>
    </section>
  );
}
