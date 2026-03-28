import { Check, Crown, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type PlanTier = "standard" | "popular" | "premium";

interface PricingPlan {
  name: string;
  planKey: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  tier: PlanTier;
  badge: string | null;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Essencial",
    planKey: "ESSENCIAL",
    description: "Ideal para profissionais autônomos que estão começando",
    monthlyPrice: 97,
    annualPrice: 815,
    tier: "standard",
    badge: null,
    features: [
      "Até 50 pacientes ativos",
      "Agenda online com lembretes",
      "Prontuário eletrônico básico",
      "Relatórios de evolução",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Profissional",
    planKey: "PROFISSIONAL",
    description: "Para profissionais que querem crescer com eficiência",
    monthlyPrice: 197,
    annualPrice: 1655,
    tier: "popular",
    badge: "Mais Popular",
    features: [
      "Pacientes ilimitados",
      "Agenda com WhatsApp integrado",
      "Prontuário completo + avaliações",
      "Faturamento TISS automático",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
  },
  {
    name: "Clínica",
    planKey: "CLINICA",
    description: "Gestão completa para clínicas com múltiplos profissionais",
    monthlyPrice: 397,
    annualPrice: 3335,
    tier: "premium",
    badge: "Mais Completo",
    features: [
      "Pacientes ilimitados",
      "Agenda com WhatsApp integrado",
      "Prontuário completo + avaliações",
      "Faturamento TISS automático",
      "Múltiplos profissionais",
      "Gestão de convênios",
      "Dashboard administrativo",
      "Controle de permissões",
      "Suporte dedicado",
    ],
  },
];

interface PricingCardsProps {
  isAnnual: boolean;
}

export const PricingCards = ({ isAnnual }: PricingCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full z-[2] md:items-start">
      {pricingPlans.map((plan, index) => (
        <PricingCardItem
          key={plan.planKey}
          plan={plan}
          isAnnual={isAnnual}
          index={index}
        />
      ))}
    </div>
  );
};

interface PricingCardItemProps {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}

const PricingCardItem = ({ plan, isAnnual, index }: PricingCardItemProps) => {
  const isPopular = plan.tier === "popular";
  const isPremium = plan.tier === "premium";
  const isElevated = isPopular || isPremium;

  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const period = isAnnual ? "/ano" : "/mês";
  const monthlyEquivalent = isAnnual
    ? Math.round(plan.annualPrice / 12)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={[
        "group relative flex flex-col w-full rounded-2xl p-px transition-all duration-300",
        isElevated ? "md:-translate-y-3" : "",
        // Outer border gradient
        isPremium
          ? "bg-[linear-gradient(160deg,rgb(130,120,255)_0%,rgb(45,38,85)_45%,rgb(5,3,15)_100%)] shadow-[0_0_24px_rgba(120,110,255,0.15)]"
          : isPopular
            ? "bg-[linear-gradient(160deg,rgb(99,102,241)_-20%,rgb(30,30,60)_40%,rgb(0,0,0)_100%)]"
            : "bg-[linear-gradient(212deg,rgb(138,165,255)_-98%,rgb(0,0,0)_53%)]",
        // Ring
        isPremium
          ? "ring-1 ring-violet-400/40 hover:ring-violet-400/60"
          : isPopular
            ? "ring-1 ring-indigo-500/30 hover:ring-indigo-500/50"
            : "hover:ring-1 hover:ring-neutral-700",
      ].join(" ")}
    >
      {/* Glow effects */}
      {isPopular && (
        <div className="absolute -inset-1 rounded-2xl bg-indigo-500/10 blur-xl opacity-60 pointer-events-none" />
      )}
      {isPremium && (
        <>
          <div className="absolute -inset-2 rounded-3xl bg-violet-500/15 blur-2xl opacity-80 pointer-events-none" />
          <div className="absolute -inset-0.5 rounded-2xl bg-violet-400/5 blur-md pointer-events-none" />
        </>
      )}

      <div
        className={[
          "relative flex flex-col w-full h-full rounded-2xl p-6 md:p-7 gap-5",
          isPremium
            ? "bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(28,26,52)_0%,rgb(8,6,18)_100%)]"
            : "bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]",
        ].join(" ")}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div
              className={[
                "flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-1 rounded-b-xl",
                isPremium
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_4px_16px_rgba(130,120,255,0.5)]"
                  : "bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-[0_4px_12px_rgba(99,102,241,0.4)]",
              ].join(" ")}
            >
              {isPremium ? <Crown size={12} /> : <Sparkles size={12} />}
              {plan.badge}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-1 pt-1">
          <p
            className={[
              "text-sm font-semibold font-inter tracking-wide uppercase",
              isPremium
                ? "text-violet-300"
                : isPopular
                  ? "text-indigo-300"
                  : "text-neutral-400",
            ].join(" ")}
          >
            {plan.name}
          </p>
          <p className="text-neutral-500 text-xs font-inter leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Price — animated on toggle */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-neutral-500 text-lg font-inter">R$</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-white text-[2.5rem] font-bold font-inter tracking-tight leading-none"
              >
                {price.toLocaleString("pt-BR")}
              </motion.span>
            </AnimatePresence>
            <span className="text-neutral-500 text-sm font-inter">
              {period}
            </span>
          </div>
          <AnimatePresence>
            {monthlyEquivalent && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="text-emerald-400/80 text-xs font-inter"
              >
                equivale a R${monthlyEquivalent}/mês
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div
          className={[
            "h-px w-full",
            isPremium
              ? "bg-gradient-to-r from-transparent via-violet-400/35 to-transparent"
              : isPopular
                ? "bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
                : "bg-neutral-800",
          ].join(" ")}
        />

        {/* Features */}
        <div className="flex flex-col gap-2.5">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className={[
                  "flex items-center justify-center w-4 h-4 rounded-full mt-0.5 shrink-0",
                  isPremium
                    ? "bg-violet-500/15"
                    : isPopular
                      ? "bg-indigo-500/20"
                      : "bg-neutral-800",
                ].join(" ")}
              >
                <Check
                  size={10}
                  className={
                    isPremium
                      ? "text-violet-400"
                      : isPopular
                        ? "text-indigo-400"
                        : "text-neutral-500"
                  }
                />
              </div>
              <span
                className={[
                  "text-sm font-inter leading-snug",
                  isElevated ? "text-neutral-300" : "text-neutral-400",
                ].join(" ")}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 mt-auto pt-2">
          <a
            href={`/cadastro?plano=${plan.planKey}`}
            className={[
              "flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold font-inter transition-all duration-200",
              isPremium
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_16px_rgba(120,110,255,0.35)] hover:shadow-[0_0_24px_rgba(120,110,255,0.5)]"
                : isPopular
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.3)] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]"
                  : "bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-200 hover:text-white",
            ].join(" ")}
          >
            Assinar Agora
          </a>
          <a
            href="/cadastro"
            className="flex items-center justify-center w-full py-2 text-neutral-500 hover:text-neutral-300 text-xs font-inter transition-colors duration-200"
          >
            ou testar 14 dias grátis
          </a>
        </div>
      </div>
    </motion.div>
  );
};
