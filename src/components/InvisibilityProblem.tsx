import { EyeOff, Search, Brain, TrendingDown, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PROBLEMS = [
  { icon: Search, text: 'não encontram sua empresa quando procuram' },
  { icon: EyeOff, text: 'veem seu conteúdo, mas não tomam nenhuma atitude' },
  { icon: Brain, text: 'não percebem o valor do que você entrega' },
  { icon: Users, text: 'encontram o concorrente antes de você' },
  { icon: TrendingDown, text: 'não lembram da sua empresa quando precisam' },
];

export default function InvisibilityProblem() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="problema" className="relative bg-brand-black text-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-yellow/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow/80">
              O problema
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-offwhite">
            A empresa pode estar
            <br />
            <span className="text-brand-yellow">tudo certo.</span>
            <br />
            E mesmo assim...
          </h2>

          <div className="reveal reveal-delay-2 mt-12 space-y-1">
            <p className="text-xl text-brand-offwhite/50 mb-8 max-w-2xl">
              Pode entregar bem. Ter bons produtos. Ter clientes satisfeitos. E mesmo assim, continuar invisível. O problema muitas vezes não é a empresa. É que as pessoas certas:
            </p>

            <div className="space-y-0">
              {PROBLEMS.map((item, i) => (
                <div
                  key={i}
                  className="reveal group flex items-center gap-5 py-5 border-b border-brand-offwhite/10 hover:border-brand-yellow/40 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="font-display text-2xl font-bold text-brand-yellow/30 group-hover:text-brand-yellow transition-colors duration-300 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <item.icon className="w-5 h-5 text-brand-offwhite/30 group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-brand-offwhite/70 group-hover:text-brand-offwhite transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-4 mt-12 inline-block">
            <p className="text-2xl md:text-3xl font-display font-medium text-brand-offwhite/90 leading-tight">
              A Foi o Marketing existe para <span className="text-brand-yellow">resolver esse problema</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
