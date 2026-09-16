import { ProjectCard } from "@/components/works/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug).slice(0, 2);

  return (
    <section id="work" style={{ paddingBottom: "128px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px" }}>
        <div style={{ marginBottom: "64px" }}>
          <h2
            className="font-display"
            style={{ fontSize: "48px", lineHeight: "56px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
          >
            Selected work
          </h2>
          <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "480px" }}>
            A few projects worth a closer look.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
          <ProjectCard project={featured} span={8} rowSpan={2} />
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} span={4} />
          ))}
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <a href="/works" className="font-display" style={{ fontSize: "14px", fontWeight: 600, color: "#A78BFA", textDecoration: "none" }}>
            See all work →
          </a>
        </div>
      </div>
    </section>
  );
}
