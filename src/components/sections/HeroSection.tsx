
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    // Ensure this only runs on the client
    if (typeof window !== "undefined") {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);
      // Initial call to set position if already scrolled
      handleScroll(); 
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <SectionWrapper 
      id="home" 
      className="bg-transparent min-h-screen flex items-center !pt-24 md:!pt-32 relative overflow-hidden"
      applyAnimation={false} // Disable default fade-in for this section to let parallax be the main focus
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-[-1] transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`, // Adjust 0.4 for more/less parallax
        }}
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract parallax background"
          layout="fill"
          objectFit="cover"
          className="opacity-20 dark:opacity-15" // Subtle opacity
          data-ai-hint="abstract texture"
          priority // Important for LCP
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 lg:gap-16 animate-fade-in-up opacity-0" style={{animationFillMode: 'forwards'}}>
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
            {/* The "Get In Touch" button was previously here */}
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
