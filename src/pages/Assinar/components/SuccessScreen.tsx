import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";
import { ANGULAR_APP_URL, PLAN_DISPLAY_NAMES } from "../constants";
import type { PlanoNome, TipoCobranca } from "../types";

interface SuccessScreenProps {
  planoNome: PlanoNome;
  tipoCobranca: TipoCobranca;
}

export const SuccessScreen = ({ planoNome, tipoCobranca }: SuccessScreenProps) => {
  const isBoleto = tipoCobranca === "BOLETO";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col items-center text-center gap-6 w-full"
    >
      {/* Icon */}
      <div
        className={[
          "flex items-center justify-center w-16 h-16 rounded-full border",
          isBoleto
            ? "bg-indigo-500/15 border-indigo-500/30"
            : "bg-emerald-500/15 border-emerald-500/30",
        ].join(" ")}
      >
        {isBoleto ? (
          <Mail size={32} className="text-indigo-400" />
        ) : (
          <CheckCircle2 size={32} className="text-emerald-400" />
        )}
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-white font-inter tracking-tight">
          {isBoleto ? "Assinatura cadastrada!" : "Assinatura ativada!"}
        </h2>
        <p className="text-neutral-400 text-sm font-inter leading-relaxed max-w-sm">
          {isBoleto ? (
            <>
              Seu plano{" "}
              <span className="text-white font-medium">
                {PLAN_DISPLAY_NAMES[planoNome]}
              </span>{" "}
              foi cadastrado com sucesso. O boleto será enviado para o seu e-mail.
            </>
          ) : (
            <>
              Seu plano{" "}
              <span className="text-white font-medium">
                {PLAN_DISPLAY_NAMES[planoNome]}
              </span>{" "}
              foi ativado com sucesso.
            </>
          )}
        </p>
      </div>

      {/* Info badge */}
      <div
        className={[
          "flex items-start gap-2.5 px-4 py-3 rounded-xl border w-full",
          isBoleto
            ? "bg-indigo-500/10 border-indigo-500/20"
            : "bg-emerald-500/10 border-emerald-500/20",
        ].join(" ")}
      >
        {isBoleto ? (
          <Mail size={18} className="text-indigo-400 shrink-0 mt-0.5" />
        ) : (
          <PartyPopper size={18} className="text-emerald-400 shrink-0 mt-0.5" />
        )}
        <p className="text-sm font-inter text-left text-neutral-300">
          {isBoleto
            ? "Após a confirmação do pagamento, todos os recursos do plano serão liberados automaticamente."
            : "Você agora tem acesso completo a todos os recursos do plano."}
        </p>
      </div>

      {/* CTA */}
      <a
        href={`${ANGULAR_APP_URL}/login`}
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
      >
        Acessar Plataforma
        <ArrowRight size={16} />
      </a>

      {/* Back link */}
      <Link
        to="/"
        className="group flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-white/[0.03] hover:bg-white/[0.06] text-neutral-400 hover:text-white text-sm font-medium font-inter transition-all duration-200"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
        Voltar ao site
      </Link>
    </motion.div>
  );
};
