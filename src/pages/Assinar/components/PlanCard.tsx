import { Check, Crown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PLAN_DISPLAY_NAMES, PLAN_FEATURES, PLAN_DESCRIPTIONS, PLAN_TIER, PLAN_BADGE } from "../constants";
import type { Ciclo, PlanoAPI } from "../types";

interface PlanCardProps {
  plano: PlanoAPI;
  ciclo: Ciclo;
  selected: boolean;
  onSelect: () => void;
  index: number;
}

export const PlanCard = ({ plano, ciclo, selected, onSelect, index }: PlanCardProps) => {
  const displayName = PLAN_DISPLAY_NAMES[plano.nome];
  const description = PLAN_DESCRIPTIONS[plano.nome];
  const features = PLAN_FEATURES[plano.nome];
  const tier = PLAN_TIER[plano.nome];
  const badge = PLAN_BADGE[plano.nome];
  const price = ciclo === "MONTHLY" ? plano.valorMensal : plano.valorAnual;
  const period = ciclo === "MONTHLY" ? "/mês" : "/ano";
  const monthlyEquivalent = ciclo === "YEARLY" ? (plano.valorAnual / 12).toFixed(0) : null;

  const isPopular = tier === "popular";
  const isPremium = tier === "premium";
  const isElevated = isPopular || isPremium;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={[
        "group relative flex flex-col w-full rounded-2xl p-px transition-all duration-300 text-left",
        isElevated ? "md:-translate-y-2" : "",
        // Outer border gradient — premium uses a brighter, more saturated indigo-violet
        selected
          ? isPremium
            ? "bg-[linear-gradient(136deg,rgb(140,130,255)_0%,rgb(190,195,255)_50%,rgb(30,28,65)_100%)] shadow-[0_0_40px_rgba(140,130,255,0.35)]"
            : "bg-[linear-gradient(136deg,rgb(99,102,241)_0%,rgb(138,165,255)_50%,rgb(30,30,60)_100%)] shadow-[0_0_32px_rgba(99,102,241,0.25)]"
          : isPremium
            ? "bg-[linear-gradient(160deg,rgb(130,120,255)_0%,rgb(45,38,85)_45%,rgb(5,3,15)_100%)] shadow-[0_0_24px_rgba(120,110,255,0.15)]"
            : isPopular
              ? "bg-[linear-gradient(160deg,rgb(99,102,241)_-20%,rgb(30,30,60)_40%,rgb(0,0,0)_100%)]"
              : "bg-[linear-gradient(212deg,rgb(138,165,255)_-98%,rgb(0,0,0)_53%)]",
        // Ring
        selected
          ? isPremium
            ? "ring-2 ring-violet-400/70"
            : "ring-2 ring-indigo-400/60"
          : isPremium
            ? "ring-1 ring-violet-400/40 hover:ring-violet-400/60"
            : isPopular
              ? "ring-1 ring-indigo-500/30 hover:ring-indigo-500/50"
              : "hover:ring-1 hover:ring-neutral-700",
      ].join(" ")}
    >
      {/* Glow effect for elevated tiers */}
      {isPopular && (
        <div className="absolute -inset-1 rounded-2xl bg-indigo-500/10 blur-xl opacity-60 pointer-events-none" />
      )}
      {isPremium && (
        <>
          <div className="absolute -inset-2 rounded-3xl bg-violet-500/15 blur-2xl opacity-80 pointer-events-none" />
          <div className="absolute -inset-0.5 rounded-2xl bg-violet-400/5 blur-md pointer-events-none" />
        </>
      )}

      <div className={[
        "relative flex flex-col w-full h-full rounded-2xl p-6 gap-5",
        isPremium
          ? "bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(28,26,52)_0%,rgb(8,6,18)_100%)]"
          : "bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]",
      ].join(" ")}>
        {/* Badge */}
        {badge && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className={[
              "flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-1 rounded-b-xl",
              isPremium
                ? "bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_4px_16px_rgba(130,120,255,0.5)]"
                : "bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-[0_4px_12px_rgba(99,102,241,0.4)]",
            ].join(" ")}>
              {isPremium ? <Crown size={12} /> : <Sparkles size={12} />}
              {badge}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-center justify-between">
            <p className={[
              "text-sm font-semibold font-inter tracking-wide uppercase",
              isPremium ? "text-violet-300" : isPopular ? "text-indigo-300" : "text-neutral-400",
            ].join(" ")}>
              {displayName}
            </p>
            {/* Radio indicator */}
            <div
              className={[
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                selected
                  ? isPremium
                    ? "border-violet-400 bg-violet-500"
                    : "border-indigo-400 bg-indigo-500"
                  : "border-neutral-600 group-hover:border-neutral-500",
              ].join(" ")}
            >
              {selected && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </div>
          <p className="text-neutral-500 text-xs font-inter leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-white text-[2rem] font-bold font-inter tracking-tight leading-none">
              R${price.toFixed(0)}
            </span>
            <span className="text-neutral-500 text-sm font-inter">{period}</span>
          </div>
          {monthlyEquivalent && (
            <p className="text-emerald-400/80 text-xs font-inter">
              equivale a R${monthlyEquivalent}/mês
            </p>
          )}
        </div>

        {/* Divider */}
        <div className={[
          "h-px w-full",
          isPremium
            ? "bg-gradient-to-r from-transparent via-violet-400/35 to-transparent"
            : isPopular
              ? "bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
              : "bg-neutral-800",
        ].join(" ")} />

        {/* Features */}
        <div className="flex flex-col gap-2.5">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className={[
                "flex items-center justify-center w-4 h-4 rounded-full mt-0.5 shrink-0",
                isPremium ? "bg-violet-500/15" : isPopular ? "bg-indigo-500/20" : "bg-neutral-800",
              ].join(" ")}>
                <Check size={10} className={
                  isPremium ? "text-violet-400" : isPopular ? "text-indigo-400" : "text-neutral-500"
                } />
              </div>
              <span className={[
                "text-sm font-inter leading-snug",
                isElevated ? "text-neutral-300" : "text-neutral-400",
              ].join(" ")}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Select CTA */}
        <div className={[
          "mt-auto pt-2 w-full py-2.5 rounded-xl text-center text-sm font-semibold font-inter transition-all duration-200",
          selected
            ? isPremium
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_16px_rgba(120,110,255,0.35)]"
              : "bg-indigo-600 text-white shadow-[0_0_16px_rgba(99,102,241,0.3)]"
            : isPremium
              ? "bg-violet-500/10 text-violet-300 group-hover:bg-violet-500/20"
              : isPopular
                ? "bg-indigo-600/15 text-indigo-300 group-hover:bg-indigo-600/25"
                : "bg-neutral-800/50 text-neutral-400 group-hover:bg-neutral-800 group-hover:text-neutral-300",
        ].join(" ")}>
          {selected ? "Selecionado" : "Selecionar plano"}
        </div>
      </div>
    </motion.button>
  );
};
