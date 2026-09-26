import { ProjectCard } from "@/components/works/ProjectCard";
import { projects } from "@/data/projects";

export function WorksGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} span={4} delay={(i % 3) * 120} />
      ))}
    </div>
  );
}
