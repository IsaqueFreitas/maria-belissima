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
      className="bg-surface-container-low/90 p-6 md:p-8 border border-outline-variant/30 hover:border-tertiary/60 transition-colors duration-300 group flex flex-col h-full min-h-[430px] relative"
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <motion.div
        className="w-12 h-12 bg-surface rounded-none flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={24} />
      </motion.div>

      <div className="flex flex-col items-start gap-3 mb-6 min-h-[92px]">
        <h3 className="font-headline-md text-[26px] text-on-surface leading-tight font-bodoni">
          {service.title}
        </h3>
        <span className="text-[11px] font-label-sm uppercase tracking-widest text-tertiary bg-surface px-3 py-1 border border-outline-variant/20 whitespace-nowrap">
          {service.label}
        </span>
      </div>

      <div className="mb-4 pb-3 border-b border-outline-variant/20">
        <span className="font-label-lg text-tertiary text-[15px] font-semibold tracking-wider block">
          {service.price}
        </span>
        <span className="font-label-sm text-[12px] text-on-surface-variant block mt-1">
          {service.detail}
        </span>
      </div>

      {/* Description */}
      <p className="font-body-md text-[14px] text-on-surface-variant flex-grow min-h-[112px] mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* CTA Link */}
      <motion.a
        href="https://wa.me/5571991403201"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between w-full pt-4 border-t border-outline-variant/10 font-label-lg text-label-lg text-tertiary hover:text-tertiary-fixed-dim transition-colors mt-auto uppercase tracking-wider"
        whileHover={{ x: 4 }}
      >
        Agendar {service.title}
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
