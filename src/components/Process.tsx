import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entender o negócio, o mercado, a concorrência e onde a empresa está perdendo oportunidades.',
  },
  {
    num: '02',
    title: 'Estratégia',
    desc: 'Definir posicionamento, mensagem e os canais que fazem sentido para o objetivo da empresa.',
  },
  {
    num: '03',
    title: 'Conteúdo',
    desc: 'Criar os materiais que comunicam valor, do audiovisual ao texto, do anúncio ao post.',
  },
  {
    num: '04',
    title: 'Distribuição',
    desc: 'Colocar a mensagem na frente das pessoas certas, no momento certo, no canal certo.',
  },
  {
    num: '05',
    title: 'Análise',
    desc: 'Ler os números. Entender o que está funcionando, o que precisa mudar e onde está o ganho.',
  },
  {
    num: '06',
    title: 'Otimização',
    desc: 'Ajustar, melhorar e repetir. Marketing não é um disparo único. É um processo contínuo.',
  },
];

export default function Process() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="processo" className="relative bg-brand-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              Como funciona
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Não é um pacote de serviços.
            <br />
            É um <span className="text-brand-yellow">processo</span>.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-brand-black/60 leading-relaxed">
            Um processo de aproximadamente 90 dias, onde cada etapa existe por um motivo, e na ordem certa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-black/10">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="reveal group bg-brand-cream hover:bg-brand-offwhite p-8 transition-colors duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="font-display text-6xl font-bold text-brand-black/8 group-hover:text-brand-yellow/40 transition-colors duration-300 block mb-4 leading-none">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold text-brand-black mb-3">{step.title}</h3>
              <p className="text-sm text-brand-black/55 leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute bottom-6 right-6 text-brand-black/10 group-hover:text-brand-yellow transition-colors">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
