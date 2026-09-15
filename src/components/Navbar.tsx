import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'O problema', href: '#problema' },
  { label: 'Visibilidade', href: '#visibilidade' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'O time', href: '#time' },
  { label: 'Provas', href: '#provas' },
  { label: 'Planos', href: '#planos' },
  { label: 'Calculadora', href: '#calculadora' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Foi o Marketing, início">
          <img src="/logo.svg" alt="" className="w-8 h-8 object-cover" />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-brand-black">
            Foi o Marketing<span className="text-brand-yellow">.</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-black/70 hover:text-brand-black transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-black text-brand-offwhite px-5 py-2.5 text-sm font-semibold hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 group"
          >
            Quero conversar
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-brand-black"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-8 pt-2 bg-brand-offwhite border-b border-brand-black/10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-lg font-medium text-brand-black/80 hover:text-brand-black border-b border-brand-black/5 transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-brand-yellow text-brand-black px-5 py-3.5 text-base font-semibold"
          >
            Quero conversar
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
