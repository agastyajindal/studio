
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Blog | ZeroCore',
  description: 'Articles and thoughts by Agastya Jindal.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-16">{/* pt-16 for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
