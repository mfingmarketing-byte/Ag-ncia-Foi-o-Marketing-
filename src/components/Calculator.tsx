import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertCircle, RotateCcw } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { whatsappLink } from '@/lib/constants';
import {
  REVENUE_RANGES,
  OBJECTIVES,
  AD_INVESTMENT,
  type CalcAnswers,
  type CalcResult,
  calculateResult,
  buildWhatsAppMessage,
} from '@/lib/calculator';

const STEPS = ['Faturamento', 'Ticket médio', 'Meta de vendas', 'Objetivo', 'Investimento atual'];

export default function Calculator() {
  const ref = useReveal<HTMLElement>();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<CalcAnswers>({
    revenue: null,
    revenueLabel: '',
    ticket: null,
    salesGoal: null,
    objective: '',
    adInvestment: '',
  });
  const [result, setResult] = useState<CalcResult | null>(null);
  const [customRevenue, setCustomRevenue] = useState('');

  const canProceed = () => {
    switch (step) {
      case 0: return answers.revenueLabel !== '';
      case 1: return answers.ticket !== null && answers.ticket > 0;
      case 2: return answers.salesGoal !== null && answers.salesGoal > 0;
      case 3: return answers.objective !== '';
      case 4: return answers.adInvestment !== '';
      default: return false;
    }
  };

  const next = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setResult(calculateResult(answers));
    }
  };

  const back = () => {
    if (result) {
      setResult(null);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setResult(null);
    setAnswers({
      revenue: null,
      revenueLabel: '',
      ticket: null,
      salesGoal: null,
      objective: '',
      adInvestment: '',
    });
    setCustomRevenue('');
  };

  const selectRevenue = (label: string, min: number, max: number) => {
    const mid = max === Infinity ? min : (min + max) / 2;
    setAnswers({ ...answers, revenue: mid, revenueLabel: label });
  };

  const handleCustomRevenue = () => {
    const val = parseFloat(customRevenue.replace(/[^\d,]/g, '').replace(',', '.'));
    if (val > 0) {
      setAnswers({ ...answers, revenue: val, revenueLabel: `R$ ${val.toLocaleString('pt-BR')}/mês (informado manualmente)` });
    }
  };

  if (result) {
    const waMessage = buildWhatsAppMessage(answers, result);
    return (
      <section ref={ref} id="calculadora" className="relative bg-brand-black text-brand-offwhite py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
          <div className="reveal text-center mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-brand-yellow/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow/80">
                Resultado
              </span>
              <span className="w-8 h-px bg-brand-yellow/50" />
            </div>
            <h2 className="font-display font-bold text-section text-brand-offwhite">
              Pelo que você respondeu...
            </h2>
          </div>

          <div className="reveal reveal-delay-1 bg-brand-charcoal border border-brand-offwhite/10 p-8 md:p-12">
            <p className="text-sm text-brand-offwhite/40 uppercase tracking-widest font-semibold mb-2">
              Plano mais indicado
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-yellow mb-6">
              {result.plan.name}
            </h3>

            <div className="border-t border-brand-offwhite/10 pt-6 mb-6">
              <p className="text-sm text-brand-offwhite/40 uppercase tracking-widest font-semibold mb-2">
                Investimento estimado em mídia
              </p>
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-offwhite">
                R$ {result.mediaMin.toLocaleString('pt-BR')} a R$ {result.mediaMax.toLocaleString('pt-BR')}
                <span className="text-lg text-brand-offwhite/40 font-normal">/mês</span>
              </p>
            </div>

            <p className="text-sm text-brand-offwhite/60 leading-relaxed mb-6">
              {result.reasoning}
            </p>

            <div className="flex items-start gap-3 bg-brand-yellow/10 border border-brand-yellow/20 p-4 mb-8">
              <AlertCircle className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
              <p className="text-sm text-brand-offwhite/70 leading-relaxed">
                <strong className="text-brand-yellow">Essa é uma estimativa inicial, não uma promessa de resultado.</strong> A faixa serve para entender a ordem de grandeza do investimento, não garante vendas, ROI ou faturamento.
              </p>
            </div>

            <div className="border-t border-brand-offwhite/10 pt-6">
              <p className="text-sm text-brand-offwhite/50 mb-4">
                Quer entender se essa estimativa faz sentido para sua empresa?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black px-6 py-3.5 text-base font-semibold hover:bg-brand-yellow-dark transition-colors duration-300 flex-1"
                >
                  Quero conversar com o Marcelo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 border border-brand-offwhite/20 text-brand-offwhite px-6 py-3.5 text-base font-semibold hover:bg-brand-offwhite hover:text-brand-black transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="calculadora" className="relative bg-brand-black text-brand-offwhite py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="reveal flex items-center justify-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-brand-yellow/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow/80">
              Diagnóstico
            </span>
            <span className="w-8 h-px bg-brand-yellow/50" />
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-section text-brand-offwhite">
            Quanto faz sentido
            <br />
            <span className="text-brand-yellow">investir</span> para sua empresa aparecer?
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-brand-offwhite/50 max-w-xl mx-auto">
            Cinco perguntas rápidas. Uma estimativa inicial, não uma promessa.
          </p>
        </div>

        <div className="reveal reveal-delay-3 bg-brand-charcoal border border-brand-offwhite/10 p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 ${
                    i === step ? 'w-8 bg-brand-yellow' : i < step ? 'w-8 bg-brand-yellow/40' : 'w-8 bg-brand-offwhite/10'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-brand-offwhite/40 font-medium">
              {step + 1} / {STEPS.length}
            </span>
          </div>

          <div className="min-h-[280px]">
            {step === 0 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  Qual é o faturamento médio mensal da sua empresa?
                </h3>
                <p className="text-sm text-brand-offwhite/40 mb-6">Selecione uma faixa ou digite o valor.</p>
                <div className="grid sm:grid-cols-2 gap-2.5 mb-4">
                  {REVENUE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => selectRevenue(range.label, range.min, range.max)}
                      className={`text-left px-4 py-3 text-sm font-medium border transition-all duration-200 ${
                        answers.revenueLabel === range.label
                          ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                          : 'border-brand-offwhite/15 text-brand-offwhite/70 hover:border-brand-yellow/50'
                      }`}
                    >
                      {answers.revenueLabel === range.label && <Check className="w-4 h-4 inline mr-2" />}
                      {range.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customRevenue}
                    onChange={(e) => setCustomRevenue(e.target.value)}
                    placeholder="Ou digite o valor (ex: 80000)"
                    className="flex-1 bg-brand-black border border-brand-offwhite/15 px-4 py-3 text-sm text-brand-offwhite placeholder-brand-offwhite/30 focus:border-brand-yellow focus:outline-none"
                  />
                  <button
                    onClick={handleCustomRevenue}
                    className="bg-brand-offwhite/10 hover:bg-brand-offwhite/20 text-brand-offwhite px-4 py-3 text-sm font-medium transition-colors"
                  >
                    Usar valor
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  Qual é o ticket médio da sua empresa?
                </h3>
                <p className="text-sm text-brand-offwhite/40 mb-6">O valor médio de cada venda ou serviço.</p>
                <div className="relative max-w-xs">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-offwhite/40 text-sm">R$</span>
                  <input
                    type="number"
                    value={answers.ticket ?? ''}
                    onChange={(e) => setAnswers({ ...answers, ticket: parseFloat(e.target.value) || null })}
                    placeholder="1500"
                    className="w-full bg-brand-black border border-brand-offwhite/15 pl-10 pr-4 py-3.5 text-lg text-brand-offwhite placeholder-brand-offwhite/30 focus:border-brand-yellow focus:outline-none"
                    min={0}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  Quantas vendas ou novos clientes você gostaria de gerar por mês?
                </h3>
                <p className="text-sm text-brand-offwhite/40 mb-6">Pense no que faria diferença para o seu negócio.</p>
                <input
                  type="number"
                  value={answers.salesGoal ?? ''}
                  onChange={(e) => setAnswers({ ...answers, salesGoal: parseInt(e.target.value) || null })}
                  placeholder="20"
                  className="w-full max-w-xs bg-brand-black border border-brand-offwhite/15 px-4 py-3.5 text-lg text-brand-offwhite placeholder-brand-offwhite/30 focus:border-brand-yellow focus:outline-none"
                  min={0}
                />
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  Qual é o seu principal objetivo hoje?
                </h3>
                <p className="text-sm text-brand-offwhite/40 mb-6">Selecione a opção que mais se aproxima.</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {OBJECTIVES.map((obj) => (
                    <button
                      key={obj}
                      onClick={() => setAnswers({ ...answers, objective: obj })}
                      className={`text-left px-4 py-3 text-sm font-medium border transition-all duration-200 ${
                        answers.objective === obj
                          ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                          : 'border-brand-offwhite/15 text-brand-offwhite/70 hover:border-brand-yellow/50'
                      }`}
                    >
                      {answers.objective === obj && <Check className="w-4 h-4 inline mr-2" />}
                      {obj}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  Você já investe em anúncios?
                </h3>
                <p className="text-sm text-brand-offwhite/40 mb-6">Se sim, quanto por mês?</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {AD_INVESTMENT.map((inv) => (
                    <button
                      key={inv}
                      onClick={() => setAnswers({ ...answers, adInvestment: inv })}
                      className={`text-left px-4 py-3 text-sm font-medium border transition-all duration-200 ${
                        answers.adInvestment === inv
                          ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                          : 'border-brand-offwhite/15 text-brand-offwhite/70 hover:border-brand-yellow/50'
                      }`}
                    >
                      {answers.adInvestment === inv && <Check className="w-4 h-4 inline mr-2" />}
                      {inv}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-offwhite/10">
            <button
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm text-brand-offwhite/50 hover:text-brand-offwhite disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
            <button
              onClick={next}
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 text-sm font-semibold hover:bg-brand-yellow-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group"
            >
              {step === 4 ? 'Ver resultado' : 'Próximo'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <p className="reveal reveal-delay-4 mt-6 text-center text-xs text-brand-offwhite/30 max-w-lg mx-auto">
          Esta ferramenta oferece uma estimativa inicial baseada nos dados informados. Não é uma proposta comercial nem uma garantia de resultado.
        </p>
      </div>
    </section>
  );
}
