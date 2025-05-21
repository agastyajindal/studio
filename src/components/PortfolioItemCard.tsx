import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioItem } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-56 w-full">
        <Image
          src={item.imageUrl}
          alt={item.altText}
          layout="fill"
          objectFit="cover"
          data-ai-hint={item.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{item.title}</CardTitle>
        <CardDescription className="text-sm h-16 overflow-hidden text-ellipsis">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {item.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {item.liveUrl && (
          <Button size="sm" asChild>
            <Link href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
