import { LucideIcon, Scissors, Droplets, Palette, Sparkles } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  detail: string;
  label: string;
}

export const SERVICES: Service[] = [
  {
    id: 'highlights',
    icon: Sparkles,
    title: 'Mechas',
    description:
      'Iluminação e tonalidade personalizadas para valorizar a textura, a forma e a vitalidade dos seus cabelos cacheados.',
    price: 'R$ 400 a R$ 450',
    detail: 'Duração aprox. 4 a 6 horas',
    label: 'Personalizado',
  },
  {
    id: 'treatment',
    icon: Droplets,
    title: 'Tratamento',
    description:
      'Nutrição e hidratação profunda para repor lipídios essenciais, devolver brilho e redefinir a elasticidade dos fios.',
    price: 'A partir de R$ 90',
    detail: 'Individual R$ 90 • Pacote (3x) R$ 250',
    label: 'Nutrição',
  },
  {
    id: 'cut',
    icon: Scissors,
    title: 'Corte',
    description:
      'Corte especializado a seco respeitando a curvatura, o volume natural e a arquitetura do seu rosto.',
    price: 'A partir de R$ 80',
    detail: 'Sem trat. R$ 80 • Com trat. R$ 150',
    label: 'Design',
  },
  {
    id: 'global',
    icon: Palette,
    title: 'Global',
    description:
      'Transformação completa de tonalidade e cobertura uniforme para renovar o visual com sofisticação, proteção e brilho intenso.',
    price: 'R$ 650',
    detail: 'Procedimento completo de cor',
    label: 'Exclusivo',
  },
];
