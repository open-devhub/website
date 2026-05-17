import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
  dot?: boolean;
}

export default function Section({ children, className = '', id, grid = false, dot = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-4 md:px-6 ${grid ? 'grid-bg' : ''} ${dot ? 'dot-bg' : ''} ${className}`}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
