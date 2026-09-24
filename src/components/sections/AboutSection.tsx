import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data/content';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../../lib/animations';

const AboutSection: React.FC = () => {
  const aboutImageUrl = '/rick-vieira.png';

  return (
    <section className="py-section-gap bg-secondary-fixed" id="sobre">
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-gutter items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="col-span-1 md:col-span-4 lg:col-span-5 relative"
            variants={slideInLeft}
          >
            <motion.div
              className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-none overflow-hidden relative z-10 border border-outline-variant/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={aboutImageUrl}
                alt="Rick Vieira - Especialista em Mechas e Cabelos Cacheados"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-fixed/40 rounded-full blur-2xl -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="col-span-1 md:col-span-4 lg:col-span-6 lg:col-start-7 flex flex-col pt-6 md:pt-0"
            variants={slideInRight}
          >
            <motion.h2
              className="font-headline-lg text-headline-lg text-surface-container-lowest mb-8 font-bodoni"
              variants={fadeInUp}
            >
              {CONTENT.about.title}
            </motion.h2>

            <motion.div
              className="w-16 h-[1px] bg-tertiary-fixed-dim mb-10"
              variants={fadeInUp}
            />

            {/* Paragraphs */}
            {CONTENT.about.paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                className="font-body-lg text-body-lg text-surface-bright mb-6 leading-relaxed"
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Quote */}
            <motion.div
              className="bg-surface-container-lowest p-8 rounded-none border border-outline-variant/10 relative overflow-hidden mt-4"
              variants={fadeInUp}
              whileHover={{ borderColor: 'rgba(229, 193, 146, 0.3)' }}
            >
              <span className="absolute -top-4 -left-4 text-[100px] text-surface-container-low opacity-40 rotate-180 font-bodoni text-3xl leading-none">
                &quot;
              </span>
              <p className="font-headline-md text-headline-md text-on-surface relative z-10 italic text-balance font-bodoni">
                {CONTENT.about.quote}
              </p>
              <p className="font-label-lg text-label-lg text-tertiary mt-6 tracking-widest uppercase">
                — {CONTENT.about.quoteAuthor}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
