export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  tag: string;
  span?: 'row-1' | 'row-2' | 'col-1' | 'col-2';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi7wupGJ5jBl4zQDyyhKdNnDYpzn9aiquEaekq6WytV61C-ciP8152WvodHVWEKjxwlnlbmR4oN0j-dPMhWs7IU7SAYtL_QH7wMLnOtKVmKjIEm8RubmIy_cm7YRhd7dOwGq6TR9rlgSjBJapTHCj3IZ9Oxoop3_G48v6m8QId_souqOxVUeVbdtfYgp5_pdsHpTRcBJRtbOpJpYocwvd6DC5GjyNvsmiCabLCyLaqKhQWUhDePGPSFA',
    alt: 'Mechas douradas e definicao de cachos',
    title: 'Mechas & Definicao Radiante',
    description: 'Harmonizacao de tons luminosos mantendo a densidade e a curvatura intactas.',
    tag: 'Loiro Dourado',
  },
  {
    id: 'gallery-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDuk6oBj0UhtDaRuI83pxBjxVQ2eNaAywSuOXp9wV42OcNJrhhzWLole4VTLZnZ1_FR5wN0hXtKJUTEO7nR4O7d4pJE81jMJYHO-QAt_1K01KjPLcLIF5g-edAuDcc8jFS0ktMoYnSFUjH5eJ_MBEd9bGl3mHTtft2n7fMdA2rjHqCCCKqk6Lq84dQXbsg-JH9wfTzQJMryIAqWs9NP5NCW0ttfIBgF_ZrLbb5TFVoBEc8Vor-RDIwA',
    alt: 'Iluminacao e balayage em cachos naturais',
    title: 'Morena Iluminada Natural',
    description: 'Contrastes sutis de mel e avela que destacam a arquitetura dos caracois.',
    tag: 'Iluminacao Suave',
  },
  {
    id: 'gallery-3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKzK8784DyOcmO4WJWjZG6_-RxBcGD_hfrtM_8xpCprTU4tmPtc980mARNpEqkalv-Sw4uFvr_fulChYOQ1hyDYEowtrgg9O6iihmIeTkUCpl-DiaEDEwSYEY8zUamlbivJDdWA-5bXH-G0imbbxfb2TAycVCUGSQtA7Er6REnnM2cJpR8FFgiY8VaZB14LHhfQ82SqB3hgy7RBB6jO4xSI0RDEZ1d8DtGtAUzOyryABaqs2kpU1LwLA',
    alt: 'Transformacao real antes e depois',
    title: 'Restauracao & Transicao',
    description: 'Devolucao total de curvatura, definicao e brilho com tratamento intensivo.',
    tag: 'Antes & Depois Real',
  },
  {
    id: 'gallery-4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYDmRX9L9tXVF0w6wVLA4URf3gjd6svkkTV3dapo_8a68cKcNr_h5vKAztw4n4TdmLBir-qFtH2f7NE-nyT15zHdWfGQTrrBvTrC7N1CHrsB1bXbBxGGneTudxy-w9flvmm9z9bwBKi1mvxoqx-zsI-pwq3xB-N1cFNwM0TInSMthV6zcVyx0a7C48aJe0GyMdRswEj9ldHakLKch4EhxwieTRcvDJsdgIWAhJCQKpugy3jftq1EHbB1k8kW4j58kFlVU',
    alt: 'Volume e mechas douradas tridimensionais',
    title: 'Mechas Tridimensionais',
    description: 'Efeito 3D para realcar camadas e criar um formato imponente e saudavel.',
    tag: 'Volume & Luz',
  },
  {
    id: 'gallery-5',
    src: 'https://lh3.googleusercontent.com/aida/AEtjO1XaUjTxQdPezphNXRHkAiVdHXnq93TDVvyiflvlTumWjxotIvCAcEWjtHFK4seEr4eMixEO47BkVgAeiyxEEuvLl9Y-yLc6ljU2QDFzMd88lNmKubAtAWxPxyiuxoPOE1Q8oJ0NjOD5lrDnx3zn3OTEW6N7agCN7iJ2AG6lpnutm1eCgEf8SaDdxGdaH6GAtPkkaZki9pe_THKmrp2UmjcI8CSfHt65REc5AmRI29knNIzZP5q3nQyQskk',
    alt: 'Transformacao editorial antes e depois',
    title: 'Revitalizacao & Cor',
    description: 'Alinhamento de cuticulas, mechas com protecao dos fios e sedosidade total.',
    tag: 'Transformacao Total',
  },
];

export const GALLERY_CTA = {
  title: 'Seu Cabelo, Sua Arte',
  description: 'Agende sua avaliação presencial.',
  cta: 'Agendar Agora',
};
