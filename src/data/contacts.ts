// Configuração centralizada de contatos e links
export const CONTACTS = {
  whatsapp: {
    number: '+55 71 99140-3201',
    link: 'https://wa.me/5571991403201',
  },
  instagram: {
    handle: 'riicardoluz',
    link: 'https://instagram.com/riicardoluz',
  },
  location: {
    city: 'Salvador',
    state: 'Bahia',
    country: 'Brasil',
  },
};

// Mensagens pré-preenchidas do WhatsApp
export const WHATSAPP_MESSAGES = {
  schedule: 'Olá Rick! Gostaria de agendar um horário para meus cachos.',
  inquiry: 'Olá Rick! Gostaria de saber mais sobre seus serviços.',
};

// Criar URL do WhatsApp
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.schedule): string => {
  const encodedMessage = encodeURIComponent(message);
  return `${CONTACTS.whatsapp.link}?text=${encodedMessage}`;
};

// Criar URL do Instagram
export const getInstagramUrl = (): string => {
  return CONTACTS.instagram.link;
};
