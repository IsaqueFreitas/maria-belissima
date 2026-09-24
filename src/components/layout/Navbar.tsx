import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { getWhatsAppUrl } from '../../data/contacts';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = scrolled || mobileOpen ? 'bg-background/95' : 'bg-background/80';
  const borderColor = scrolled || mobileOpen ? 'border-outline-variant/20' : 'border-outline-variant/10';

  return (
    <>
      <nav
        className={`${navBg} backdrop-blur-xl fixed top-0 w-full z-50 border-b ${borderColor} shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6 py-4 md:py-5">
            {/* Logo */}
            <a
              href="#"
              className="brand-logo justify-self-start text-[1.35rem] sm:text-[1.8rem] md:text-[2.05rem] leading-none text-on-surface hover:text-tertiary transition-colors duration-300 whitespace-nowrap min-w-0"
            >
              {CONTENT.navbar.logo}
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-6 xl:gap-10">
                {CONTENT.navbar.links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-label-lg text-label-lg relative group whitespace-nowrap"
                    whileHover="hover"
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-tertiary origin-left"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex justify-self-end">
              <Button
                href={getWhatsAppUrl()}
                external
                variant="outline"
                size="md"
                className="whitespace-nowrap min-w-[120px]"
              >
                {CONTENT.navbar.cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden justify-self-end text-tertiary hover:opacity-80 transition-opacity p-2"
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[88px] left-0 right-0 bg-background/98 backdrop-blur-md border-b border-outline-variant/20 z-40 md:hidden"
          >
            <div className="flex flex-col px-margin-mobile py-8 space-y-6">
              {CONTENT.navbar.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-on-surface font-label-lg text-label-lg hover:text-tertiary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                href={getWhatsAppUrl()}
                external
                variant="primary"
                size="md"
                className="w-full"
              >
                {CONTENT.navbar.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
