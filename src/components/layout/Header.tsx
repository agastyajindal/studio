
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

// Custom SVG Logo Component
const SiteLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="186"
    height="44"
    viewBox="0 0 186 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="22" cy="22" r="21.5" stroke="currentColor" />
    <circle cx="22" cy="22" r="6" fill="currentColor" />
    <path
      d="M52.6797 31V13.63H60.0797C61.5063 13.63 62.7123 13.8833 63.6977 14.39C64.6923 14.887 65.4423 15.61 65.9477 16.558C66.4623 17.496 66.7197 18.627 66.7197 19.951C66.7197 21.2937 66.4623 22.43 65.9477 23.36C65.4423 24.2907 64.6923 25.0003 63.6977 25.489C62.7123 25.9683 61.5063 26.208 60.0797 26.208H56.0797V31H52.6797Z"
      fill="currentColor"
    />
    <path
      d="M56.0797 23.11H60.0797C61.033 23.11 61.797 22.891 62.3717 22.453C62.9463 22.0053 63.233 21.3597 63.2317 20.516C63.233 19.6723 62.9463 19.033 62.3717 18.598C61.797 18.1533 61.033 17.9317 60.0797 17.933H56.0797V23.11Z"
      fill="currentColor"
    />
    <path
      d="M70.6797 31V13.63H74.0797V27.33H82.8797V31H70.6797Z"
      fill="currentColor"
    />
    <path
      d="M87.2031 31V13.63H90.6031V27.33H99.4031V31H87.2031Z"
      fill="currentColor"
    />
    <path
      d="M114.971 13.63V16.92H107.891V20.25H113.691V23.54H107.891V31H104.491V13.63H114.971Z"
      fill="currentColor"
    />
    <path
      d="M122.336 31.27C121.144 31.27 120.068 31.0077 119.108 30.483C118.157 29.9583 117.414 29.2223 116.878 28.275C116.342 27.3277 116.074 26.2303 116.074 24.983V19.64C116.074 18.3833 116.344 17.2813 116.884 16.334C117.424 15.3773 118.167 14.6397 119.114 14.121C120.061 13.5937 121.144 13.33 122.364 13.33C123.586 13.33 124.671 13.5937 125.618 14.121C126.565 14.6397 127.306 15.3773 127.844 16.334C128.381 17.2813 128.65 18.3833 128.65 19.64V24.983C128.65 26.2397 128.38 27.337 127.84 28.275C127.3 29.2223 126.559 29.9583 125.618 30.483C124.676 31.0077 123.594 31.27 122.371 31.27H122.336Z"
      fill="currentColor"
    />
    <path
      d="M122.364 28.06C123.227 28.06 123.94 27.8077 124.504 27.303C125.077 26.7983 125.368 26.0217 125.377 24.973V19.613C125.368 18.565 125.077 17.7923 124.504 17.295C123.94 16.7883 123.227 16.535 122.364 16.535C121.502 16.535 120.789 16.7883 120.224 17.295C119.66 17.7923 119.37 18.565 119.354 19.613V24.973C119.37 26.0217 119.66 26.7983 120.224 27.303C120.789 27.8077 121.502 28.06 122.364 28.06Z"
      fill="currentColor"
    />
    <path
      d="M132.228 31V13.63H135.628V31H132.228Z"
      fill="currentColor"
    />
    <path
      d="M144.303 31.27C143.111 31.27 142.035 31.0077 141.075 30.483C140.124 29.9583 139.381 29.2223 138.845 28.275C138.309 27.3277 138.041 26.2303 138.041 24.983V19.64C138.041 18.3833 138.311 17.2813 138.851 16.334C139.391 15.3773 140.134 14.6397 141.081 14.121C142.028 13.5937 143.111 13.33 144.331 13.33C145.553 13.33 146.638 13.5937 147.585 14.121C148.532 14.6397 149.273 15.3773 149.811 16.334C150.348 17.2813 150.617 18.3833 150.617 19.64V24.983C150.617 26.2397 150.347 27.337 149.807 28.275C149.267 29.2223 148.526 29.9583 147.585 30.483C146.643 31.0077 145.561 31.27 144.338 31.27H144.303Z"
      fill="currentColor"
    />
    <path
      d="M144.331 28.06C145.194 28.06 145.907 27.8077 146.471 27.303C147.044 26.7983 147.335 26.0217 147.344 24.973V19.613C147.335 18.565 147.044 17.7923 146.471 17.295C145.907 16.7883 145.194 16.535 144.331 16.535C143.469 16.535 142.756 16.7883 142.191 17.295C141.627 17.7923 141.337 18.565 141.321 19.613V24.973C141.337 26.0217 141.627 26.7983 142.191 27.303C142.756 27.8077 143.469 28.06 144.331 28.06Z"
      fill="currentColor"
    />
  </svg>
);


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <SiteLogo className="h-7 text-primary" />
          <span className="text-xl font-semibold text-foreground">ZeroCore</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-6">
              <Link href="#home" className="flex items-center gap-2 mb-4" prefetch={false} onClick={() => setMobileMenuOpen(false)}>
                <SiteLogo className="h-7 text-primary" />
                <span className="text-xl font-semibold text-foreground">ZeroCore</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
