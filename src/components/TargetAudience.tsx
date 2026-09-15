import { useReveal } from '@/hooks/useReveal';

const AUDIENCE = [
  'Clínicas', 'Dentistas', 'Médicos', 'Pousadas', 'Hotéis', 'Restaurantes',
  'Imobiliárias', 'Academias', 'Negócios locais', 'Empresas de serviços',
  'Profissionais liberais', 'Empresas B2B', 'Empresas B2C', 'Empresas regionais',
];

export default function TargetAudience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="para-quem" className="relative bg-brand-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="reveal flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-brand-black/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
                Para quem é
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
              Para quem já opera,
              <br />
              já vende e quer
              <br />
              <span className="bg-brand-yellow px-3 inline-block leading-none py-1 mt-2">crescer.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-8 text-lg text-brand-black/60 leading-relaxed">
              Não procuramos quem quer "social media barato". Procuramos empresários e decisores que já têm operação, já entregam e precisam melhorar sua presença, ou entender onde colocar dinheiro para gerar oportunidades reais.
            </p>
            <div className="reveal reveal-delay-3 mt-8 space-y-3">
              {[
                'Já gastaram com marketing sem clareza',
                'Querem entender onde investir faz sentido',
                'Precisam gerar oportunidades comerciais',
                'Têm capacidade de investimento',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base text-brand-black/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="flex flex-wrap gap-2.5">
              {AUDIENCE.map((item, i) => (
                <span
                  key={item}
                  className="px-4 py-2.5 bg-brand-offwhite border border-brand-black/10 text-sm font-medium text-brand-black/70 hover:bg-brand-black hover:text-brand-offwhite hover:border-brand-black transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 p-6 bg-brand-black text-brand-offwhite">
              <p className="text-sm text-brand-offwhite/50 mb-2">Não é para quem procura:</p>
              <p className="font-display text-lg font-medium text-brand-yellow">
                "social media barato"
              </p>
              <p className="text-sm text-brand-offwhite/40 mt-2">
                Se o objetivo é o menor preço, existem outras opções. Se o objetivo é estratégia, dados e resultado, conversamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
