
import Link from 'next/link';
import { projectData } from '@/lib/data';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export function ProjectsSection() {
  const displayedProjects = projectData.slice(0, 3); // Show first 3 projects

  return (
    <SectionWrapper id="projects" className="bg-card/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my recent work and personal projects.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <div key={project.id} style={{ animationDelay: `${index * 150}ms`}} className="animate-fade-in-up opacity-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {projectData.length > 3 && (
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="/projects">
              View All Projects <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
