import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, MessageCircle, Clock } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { CONTACTS } from '../../data/contacts';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-section-gap">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Brand Section */}
        <motion.div className="mb-12 md:mb-0 text-center md:text-left" variants={fadeInUp}>
          <a href="#" className="font-headline-md text-headline-md text-on-surface block mb-4">
            {CONTENT.navbar.logo}
          </a>
          <p className="font-body-md text-body-md text-secondary flex items-center justify-center md:justify-start gap-2">
            <MapPin size={20} />
            {CONTENT.footer.location} <span className="mx-2 opacity-40">•</span> <Clock size={18} /> Seg a Sáb: 08h às 17h
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 mb-12 md:mb-0"
          variants={staggerContainer}
        >
          <motion.a
            href={CONTACTS.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-secondary-container hover:text-tertiary transition-colors duration-300 font-body-md text-body-md flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            variants={fadeInUp}
            whileHover={{ x: 4 }}
          >
            <Camera size={20} /> Instagram
          </motion.a>
          <motion.a
            href={CONTACTS.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-secondary-container hover:text-tertiary transition-colors duration-300 font-body-md text-body-md flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            variants={fadeInUp}
            whileHover={{ x: 4 }}
          >
            <MessageCircle size={20} />
            WhatsApp
          </motion.a>
          <motion.a
            href="#sobre"
            className="text-on-secondary-container hover:text-tertiary transition-colors duration-300 font-body-md text-body-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            variants={fadeInUp}
            whileHover={{ x: 4 }}
          >
            Sobre
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mt-16 pt-8 border-t border-outline-variant/10 text-center font-label-sm text-label-sm text-on-secondary-container max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        {CONTENT.footer.copyright}
      </motion.div>
    </footer>
  );
};

export default Footer;
