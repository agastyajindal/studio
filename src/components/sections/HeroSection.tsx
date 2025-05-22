
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect, useCallback, useRef } from 'react';

export function HeroSection() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (parallaxBgRef.current) {
      window.requestAnimationFrame(() => {
        if (parallaxBgRef.current) { // Check ref again inside RAF
          parallaxBgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
        }
      });
    }
  }, []);

  useEffect(() => {
    // Initial call to set position.
    // It's called directly here, assuming the ref is available after the initial render.
    handleScroll(); 

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <SectionWrapper
      id="home"
      className="bg-transparent min-h-screen flex items-center !pt-24 md:!pt-32 relative overflow-hidden"
      applyAnimation={false}
    >
      {/* Parallax Background Image */}
      <div
        ref={parallaxBgRef}
        className="absolute inset-0 z-[-1]" // Removed transition-transform, duration-100, ease-out
        // Transform style is now set by JS via the ref
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract parallax background"
          fill
          sizes="100vw"
          className="opacity-20 dark:opacity-15 object-cover"
          data-ai-hint="geometric pattern"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 lg:gap-16 animate-fade-in-up opacity-0">
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
