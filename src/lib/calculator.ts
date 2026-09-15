export type RevenueRange = {
  label: string;
  min: number;
  max: number;
};

export const REVENUE_RANGES: RevenueRange[] = [
  { label: 'Até R$ 10 mil', min: 0, max: 10000 },
  { label: 'R$ 10 mil a R$ 20 mil', min: 10000, max: 20000 },
  { label: 'R$ 20 mil a R$ 50 mil', min: 20000, max: 50000 },
  { label: 'R$ 50 mil a R$ 100 mil', min: 50000, max: 100000 },
  { label: 'R$ 100 mil a R$ 250 mil', min: 100000, max: 250000 },
  { label: 'R$ 250 mil a R$ 500 mil', min: 250000, max: 500000 },
  { label: 'R$ 500 mil a R$ 1 milhão', min: 500000, max: 1000000 },
  { label: 'Acima de R$ 1 milhão', min: 1000000, max: Infinity },
];

export const OBJECTIVES = [
  'Gerar mais contatos',
  'Vender mais',
  'Aumentar o movimento da loja/empresa',
  'Captar clientes',
  'Gerar reservas',
  'Aumentar reconhecimento',
  'Melhorar presença digital',
  'Outro',
] as const;

export const AD_INVESTMENT = [
  'Não invisto',
  'Até R$ 1.000/mês',
  'R$ 1.000 a R$ 3.000',
  'R$ 3.000 a R$ 5.000',
  'Mais de R$ 5.000',
] as const;

export type PlanId = 'essencial' | 'avancada' | 'autoridade';

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  desc: string;
  features: string[];
};

export const PLANS: Record<PlanId, Plan> = {
  essencial: {
    id: 'essencial',
    name: 'Visibilidade Essencial',
    price: 4500,
    desc: 'Para negócios que precisam começar a aparecer com estratégia, sem desperdiçar dinheiro.',
    features: [
      'Diagnóstico completo',
      'Estratégia de posicionamento',
      'Gestão de Meta Ads ou Google Ads',
      'Produção de criativos básicos',
      'Página de conversão',
      'Análise mensal de resultados',
    ],
  },
  avancada: {
    id: 'avancada',
    name: 'Visibilidade Avançada',
    price: 6500,
    desc: 'Para empresas estabelecidas que precisam de presência, mídia e conteúdo trabalhando juntos.',
    features: [
      'Tudo do Essencial',
      'Estratégia de Instagram + calendário',
      'Meta Ads + Google Ads',
      '1 diária de produção audiovisual',
      'Gestão de social media',
      'Otimização quinzenal',
    ],
  },
  autoridade: {
    id: 'autoridade',
    name: 'Autoridade Total',
    price: 9900,
    desc: 'Para empresas que querem dominar o mercado: múltiplos canais, conteúdo e estratégia ampla.',
    features: [
      'Tudo do Avançada',
      '2 diárias de produção audiovisual',
      'Estratégia multi-canal completa',
      'Landing pages + estruturas de conversão',
      'Gestão completa de social media',
      'Análise semanal + reuniões estratégicas',
    ],
  },
};

export type CalcAnswers = {
  revenue: number | null;
  revenueLabel: string;
  ticket: number | null;
  salesGoal: number | null;
  objective: string;
  adInvestment: string;
};

export type CalcResult = {
  plan: Plan;
  mediaMin: number;
  mediaMax: number;
  reasoning: string;
};

