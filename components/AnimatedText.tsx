'use client';

import { motion } from 'framer-motion';
import { wordReveal } from '@/lib/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export default function AnimatedText({ text, className = '', as = 'p', delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');
  const Tag = as;

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i + delay * 10}
            variants={wordReveal}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
