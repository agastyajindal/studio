
"use client";

import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Connect With Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          You can find me on the following platforms. I'd love to connect!
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3 text-center">My Email</h3>
          <p className="text-muted-foreground flex items-center justify-center gap-3 mb-2 text-lg">
            <MailIcon className="h-5 w-5 text-primary" />
            your.email@example.com {/* Replace with your actual email */}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Social Profiles</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary h-12 w-12">
              <Link href="#" target="_blank" aria-label="GitHub">
                <GithubIcon className="h-7 w-7" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary h-12 w-12">
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <LinkedinIcon className="h-7 w-7" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-110 hover:border-primary h-12 w-12">
              <Link href="#" target="_blank" aria-label="Twitter">
                <TwitterIcon className="h-7 w-7" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
