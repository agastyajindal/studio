import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the HTML element type
  applyAnimation?: boolean; // Control animation application
}

export function SectionWrapper({
  children,
  className,
  as: Component = 'section',
  applyAnimation = true,
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      className={cn(
        'py-16 md:py-24',
        applyAnimation && 'animate-fade-in-up opacity-0', // Apply animation if true
        className
      )}
      // The 'animate-fade-in-up' utility defined in tailwind.config.ts already includes 'forwards',
      // so this explicit style was redundant.
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </Component>
  );
}
