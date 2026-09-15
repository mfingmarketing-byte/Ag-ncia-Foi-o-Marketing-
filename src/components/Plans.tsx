import { Check, ArrowUpRight, Star } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';
import { PLANS, type PlanId } from '@/lib/calculator';

const PLAN_ORDER: PlanId[] = ['essencial', 'avancada', 'autoridade'];
const RECOMMENDED: PlanId = 'avancada';

export default function Plans() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="planos" className="relative bg-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              Planos
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Três caminhos.
            <br />
            <span className="text-brand-yellow">Um objetivo.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-brand-black/60 leading-relaxed max-w-2xl">
            Processo de 90 dias. O plano não define o que fazemos, define a profundidade. Todos incluem estratégia, dados e análise. A diferença está no volume de produção, canais e frequência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PLAN_ORDER.map((id, i) => {
            const plan = PLANS[id];
            const isRecommended = id === RECOMMENDED;
            return (
              <div
                key={id}
                className={`reveal relative p-8 transition-all duration-500 ${
                  isRecommended
                    ? 'bg-brand-black text-brand-offwhite md:-translate-y-4 shadow-2xl'
                    : 'bg-brand-cream text-brand-black hover:bg-brand-black hover:text-brand-offwhite'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Mais indicado
                  </div>
                )}

                <h3 className={`font-display text-2xl font-bold mb-2 ${isRecommended ? 'text-brand-yellow' : 'group-hover:text-brand-yellow'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isRecommended ? 'text-brand-offwhite/60' : 'text-brand-black/55 group-hover:text-brand-offwhite/60'}`}>
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-current/10">
                  <p className={`text-sm ${isRecommended ? 'text-brand-offwhite/40' : 'text-brand-black/40 group-hover:text-brand-offwhite/40'}`}>
                    Investimento
                  </p>
                  <p className="font-display text-4xl font-bold mt-1">
                    R$ {plan.price.toLocaleString('pt-BR')}
                    <span className={`text-base font-normal ${isRecommended ? 'text-brand-offwhite/40' : 'text-brand-black/40 group-hover:text-brand-offwhite/40'}`}>
                      {' '}/ 90 dias
                    </span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isRecommended ? 'text-brand-yellow' : 'text-brand-black/50 group-hover:text-brand-yellow'}`} />
                      <span className={isRecommended ? 'text-brand-offwhite/80' : 'text-brand-black/70 group-hover:text-brand-offwhite/80'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={DEFAULT_WHATSAPP_MESSAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isRecommended
                      ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark'
                      : 'bg-brand-black text-brand-offwhite hover:bg-brand-yellow hover:text-brand-black'
                  }`}
                >
                  Quero conversar
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12">
          <p className="text-center text-sm text-brand-black/40 mb-6">
            Serviços avulsos também disponíveis:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Gestão de tráfego, R$ 1.000+',
              'Social media, R$ 750+',
              'Vídeo para anúncios, R$ 2.000/diária',
              'Vídeo para redes, R$ 1.500/diária',
              'Conteúdo institucional, R$ 1.800+',
              'Consultoria, R$ 1.200+',
            ].map((item) => (
              <span key={item} className="text-xs px-4 py-2 border border-brand-black/15 text-brand-black/60 bg-brand-cream">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
