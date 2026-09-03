export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: 'row-1' | 'row-2' | 'col-1' | 'col-2';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi7wupGJ5jBl4zQDyyhKdNnDYpzn9aiquEaekq6WytV61C-ciP8152WvodHVWEKjxwlnlbmR4oN0j-dPMhWs7IU7SAYtL_QH7wMLnOtKVmKjIEm8RubmIy_cm7YRhd7dOwGq6TR9rlgSjBJapTHCj3IZ9Oxoop3_G48v6m8QId_souqOxVUeVbdtfYgp5_pdsHpTRcBJRtbOpJpYocwvd6DC5GjyNvsmiCabLCyLaqKhQWUhDePGPSFA',
    alt: 'Close up photography of perfectly defined, bouncy, and hydrated 3b curly hair in a rich dark brown color',
    span: 'row-2',
  },
  {
    id: 'gallery-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDuk6oBj0UhtDaRuI83pxBjxVQ2eNaAywSuOXp9wV42OcNJrhhzWLole4VTLZnZ1_FR5wN0hXtKJUTEO7nR4O7d4pJE81jMJYHO-QAt_1K01KjPLcLIF5g-edAuDcc8jFS0ktMoYnSFUjH5eJ_MBEd9bGl3mHTtft2n7fMdA2rjHqCCCKqk6Lq84dQXbsg-JH9wfTzQJMryIAqWs9NP5NCW0ttfIBgF_ZrLbb5TFVoBEc8Vor-RDIwA',
    alt: 'Profile view of a woman with a beautiful layered dry cut on 4a coily hair',
    span: 'col-1',
  },
  {
    id: 'gallery-3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKzK8784DyOcmO4WJWjZG6_-RxBcGD_hfrtM_8xpCprTU4tmPtc980mARNpEqkalv-Sw4uFvr_fulChYOQ1hyDYEowtrgg9O6iihmIeTkUCpl-DiaEDEwSYEY8zUamlbivJDdWA-5bXH-G0imbbxfb2TAycVCUGSQtA7Er6REnnM2cJpR8FFgiY8VaZB14LHhfQ82SqB3hgy7RBB6jO4xSI0RDEZ1d8DtGtAUzOyryABaqs2kpU1LwLA',
    alt: 'A macro shot of healthy, shiny wavy hair (type 2c) after a deep hydration treatment',
    span: 'col-1',
  },
];

export const GALLERY_CTA = {
  title: 'Seu Cabelo, Sua Arte',
  description: 'Agende sua avaliação presencial.',
  cta: 'Agendar Agora',
};
