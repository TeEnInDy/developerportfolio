import { ProjectCard } from "@/components/works/ProjectCard";
import { projects } from "@/data/projects";

export function WorksGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} span={4} delay={(i % 3) * 120} />
      ))}
    </div>
  );
}
