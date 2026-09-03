import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: string;
  alt: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, image, alt, onClose, onNext, onPrev }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-tertiary transition-colors z-50"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Fechar"
            >
              <X size={32} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center px-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <motion.img
                src={image}
                alt={alt}
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Navigation Buttons */}
              {onPrev && (
                <motion.button
                  className="absolute left-4 text-white hover:text-tertiary transition-colors"
                  onClick={onPrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={40} />
                </motion.button>
              )}

              {onNext && (
                <motion.button
                  className="absolute right-4 text-white hover:text-tertiary transition-colors"
                  onClick={onNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Próxima"
                >
                  <ChevronRight size={40} />
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
