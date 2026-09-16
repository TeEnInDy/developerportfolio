import { WorksGrid } from "@/components/works/WorksGrid";

export default function WorksPage() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "128px", background: "#0A0A0A", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px" }}>
        <h1
          className="font-display"
          style={{ fontSize: "56px", lineHeight: "64px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "64px" }}
        >
          Work
        </h1>
        <WorksGrid />
      </div>
    </section>
  );
}
