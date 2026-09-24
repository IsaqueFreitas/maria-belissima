import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Camila Vasconcelos',
    time: 'Avaliado ha 2 dias',
    service: 'Cliente verificada • Mechas & Tratamento',
    quote:
      'Fazer mechas no cabelo crespo sempre foi meu maior receio por medo de perder a definicao dos cachos. O Rick foi impecavel: preservou 100% da textura, o cabelo ficou sedoso e o tom de mel ficou simplesmente perfeito!',
  },
  {
    name: 'Mariana Sampaio',
    time: 'Avaliado ha 4 dias',
    service: 'Cliente verificada • Mechas & Definicao',
    quote:
      'O melhor profissional de cachos de Salvador! O Rick tem uma sensibilidade e tecnica fora da curva no Maria Belissima. Meus cachos nunca tiveram tanto brilho e balanco. Vale cada minuto!',
  },
  {
    name: 'Beatriz Medeiros',
    time: 'Avaliado ha 1 semana',
    service: 'Cliente verificada • Corte Especializado & Nutricao',
    quote:
      'O corte a seco mudou completamente o caimento dos meus cachos. Tirou aquele peso e deu um volume maravilhoso e harmonico. Atendimento nota mil!',
  },
  {
    name: 'Juliana Prado',
    time: 'Avaliado ha 2 semanas',
    service: 'Cliente verificada • Coloracao Global & Tratamento',
    quote:
      'Sai do salao realizada! A atencao aos detalhes e o cuidado com a saude dos fios antes e durante a quimica mostram a maestria dos 10 anos de experiencia do Rick.',
  },
];

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const testimonial = TESTIMONIALS[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-section-gap bg-surface relative overflow-hidden border-t border-outline-variant/15" id="depoimentos">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-tertiary">Avaliacoes reais • Google & Instagram</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight text-balance">
              A Experiencia de Quem Ja Transformou os Cachos
            </h2>
          </div>
          <div className="bg-surface-container-low/90 border border-outline-variant/30 p-6 flex items-center gap-5 self-start md:self-auto">
            <div className="text-center border-r border-outline-variant/20 pr-5">
              <span className="font-headline-md text-[38px] leading-none text-tertiary font-bold block">5.0</span>
              <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Excelente</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-tertiary mb-1">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
              </div>
              <p className="font-body-md text-[13px] text-on-surface-variant font-medium">Mais de 180 avaliacoes 5 estrelas verificadas</p>
            </div>
          </div>
        </div>

        <motion.article
          key={testimonial.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface-container-low/90 border border-outline-variant/30 p-8 md:p-10 relative max-w-3xl"
        >
          <Quote className="absolute top-6 right-6 text-outline-variant/20" size={48} fill="currentColor" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-tertiary">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
            </div>
            <span className="font-label-sm text-[11px] text-on-surface-variant/80">{testimonial.time}</span>
          </div>
          <p className="font-body-md text-[15px] text-on-surface leading-relaxed mb-8 italic">“{testimonial.quote}”</p>
          <div className="pt-6 border-t border-outline-variant/20 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-surface-container-lowest font-headline-md">{testimonial.name.charAt(0)}</div>
            <div>
              <h3 className="font-headline-md text-[18px] text-on-surface font-normal leading-tight">{testimonial.name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <BadgeCheck size={14} className="text-tertiary" />
                <p className="font-label-sm text-[11px] text-tertiary uppercase tracking-wider">{testimonial.service}</p>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-outline-variant/15">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button key={item.name} type="button" aria-label={`Slide ${index + 1}`} onClick={() => setActive(index)} className={`${index === active ? 'w-8 bg-tertiary' : 'w-2 bg-outline-variant/40'} h-1.5 transition-all duration-300`} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Anterior" onClick={() => move(-1)} className="w-10 h-10 border border-outline-variant/40 flex items-center justify-center text-on-surface hover:border-tertiary hover:text-tertiary"><ChevronLeft size={20} /></button>
            <button type="button" aria-label="Proximo" onClick={() => move(1)} className="w-10 h-10 border border-outline-variant/40 flex items-center justify-center text-on-surface hover:border-tertiary hover:text-tertiary"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
