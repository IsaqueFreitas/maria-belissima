import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { GALLERY_CTA, GALLERY_IMAGES } from '../../data/gallery';
import { CONTENT } from '../../data/content';
import { CONTACTS, getWhatsAppUrl } from '../../data/contacts';
import Lightbox from '../ui/Lightbox';

const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      const nextCard = gallery.querySelector<HTMLElement>('[data-gallery-card]');
      if (!nextCard) return;
      const cardWidth = nextCard.offsetWidth + 24;
      const atEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - cardWidth;
      gallery.scrollTo({ left: atEnd ? 0 : gallery.scrollLeft + cardWidth, behavior: 'smooth' });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="py-section-gap bg-primary-fixed" id="galeria">
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest mb-6 font-bodoni">{CONTENT.gallery.title}</h2>
            <p className="font-body-lg text-body-lg text-surface-bright">{CONTENT.gallery.subtitle}</p>
          </div>
          <a href={CONTACTS.instagram.link} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-surface-container-lowest font-label-lg text-label-lg hover:text-surface-bright border-b border-surface-container-lowest pb-1 mt-8 md:mt-0 uppercase tracking-wider">
            <Camera size={18} /> {CONTENT.gallery.instagram}
          </a>
        </div>

        <div ref={galleryRef} className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory gallery-scroll" tabIndex={0} aria-label="Transformacoes da galeria">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.article key={image.id} data-gallery-card className="w-[min(82vw,360px)] snap-start flex-shrink-0 bg-surface-container-low/90 border border-outline-variant/20 group overflow-hidden flex flex-col" whileHover={{ y: -4 }}>
              <button type="button" onClick={() => setSelectedIndex(index)} className="aspect-[4/5] overflow-hidden relative text-left">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-surface-container-lowest/90 text-tertiary font-label-sm text-[11px] uppercase tracking-widest px-3 py-1 border border-outline-variant/20">{image.tag}</span>
              </button>
              <div className="p-6 flex flex-col min-h-[220px]">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2 min-h-[52px]">{image.title}</h3>
                <p className="font-body-md text-[13px] text-on-surface-variant mb-4 leading-relaxed flex-1">{image.description}</p>
                <a href={getWhatsAppUrl(`Olá Rick! Adorei ${image.title} da galeria.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-tertiary font-label-sm text-[12px] uppercase tracking-wider group-hover:translate-x-1 duration-200">Agendar este resultado <ArrowRight size={15} /></a>
              </div>
            </motion.article>
          ))}
          <div className="w-[min(82vw,360px)] min-h-[440px] snap-start flex-shrink-0 bg-secondary-fixed border border-outline-variant/20 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-headline-md text-[28px] text-surface-container-lowest mb-4">{GALLERY_CTA.title}</h3>
            <p className="font-body-md text-surface-bright mb-6 text-sm">{GALLERY_CTA.description}</p>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-block bg-surface-container-lowest text-on-surface border border-outline-variant/20 font-label-lg text-label-sm px-6 py-3 hover:bg-tertiary hover:text-on-tertiary uppercase tracking-widest">Agendar Avaliacao</a>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href={CONTACTS.instagram.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-surface-container-lowest font-label-lg text-label-lg hover:text-surface-bright uppercase tracking-wider"><Camera size={18} /> {CONTENT.gallery.instagramMobile}</a>
        </div>
      </div>

      {selectedIndex !== null && <Lightbox isOpen image={GALLERY_IMAGES[selectedIndex].src} alt={GALLERY_IMAGES[selectedIndex].alt} onClose={() => setSelectedIndex(null)} onNext={() => setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length)} onPrev={() => setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)} />}
    </section>
  );
};

export default GallerySection;
