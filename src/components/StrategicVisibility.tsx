import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const STAGES = [
  { num: '01', word: 'ser encontrada', desc: 'Aparecer onde as pessoas certas procuram' },
  { num: '02', word: 'ser percebida', desc: 'Comunicar valor de forma que faça sentido' },
  { num: '03', word: 'ser lembrada', desc: 'Permanecer na mente quando a decisão acontece' },
  { num: '04', word: 'ser considerada', desc: 'Entrar na lista de opções do cliente' },
  { num: '05', word: 'gerar oportunidades', desc: 'Transformar presença em conversas reais' },
];

export default function StrategicVisibility() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="visibilidade" className="relative bg-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="reveal flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-brand-black/30" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
                  O conceito
                </span>
              </div>

              <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
                Visibilidade
                <br />
                <span className="bg-brand-yellow px-3 inline-block leading-none py-1 mt-2">Estratégica</span>
              </h2>

              <p className="reveal reveal-delay-2 mt-8 text-lg text-brand-black/60 leading-relaxed max-w-md">
                A pergunta não é "qual anúncio vamos fazer". A pergunta é:
              </p>

              <div className="reveal reveal-delay-3 mt-6 space-y-4">
                <div className="border-l-2 border-brand-yellow pl-5">
                  <p className="text-lg font-medium text-brand-black leading-relaxed">
                    "Por que alguém deveria escolher essa empresa?"
                  </p>
                </div>
                <div className="border-l-2 border-brand-black/20 pl-5">
                  <p className="text-lg font-medium text-brand-black/70 leading-relaxed">
                    "Como fazemos as pessoas certas perceberem isso?"
                  </p>
                </div>
              </div>

              <p className="reveal reveal-delay-4 mt-8 text-base text-brand-black/50 leading-relaxed max-w-md">
                Estratégia antes da ferramenta. Não vendemos "Meta Ads" ou "Reels". Essas são ferramentas. O que construímos é uma presença que faz a empresa ser encontrada, percebida, lembrada e considerada.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-0">
              {STAGES.map((stage, i) => (
                <div
                  key={stage.num}
                  className="reveal group relative flex items-start gap-6 py-7 border-b border-brand-black/10 hover:bg-brand-cream/50 transition-colors duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-display text-5xl md:text-6xl font-bold text-brand-black/10 group-hover:text-brand-yellow transition-colors duration-300 leading-none">
                    {stage.num}
                  </span>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-black group-hover:translate-x-2 transition-transform duration-300">
                      {stage.word}
                    </h3>
                    <p className="mt-2 text-base text-brand-black/50">{stage.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-black/0 group-hover:text-brand-yellow transition-all duration-300 mt-3 group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
