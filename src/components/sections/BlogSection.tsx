import { blogPosts } from '@/lib/data';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { BlogPostCard } from '@/components/BlogPostCard';

export function BlogSection() {
  return (
    <SectionWrapper id="blog" className="bg-secondary/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">From the Blog</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My latest articles and thoughts on software development and technology.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
           <div key={post.id} style={{ animationDelay: `${index * 150}ms`}} className="animate-fade-in-up opacity-0">
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
