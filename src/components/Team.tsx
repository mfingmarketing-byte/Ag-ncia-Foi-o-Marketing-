import { useState } from 'react';
import { ArrowUpRight, Camera, BarChart3, Instagram } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { STUDIO_KAPUR_URL } from '@/lib/constants';

type Member = {
  name: string;
  role: string;
  tagline: string;
  desc: string;
  icon: typeof BarChart3;
  skills: string[];
  link?: { label: string; url: string };
};

const MEMBERS: Member[] = [
  {
    name: 'Marcelo Fonseca',
    role: 'Estratégia, dados e performance',
    tagline: 'Olha para os números.',
    desc: 'Marcelo lê os números para entender o que está funcionando, o que precisa mudar e onde o investimento faz mais sentido. Conecta estratégia e performance para que marketing não seja só presença, mas gere oportunidades reais.',
    icon: BarChart3,
    skills: ['Tráfego pago', 'Meta Ads', 'Google Ads', 'Análise de dados', 'Performance', 'Métricas'],
  },
  {
    name: 'Débora Montenegro',
    role: 'Social media e estratégia de Instagram',
    tagline: 'Olha para as pessoas.',
    desc: 'Débora cuida de como a empresa aparece, conversa e se posiciona nas redes. Não é simplesmente "postar". É transformar o Instagram em uma extensão da estratégia da empresa, com conteúdo que comunica valor.',
    icon: Instagram,
    skills: ['Social media', 'Estratégia de Instagram', 'Conteúdo', 'Posicionamento', 'Editorial', 'Comunicação'],
  },
  {
    name: 'Mari Adrego',
    role: 'Audiovisual, captação e edição',
    tagline: 'Olha para a imagem.',
    desc: 'Mari transforma estratégia em imagem. Coloca a câmera, o áudio e a edição para trabalhar a favor da comunicação. O audiovisual não é "produção bonita". Existe para fazer a estratégia ganhar forma.',
    icon: Camera,
    skills: ['Captação', 'Direção audiovisual', 'Edição', 'Pós-produção', 'Criativos', 'Produção visual'],
    link: { label: 'Conhecer o trabalho audiovisual', url: STUDIO_KAPUR_URL },
  },
];

export default function Team() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} id="time" className="relative bg-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="reveal flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-black/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/50">
              O time
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-black">
            Três olhares.
            <br />
            <span className="bg-brand-yellow px-3 inline-block leading-none py-1 mt-2">Uma estratégia.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-8 text-lg text-brand-black/60 leading-relaxed max-w-2xl">
            Cada um enxerga uma parte. Juntos, enxergamos o negócio inteiro. Não é "uma pessoa que faz tudo". É uma equipe com competências diferentes trabalhando sobre o mesmo negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-0 md:gap-x-0">
          {MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className="reveal group relative bg-brand-cream hover:bg-brand-black transition-all duration-500 overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray-light">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-yellow/70">
                  <member.icon className="w-24 h-24 text-brand-black/20 group-hover:text-brand-black/35 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent transition-opacity duration-500 ${
                    active === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    active === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <span className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
                    {member.tagline}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="font-display text-3xl font-bold text-brand-black/10 group-hover:text-brand-yellow transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 group-hover:text-brand-offwhite transition-colors duration-500">
                <h3 className="font-display text-xl font-bold text-brand-black group-hover:text-brand-offwhite transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-black/50 group-hover:text-brand-yellow transition-colors duration-500 font-medium">
                  {member.role}
                </p>

                <div
                  className={`grid transition-all duration-500 ${
                    active === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 md:opacity-0'
                  } md:grid-rows-[1fr] md:opacity-100'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 text-sm leading-relaxed text-brand-black/60 group-hover:text-brand-offwhite/70 transition-colors duration-500">
                      {member.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-1 border border-brand-black/15 group-hover:border-brand-offwhite/20 text-brand-black/50 group-hover:text-brand-offwhite/60 transition-colors duration-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {member.link && (
                      <a
                        href={member.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:text-brand-yellow transition-colors duration-500"
                      >
                        {member.link.label}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 max-w-3xl">
          <div className="border-l-4 border-brand-yellow pl-6">
            <p className="text-xl md:text-2xl font-display font-medium text-brand-black leading-snug">
              Não somos "uma agência que faz tudo". Somos uma equipe que olha para o negócio por ângulos diferentes antes de decidir o que fazer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
