import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CalendarBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center gap-3 px-6 py-4 bg-tertiary/20 border border-tertiary/40 rounded-lg backdrop-blur-sm hover:border-tertiary/60 transition-all duration-300"
    >
      <Calendar size={20} className="text-tertiary" />
      <div>
        <p className="text-label-sm text-tertiary uppercase tracking-wider">Agende Agora</p>
        <p className="text-body-md text-on-surface font-semibold">Consulta Disponível</p>
      </div>
    </motion.div>
  );
};

export default CalendarBadge;