export function calculateResult(answers: CalcAnswers): CalcResult {
  const { revenue, ticket, salesGoal, objective, adInvestment } = answers;

  let score = 0;

  if (revenue !== null) {
    if (revenue >= 500000) score += 4;
    else if (revenue >= 100000) score += 3;
    else if (revenue >= 50000) score += 2;
    else if (revenue >= 20000) score += 1.5;
    else score += 0.5;
  }

  if (ticket !== null) {
    if (ticket >= 5000) score += 2;
    else if (ticket >= 1000) score += 1.5;
    else if (ticket >= 300) score += 1;
    else score += 0.5;
  }

  if (salesGoal !== null) {
    if (salesGoal >= 50) score += 2;
    else if (salesGoal >= 20) score += 1.5;
    else if (salesGoal >= 10) score += 1;
    else score += 0.5;
  }

  const needsContent = objective === 'Aumentar reconhecimento' || objective === 'Melhorar presença digital';
  if (needsContent) score += 0.5;

  if (adInvestment === 'Mais de R$ 5.000') score += 1.5;
  else if (adInvestment === 'R$ 3.000 a R$ 5.000') score += 1;
  else if (adInvestment === 'R$ 1.000 a R$ 3.000') score += 0.5;

  let planId: PlanId;
  if (score >= 7) planId = 'autoridade';
  else if (score >= 4) planId = 'avancada';
  else planId = 'essencial';

  const plan = PLANS[planId];

  let baseMin: number;
  let baseMax: number;

  if (revenue !== null) {
    const pct = revenue >= 500000 ? 0.04 : revenue >= 100000 ? 0.05 : revenue >= 50000 ? 0.06 : revenue >= 20000 ? 0.07 : 0.08;
    baseMin = Math.round((revenue * pct) / 500) * 500;
    baseMax = Math.round((revenue * pct * 1.8) / 500) * 500;
  } else {
    baseMin = 1500;
    baseMax = 3000;
  }

  if (baseMin < 1000) baseMin = 1000;
  if (baseMax < baseMin * 2) baseMax = baseMin * 2;

  const reasons: string[] = [];
  if (revenue !== null) {
    reasons.push(`Para o faturamento informado, investir entre R$ ${baseMin.toLocaleString('pt-BR')} e R$ ${baseMax.toLocaleString('pt-BR')} em mídia tende a ser mais coerente do que começar com um valor muito baixo que não gere dados suficientes.`);
  }
  if (ticket !== null && salesGoal !== null) {
    const potentialRevenue = ticket * salesGoal;
    reasons.push(`Com ticket de R$ ${ticket.toLocaleString('pt-BR')} e meta de ${salesGoal} vendas/mês, o potencial de receita é de R$ ${potentialRevenue.toLocaleString('pt-BR')}. O investimento em mídia precisa ser proporcional a esse potencial.`);
  }
  if (needsContent) {
    reasons.push(`Seu objetivo envolve reconhecimento e presença. O plano recomendado inclui produção de conteúdo, não apenas anúncios.`);
  }
  if (adInvestment === 'Não invisto') {
    reasons.push(`Como ainda não investe em anúncios, o plano começa com estruturação. O importante é começar com o pé direito, não com o orçamento mais alto.`);
  }

  return {
    plan,
    mediaMin: baseMin,
    mediaMax: baseMax,
    reasoning: reasons.join(' '),
  };
}

export function buildWhatsAppMessage(answers: CalcAnswers, result: CalcResult): string {
  const lines = [
    'Olá, Marcelo. Fiz o diagnóstico no site da Foi o Marketing.',
    '',
    `Faturamento: ${answers.revenueLabel || 'Não informado'}`,
    `Ticket médio: ${answers.ticket ? `R$ ${answers.ticket.toLocaleString('pt-BR')}` : 'Não informado'}`,
    `Meta de vendas/mês: ${answers.salesGoal || 'Não informado'}`,
    `Objetivo: ${answers.objective || 'Não informado'}`,
    `Investimento atual em anúncios: ${answers.adInvestment || 'Não informado'}`,
    `Plano recomendado: ${result.plan.name}`,
    `Faixa estimada de mídia: R$ ${result.mediaMin.toLocaleString('pt-BR')} – R$ ${result.mediaMax.toLocaleString('pt-BR')}/mês`,
    '',
    'Gostaria de conversar.',
  ];
  return lines.join('\n');
}
