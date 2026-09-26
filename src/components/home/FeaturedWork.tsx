import { ProjectCard } from "@/components/works/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug).slice(0, 2);

  return (
    <section id="work" style={{ paddingBottom: "128px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 72px" }}>
        <Reveal style={{ marginBottom: "64px" }}>
          <h2
            className="font-display"
            style={{ fontSize: "48px", lineHeight: "56px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-0.03em", marginBottom: "16px" }}
          >
            Selected work
          </h2>
          <p className="font-body" style={{ fontSize: "16px", lineHeight: "24px", color: "#A3A3A3", maxWidth: "480px" }}>
            โปรเจกต์เด่นที่สะท้อนทักษะและวิธีการทำงานของผม
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          <ProjectCard project={featured} span={8} rowSpan={2} />
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} span={4} delay={(i + 1) * 120} />
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
