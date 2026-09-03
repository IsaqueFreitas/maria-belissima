import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../data/services';
import { fadeInUp } from '../../lib/animations';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="bg-surface-container-low p-10 border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300 group flex flex-col h-full relative"
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <motion.div
        className="w-14 h-14 bg-surface rounded-none flex items-center justify-center mb-8 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={24} />
      </motion.div>

      {/* Title */}
      <h3 className="font-headline-md text-[28px] text-on-surface mb-4 leading-tight font-bodoni">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
        {service.description}
      </p>

      {/* CTA Link */}
      <motion.a
        href="#"
        className="inline-flex items-center gap-2 font-label-lg text-label-lg text-tertiary hover:text-tertiary-fixed-dim transition-colors mt-auto uppercase tracking-wider"
        whileHover={{ x: 4 }}
      >
        Saiba mais
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

export default ServiceCard;
