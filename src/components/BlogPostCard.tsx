
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon, CalendarDaysIcon } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-56 w-full">
        <Image
          src={post.imageUrl}
          alt={post.altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={post.imageHint}
        />
      </div>
      <CardHeader>
        <Badge variant="outline" className="mb-2 w-fit">{post.category}</Badge>
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <CalendarDaysIcon className="mr-1.5 h-4 w-4" />
          {post.date}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm h-20 overflow-hidden text-ellipsis">{post.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 text-primary">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
