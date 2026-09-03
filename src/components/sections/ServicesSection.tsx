import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/services';
import { CONTENT } from '../../data/content';
import { getWhatsAppUrl } from '../../data/contacts';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-section-gap bg-surface-container" id="servicos">
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title={CONTENT.services.title}
            subtitle={CONTENT.services.subtitle}
            centered
            animated
          />
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button
            href={getWhatsAppUrl()}
            external
            variant="outline"
            size="lg"
          >
            {CONTENT.services.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
