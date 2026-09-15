import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    title: 'Estratégia',
    items: ['Diagnóstico', 'Posicionamento', 'Planejamento', 'Análise de concorrência'],
  },
  {
    title: 'Performance',
    items: ['Meta Ads', 'Google Ads', 'Análise de dados', 'Otimização'],
  },
  {
    title: 'Social',
    items: ['Estratégia de Instagram', 'Calendário', 'Conteúdo', 'Posicionamento'],
  },
  {
    title: 'Audiovisual',
    items: ['Captação', 'Direção', 'Áudio', 'Edição', 'Criativos'],
  },
  {
    title: 'Estrutura digital',
    items: ['Landing pages', 'Páginas de campanha', 'Estruturas de conversão'],
  },
];

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="servicos" className="relative bg-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              O que fazemos
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Não é uma lista de serviços.
            <br />
            É um <span className="bg-brand-yellow px-3 inline-block leading-none py-1">sistema</span>.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-brand-black/60 leading-relaxed max-w-2xl">
            Cada parte existe para alimentar a próxima. Estratégia define o que dizer. Performance coloca na frente das pessoas certas. Social constrói a presença. Audiovisual dá forma. Estrutura digital converte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-black/8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal group bg-brand-offwhite hover:bg-brand-black p-7 transition-colors duration-500 relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-sm font-bold text-brand-yellow mb-4 block">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl font-bold text-brand-black group-hover:text-brand-offwhite transition-colors duration-500 mb-5">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-brand-black/55 group-hover:text-brand-offwhite/60 transition-colors duration-500 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-yellow rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
