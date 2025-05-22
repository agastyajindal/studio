
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { BlogPostCard } from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export function BlogSection() {
  const displayedPosts = blogPosts.slice(0, 3); // Show first 3 posts

  return (
    <SectionWrapper id="blog" className="bg-secondary/50" applyAnimation={false}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">From the Blog</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My latest articles and thoughts on software development and technology.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post, index) => (
           <div key={post.id} style={{ animationDelay: `${index * 150}ms`}} className="animate-fade-in-up opacity-0">
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
      {blogPosts.length > 3 && (
         <div className="mt-12 text-center">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="/blog">
              View All Posts <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
