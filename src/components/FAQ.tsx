import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const FAQS = [
  {
    q: 'Vocês garantem resultado?',
    a: 'Não. Ninguém pode garantir resultado em marketing. O que garantimos é processo: diagnóstico, estratégia, execução, análise e otimização. Resultado depende de produto, mercado, ticket, equipe de vendas e vários outros fatores. Qualquer um que prometa resultado garantido está mentindo.',
  },
  {
    q: 'Por que 90 dias?',
    a: 'Marketing não é um disparo único. 90 dias é o tempo mínimo para diagnosticar, estruturar, testar, ler dados e otimizar. Menos que isso não dá tempo de gerar informação suficiente para tomar boas decisões.',
  },
  {
    q: 'Qual a diferença entre os planos?',
    a: 'Todos incluem estratégia, dados e análise. A diferença está no volume de produção audiovisual, número de canais ativos, frequência de conteúdo e nível de acompanhamento. Não é "mais do mesmo", é mais profundidade.',
  },
  {
    q: 'O investimento em mídia está incluso?',
    a: 'Não. O valor do plano cobre estratégia, gestão, produção e análise. O investimento em anúncios (Meta Ads, Google Ads) é separado e pago diretamente às plataformas. A calculadora do site ajuda a estimar essa faixa.',
  },
  {
    q: 'Vocês atendem qualquer tipo de empresa?',
    a: 'Atendemos empresas que já têm operação, já vendem e têm capacidade de investimento. Não atendemos quem procura "social media barato". Nosso trabalho é estratégico, não operacional barato.',
  },
  {
    q: 'Como começa o trabalho?',
    a: 'Com uma conversa. Entendemos seu negócio, seu mercado e seus objetivos. Se fizer sentido para os dois lados, seguimos com o diagnóstico. Se não fizer, dizemos. Não vendemos para vender.',
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="relative bg-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              Dúvidas
            </span>
            <span className="w-8 h-px bg-brand-black/30" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Perguntas
            <br />
            <span className="text-brand-yellow">diretas.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="reveal border-b border-brand-black/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-display text-lg md:text-xl font-medium text-brand-black group-hover:text-brand-black/70 transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 border border-brand-black/15 flex items-center justify-center text-brand-black group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-300">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-6 text-base text-brand-black/55 leading-relaxed pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="text-brand-black/50 mb-4">Ainda tem dúvida?</p>
          <a
            href={DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-black font-semibold underline underline-offset-4 decoration-brand-yellow decoration-2 hover:decoration-brand-black transition-all"
          >
            Pergunta direta no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
