import React from 'react';
import { motion } from 'framer-motion';
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}
export function SectionReveal({
  children,
  className,
  delay = 0,
  as = 'div'
}: SectionRevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y: 28
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}>
      
      {children}
    </MotionTag>);

}