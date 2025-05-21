import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  return (
    <SectionWrapper id="home" className="bg-secondary/50 min-h-screen flex items-center !pt-24 md:!pt-32">
      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hi, I&apos;m Agastya Jindal
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            A passionate Software Developer & UI/UX Enthusiast, dedicated to crafting beautiful, functional, and user-centric digital experiences. Welcome to my personal space where I share my work and thoughts.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#blog">View My Blog</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Avatar className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 ring-4 ring-primary/50 ring-offset-4 ring-offset-background shadow-2xl">
            <AvatarImage 
              src="https://placehold.co/400x400.png" 
              alt="Headshot of Agastya Jindal"
              data-ai-hint="professional portrait" 
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </SectionWrapper>
  );
}
