
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDaysIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | ZeroCore',
    };
  }

  return {
    title: `${post.title} | ZeroCore`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [
        {
          url: post.imageUrl,
          width: 600, // Provide actual dimensions if known
          height: 400,
          alt: post.altText,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), // Assuming date is parsable
      authors: ['Agastya Jindal'],
      tags: [post.category],
    },
  };
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Placeholder for full blog content generation.
  // In a real app, this would come from a CMS or Markdown parsing.
  const fullContentHtml = `
    <p class="lead">${post.summary}</p>
    <p>This is the beginning of the full blog post content. In a real application, this content would be fetched from a CMS or parsed from a Markdown file. For now, we're using the summary as a placeholder to illustrate the structure.</p>
    <p>Key topics covered in this post include the core concepts, practical applications, and potential challenges. We'll explore how ${post.title.toLowerCase()} can impact your workflow and project outcomes.</p>
    <h2 class="text-2xl font-semibold mt-6 mb-3">Exploring Deeper Insights</h2>
    <p>Let's delve into some more specific aspects. Consider the implications for scalability, maintainability, and user experience. Each of these areas deserves careful consideration when implementing solutions related to ${post.category}.</p>
    <p>${post.summary} (Repeated for more placeholder content). We aim to provide a comprehensive overview that is both informative and engaging.</p>
    <h3 class="text-xl font-semibold mt-4 mb-2">Sub-topic Example</h3>
    <p>Further details regarding a sub-topic would go here. This section might include code snippets, diagrams, or case studies to illustrate the points being made. The goal is to provide actionable insights that readers can apply to their own work.</p>
    <p>Thank you for reading! We hope you found this article on ${post.title} helpful. Stay tuned for more content on ${post.category} and related technologies.</p>
  `;


  return (
    <SectionWrapper className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-primary">
            <Link href="/blog">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
        </Button>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8 text-center border-b pb-6 border-border/50">
            <Badge variant="outline" className="mb-2 text-sm py-1 px-3 rounded-md">{post.category}</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mt-2">{post.title}</h1>
            <div className="mt-4 flex items-center justify-center text-base text-muted-foreground">
              <CalendarDaysIcon className="mr-2 h-5 w-5" />
              <span>{post.date}</span>
            </div>
          </div>
          
          {post.imageUrl && (
            <div className="relative my-8 aspect-video w-full"> {/* Use aspect-video for responsive ratio */}
              <Image
                src={post.imageUrl}
                alt={post.altText}
                fill
                sizes="(max-width: 768px) 100vw, 768px" // Adjusted sizes for max-w-3xl container
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={post.imageHint}
                priority // Added priority for LCP
              />
            </div>
          )}
          
          <div dangerouslySetInnerHTML={{ __html: fullContentHtml }} />
        </article>
      </div>
    </SectionWrapper>
  );
}
