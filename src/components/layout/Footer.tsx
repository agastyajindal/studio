
"use client";

import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="footer" className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* About Me Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">About Me</h3>
            <p className="text-sm leading-relaxed">
              A brief introduction about yourself or your brand. This section can be updated with more personal details, highlighting your skills, mission, or journey. Keep it concise and engaging!
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Connect With Me</h3>
            <div className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
              <MailIcon className="h-5 w-5" />
              <a href="mailto:your.email@example.com">your.email@example.com</a> {/* Replace with your actual email */}
            </div>
            <div className="flex space-x-4 pt-2">
              <Link href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          {/* Placeholder for potential third column or keep it for spacing */}
          <div className="space-y-3 md:text-left">
             {/* You can add quick links, a small site map, or leave this for visual balance */}
             <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
             <ul className="space-y-1 text-sm">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
             </ul>
          </div>
        </div>

        <div className="text-center text-sm border-t border-border/50 pt-8">
          <p>&copy; {currentYear} ZeroCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
