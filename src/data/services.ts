import { LucideIcon, Scissors, Droplets, RotateCcw, Sparkles } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: 'dry-cut',
    icon: Scissors,
    title: 'Corte a Seco & Visagismo',
    description:
      'Análise facial e corte realizado no cabelo seco para respeitar o caimento natural, formato e grau de encolhimento dos cachos.',
  },
  {
    id: 'nutrition',
    icon: Droplets,
    title: 'Nutrição & Hidratação',
    description:
      'Tratamentos profundos com produtos premium focados em devolver lipídios, água e vitalidade para fios opacos ou ressecados.',
  },
  {
    id: 'transition',
    icon: RotateCcw,
    title: 'Transição Capilar',
    description:
      'Consultoria acolhedora e cortes estratégicos (Big Chop ou sutis) para quem deseja abandonar químicas e retornar ao natural.',
  },
  {
    id: 'finishing',
    icon: Sparkles,
    title: 'Finalização & Definição',
    description:
      'Técnicas de fitagem e finalização profissional para garantir cachos definidos, com volume na medida certa e sem frizz por dias.',
  },
];
