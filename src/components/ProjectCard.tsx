
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, GithubIcon, CalendarDaysIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-56 w-full">
        <Image
          src={project.imageUrl}
          alt={project.altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        {project.date && (
          <div className="flex items-center text-xs text-muted-foreground pt-1">
            <CalendarDaysIcon className="mr-1.5 h-4 w-4" />
            {project.date}
          </div>
        )}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm h-24 overflow-hidden text-ellipsis">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start gap-3">
        {project.projectUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              View Project
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
