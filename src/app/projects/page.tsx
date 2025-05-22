
import { projectData } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function ProjectsPage() {
  return (
    <SectionWrapper className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">My Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Here's a collection of projects I've worked on.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={project.id} style={{ animationDelay: `${index * 100}ms`}} className="animate-fade-in-up opacity-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
