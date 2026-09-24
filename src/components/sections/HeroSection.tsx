import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { getWhatsAppUrl } from '../../data/contacts';
import Button from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const HeroSection: React.FC = () => {
  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBrv7ucluHvpgwc65vld76akYnASzMZkt3p0edVVp3X7YrQiurNuD_qYvBRNPZxSeFt0bkKYrbEei0eXRko3RIYKXTBKna1THBJZOKB_T7NOUuUrEs0uNcQqAOXwYw-RfUo-z1i-Um7aQ6mTN9L-kiN2A3ElMouXyCLU8zn327j0f8APajtSLb4esqAU9bCdqDDGTz34zLshIn1OhbKket5NEg5sRt-R68TCZ2rKeIVr4M4zC3aNKsGOw';

  return (
    <section className="relative min-h-[680px] lg:min-h-[90vh] flex items-center overflow-hidden bg-background py-28 md:py-36 lg:py-section-gap">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Cachos definidos no estúdio Maria Belíssima"
          className="w-full h-full object-cover object-[58%_center] opacity-40 mix-blend-overlay md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-gutter"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
          className="col-span-4 md:col-span-6 lg:col-span-7 flex flex-col justify-center max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6 self-start">
            <span className="inline-flex items-center rounded-none border border-outline-variant/30 bg-surface-container-low/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-on-surface backdrop-blur-sm">
              {CONTENT.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight text-on-surface mb-8 text-balance font-bodoni"
          >
            Especialista em Valorizar a Beleza{' '}
            <span className="italic text-tertiary">{CONTENT.hero.naturalEmphasis}</span> dos Seus
            Cachos
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl leading-relaxed"
          >
            {CONTENT.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <Button
              href={getWhatsAppUrl()}
              external
              variant="primary"
              size="lg"
              className="flex items-center gap-3 w-full sm:w-auto whitespace-nowrap"
            >
              <Calendar size={18} className="text-on-tertiary" />
              {CONTENT.hero.primaryCta}
            </Button>
            <Button
              href="#galeria"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {CONTENT.hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
