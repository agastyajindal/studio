import { portfolioItems } from '@/lib/data';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { PortfolioItemCard } from '@/components/PortfolioItemCard';

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Portfolio</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I&apos;ve worked on.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <div key={item.id} style={{ animationDelay: `${index * 150}ms`}} className="animate-fade-in-up opacity-0">
             <PortfolioItemCard item={item} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
