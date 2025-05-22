
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
// import { BlogSection } from '@/components/sections/BlogSection'; // Statically imported before
// import { ProjectsSection } from '@/components/sections/ProjectsSection'; // Statically imported before
// import { ContactSection } from '@/components/sections/ContactSection'; // Statically imported before

const ProjectsSection = dynamic(() => 
  import('@/components/sections/ProjectsSection').then(mod => mod.ProjectsSection)
);
const BlogSection = dynamic(() => 
  import('@/components/sections/BlogSection').then(mod => mod.BlogSection)
);
const ContactSection = dynamic(() => 
  import('@/components/sections/ContactSection').then(mod => mod.ContactSection)
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
