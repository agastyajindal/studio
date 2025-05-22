
import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/BlogPostCard';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function BlogPage() {
  return (
    <SectionWrapper className="py-12 md:py-16" applyAnimation={false}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to my blog. Here are my latest articles and thoughts.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
           <div key={post.id} style={{ animationDelay: `${index * 100}ms`}} className="animate-fade-in-up opacity-0">
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
