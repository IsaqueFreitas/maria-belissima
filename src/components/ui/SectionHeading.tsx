import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  animated?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  animated = true,
}) => {
  const Component = animated ? motion.div : 'div';
  const variants = animated ? fadeInUp : undefined;

  return (
    <Component variants={variants} className={centered ? 'text-center' : ''}>
      <h2 className="font-bodoni text-[2.1rem] md:text-headline-lg text-on-surface mb-4 md:mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </Component>
  );
};

export default SectionHeading;
