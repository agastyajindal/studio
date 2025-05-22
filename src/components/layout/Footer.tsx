
"use client";

import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initialize with current year

  useEffect(() => {
    // Ensure the client-side value is up-to-date after hydration
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm">&copy; {currentYear} ZeroCore. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
            <TwitterIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
