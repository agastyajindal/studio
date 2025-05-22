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
        'py-16 md:py-24 border-t border-[hsl(var(--border)_/_0.2)]', // Added subtle top border with 20% opacity
        applyAnimation && 'animate-fade-in-up opacity-0',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </Component>
  );
}
