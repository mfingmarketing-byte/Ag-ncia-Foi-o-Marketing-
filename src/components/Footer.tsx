import { Instagram } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE, STUDIO_KAPUR_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-offwhite/50 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-bold text-lg text-brand-offwhite mb-1">
              Foi o Marketing<span className="text-brand-yellow">.</span>
            </p>
            <p className="text-sm">Se deu resultado, foi o marketing.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <a
              href={DEFAULT_WHATSAPP_MESSAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={STUDIO_KAPUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              Studio Kapur
            </a>
            <a href="#calculadora" className="hover:text-brand-yellow transition-colors">
              Calculadora
            </a>
            <a href="#faq" className="hover:text-brand-yellow transition-colors">
              Dúvidas
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-offwhite/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-offwhite/30">
            © {new Date().getFullYear()} Foi o Marketing. Visibilidade Estratégica.
          </p>
          <a
            href={STUDIO_KAPUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-brand-offwhite/30 hover:text-brand-yellow transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @studiokapur
          </a>
        </div>
      </div>
    </footer>
  );
}
