import { useEffect, useRef, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Proof = {
  investment: string;
  result: string;
  context: string;
  highlight: string;
};

const PROOFS: Proof[] = [
  {
    investment: 'R$ 67',
    result: '29 leads',
    context: 'Investimento baixo, resultado rápido. Quando a estratégia é certa, não precisa de muito para começar a gerar contatos.',
    highlight: 'R$ 67 investidos',
  },
  {
    investment: 'R$ 5.240',
    result: '358 vendas',
    context: 'Ticket de R$ 15 mil a R$ 30 mil. Campanha estruturada com criativo, segmentação e página de conversão.',
    highlight: 'R$ 5.240 investidos',
  },
  {
    investment: 'R$ 25.260',
    result: 'em receita',
    context: 'Venda de R$ 30 mil atribuída diretamente à campanha. Um resultado de campanha identificado e mensurável.',
    highlight: 'R$ 25.260,15 em receita',
  },
  {
    investment: '+R$ 200 mil',
    result: 'faturamento do site',
    context: 'Em um e-commerce, durante uma Black Friday, os anúncios contribuíram para mais de R$ 200 mil em faturamento do site. Esse número não representa lucro nem o faturamento total da empresa.',
    highlight: '+R$ 200 mil em faturamento do site',
  },
];

function ProofCard({ proof, index }: { proof: Proof; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal group relative bg-brand-offwhite border border-brand-black/10 hover:border-brand-yellow p-8 md:p-10 transition-all duration-500 hover:shadow-xl"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 w-12 h-1 bg-brand-yellow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display text-5xl md:text-6xl font-bold text-brand-black leading-none">
          {proof.investment}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl text-brand-yellow font-bold">→</span>
        <span className="font-display text-2xl md:text-3xl font-bold text-brand-black">
          {proof.result}
        </span>
      </div>

      <p className="text-sm text-brand-black/55 leading-relaxed">{proof.context}</p>

      <div className="mt-6 pt-4 border-t border-brand-black/10">
        <span className="text-xs uppercase tracking-widest font-semibold text-brand-black/40">
          Resultado real
        </span>
      </div>
    </div>
  );
}

export default function Proofs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="provas" className="relative bg-brand-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              Provas
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Números reais.
            <br />
            <span className="text-brand-yellow">Sem invenção.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-brand-black/60 leading-relaxed max-w-2xl">
            Não inventamos provas. Estes são resultados reais de campanhas que a equipe conduziu. Cada número aqui representa estratégia aplicada, não promessa de futuro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROOFS.map((proof, i) => (
            <ProofCard key={i} proof={proof} index={i} />
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="text-sm text-brand-black/40 max-w-xl mx-auto">
            Resultados passados não garantem resultados futuros. Cada negócio, mercado e investimento tem suas próprias variáveis.
          </p>
        </div>
      </div>
    </section>
  );
}
