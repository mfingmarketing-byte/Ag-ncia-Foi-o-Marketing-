import { ArrowUpRight, ChevronDown, Volume2 } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center bg-brand-offwhite grain-overlay overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-black/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="reveal flex items-center gap-2.5 mb-8">
              <span className="w-8 h-px bg-brand-black/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
                Se deu resultado, foi o marketing
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display font-bold text-hero text-brand-black">
              Sua empresa pode ser
              <br />
              boa demais<span className="text-brand-yellow">.</span>
              <br />
              E mesmo assim,
              <br />
              continuar invisível.
            </h1>

            <p className="reveal reveal-delay-2 mt-8 text-lg md:text-xl text-brand-black/60 max-w-2xl leading-relaxed">
              As pessoas certas não encontram sua empresa. Não lembram dela. Ou encontram o concorrente primeiro. A Foi o Marketing existe para mudar isso, com estratégia, dados, social e audiovisual trabalhando juntos sobre o mesmo negócio.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={DEFAULT_WHATSAPP_MESSAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-brand-black text-brand-offwhite px-8 py-4 text-base font-semibold hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
              >
                Quero conversar
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href="#visibilidade"
                className="inline-flex items-center justify-center gap-2 border border-brand-black/20 text-brand-black px-8 py-4 text-base font-semibold hover:border-brand-black hover:bg-brand-black hover:text-brand-offwhite transition-all duration-300"
              >
                Entender a Visibilidade Estratégica
              </a>
            </div>

            <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
              {['Estratégia', 'Dados', 'Social', 'Audiovisual'].map((item, i) => (
                <div key={item} className="flex items-center gap-2.5">
                  {i > 0 && <span className="text-brand-yellow text-xl font-bold">+</span>}
                  <span className="text-sm font-medium text-brand-black/70">{item}</span>
                </div>
              ))}
              <span className="text-sm font-bold text-brand-black ml-1">= uma estratégia</span>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-brand-yellow text-brand-black px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Volume2 className="w-4 h-4" />
              Assista com áudio
            </div>
            <div className="relative overflow-hidden bg-brand-black shadow-2xl ring-1 ring-brand-black/10">
              <video
                className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Vídeo de apresentação da Foi o Marketing"
              >
                <source src="/WhatsApp_Video_2026-09-14_at_21.42.43.mp4" type="video/mp4" />
                Seu navegador não consegue reproduzir este vídeo.
              </video>
            </div>
            <p className="mt-3 text-xs text-brand-black/40 text-right">
              Conheça a Foi o Marketing.
            </p>
          </div>
        </div>
      </div>

      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-black/40 hover:text-brand-black transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Role</span>
        <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-black/10 to-transparent" />
    </section>
  );
}
