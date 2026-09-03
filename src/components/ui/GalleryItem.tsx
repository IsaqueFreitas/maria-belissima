import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '../../data/gallery';
import { fadeInUp } from '../../lib/animations';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const spanClasses = image.span ? `col-span-${image.span === 'col-2' ? '2' : '1'} row-span-${image.span === 'row-2' ? '2' : '1'}` : '';

  return (
    <motion.div
      className={`overflow-hidden group shadow-lg border border-outline-variant/10 cursor-pointer ${
        image.span === 'row-2' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
      }`}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </motion.div>
  );
};

export default GalleryItem;
