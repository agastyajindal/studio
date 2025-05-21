import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm">&copy; {currentYear} Zenith Studio. All rights reserved.</p>
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
