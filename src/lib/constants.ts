export const WHATSAPP_NUMBER = '5524981405713';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = whatsappLink(
  'Olá, Marcelo. Vi o site da Foi o Marketing e quero conversar sobre a visibilidade da minha empresa.'
);

export const STUDIO_KAPUR_URL = 'https://instagram.com/studiokapur';
