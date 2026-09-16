import { ProjectCard } from "@/components/works/ProjectCard";
import { projects } from "@/data/projects";

export function WorksGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} span={6} />
      ))}
    </div>
  );
}
