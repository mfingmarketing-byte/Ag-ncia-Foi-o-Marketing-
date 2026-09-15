import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

export default function FinalCTA() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-brand-black text-brand-offwhite py-24 md:py-40 overflow-hidden grain-overlay">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <div className="reveal flex items-center justify-center gap-2.5 mb-8">
          <span className="w-8 h-px bg-brand-yellow/50" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow/80">
            A decisão
          </span>
          <span className="w-8 h-px bg-brand-yellow/50" />
        </div>

        <h2 className="reveal reveal-delay-1 font-display font-bold text-hero text-brand-offwhite leading-[1.05]">
          Sua empresa pode
          <br />
          continuar
          <br />
          <span className="text-brand-yellow">invisível.</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-8 text-2xl md:text-3xl font-display font-medium text-brand-offwhite/60">
          Ou pode começar a ser encontrada
          <br />
          pelas pessoas certas.
        </p>

        <div className="reveal reveal-delay-3 mt-12">
          <a
            href={DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-10 py-5 text-lg font-bold hover:bg-brand-offwhite transition-all duration-300"
          >
            Quero conversar
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        <p className="reveal reveal-delay-4 mt-8 text-sm text-brand-offwhite/30">
          Sem compromisso. Sem roteiro de vendas. Uma conversa de empresário para empresário.
        </p>
      </div>
    </section>
  );
}
