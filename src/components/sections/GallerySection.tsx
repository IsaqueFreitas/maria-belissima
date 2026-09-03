import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES, GALLERY_CTA } from '../../data/gallery';
import { CONTENT } from '../../data/content';
import { CONTACTS } from '../../data/contacts';
import GalleryItem from '../ui/GalleryItem';
import Lightbox from '../ui/Lightbox';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section className="py-section-gap bg-primary-fixed" id="galeria">
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="max-w-xl" variants={fadeInUp}>
            <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest mb-6 font-bodoni">
              {CONTENT.gallery.title}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-bright">
              {CONTENT.gallery.subtitle}
            </p>
          </motion.div>

          <motion.a
            href={CONTACTS.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-surface-container-lowest font-label-lg text-label-lg hover:text-surface-bright transition-colors border-b border-surface-container-lowest pb-1 mt-8 md:mt-0 uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            variants={fadeInUp}
            whileHover={{ x: 4 }}
          >
            📸 {CONTENT.gallery.instagram}
          </motion.a>
        </motion.div>

        {/* Bento Grid Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[350px] mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => setSelectedIndex(index)}
            />
          ))}

          {/* CTA Card */}
          <motion.div
            className="col-span-2 md:col-span-2 row-span-1 overflow-hidden bg-secondary-fixed flex items-center justify-center p-12 relative border border-outline-variant/10"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center z-10">
              <h3 className="font-headline-md text-[32px] text-surface-container-lowest mb-4 font-bodoni">
                {GALLERY_CTA.title}
              </h3>
              <p className="font-body-md text-surface-bright mb-8">{GALLERY_CTA.description}</p>
              <Button variant="outline" href="https://wa.me/5571991403201" external>
                {GALLERY_CTA.cta}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Instagram Link */}
        <motion.div className="text-center md:hidden" variants={fadeInUp}>
          <a
            href={CONTACTS.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-surface-container-lowest font-label-lg text-label-lg hover:text-surface-bright transition-colors uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
          >
            📸 {CONTENT.gallery.instagramMobile}
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          isOpen={selectedIndex !== null}
          image={GALLERY_IMAGES[selectedIndex].src}
          alt={GALLERY_IMAGES[selectedIndex].alt}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default GallerySection;
