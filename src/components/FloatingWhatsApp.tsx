import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={DEFAULT_WHATSAPP_MESSAGE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-brand-black text-brand-offwhite pl-4 pr-5 py-3.5 shadow-2xl hover:bg-brand-yellow hover:text-brand-black transition-all duration-500 group ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm font-semibold hidden sm:inline">Quero conversar</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-yellow rounded-full animate-pulse-slow group-hover:bg-brand-black" />
    </a>
  );
}
