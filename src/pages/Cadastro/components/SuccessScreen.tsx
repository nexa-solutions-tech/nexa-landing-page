import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { SuccessData } from "../types";

interface SuccessScreenProps {
  data: SuccessData;
}

const MESES = [
  "janeiro","fevereiro","março","abril","maio","junho",
  "julho","agosto","setembro","outubro","novembro","dezembro",
];

function formatarData(raw: unknown): string {
  if (!raw) return "";
  // array [2026, 3, 30]
  if (Array.isArray(raw)) {
    const [y, m, d] = raw as number[];
    return `${String(d).padStart(2, "0")} de ${MESES[m - 1]} de ${y}`;
  }
  // string "2026-03-30"
  const parts = String(raw).split("-");
  if (parts.length === 3) {
    const [y, m, d] = parts.map(Number);
    return `${String(d).padStart(2, "0")} de ${MESES[m - 1]} de ${y}`;
  }
  return String(raw);
}

export const SuccessScreen = ({ data }: SuccessScreenProps) => {
  if (!data) return null;

  const trialDate = formatarData(data.dataFimTrial);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col items-center text-center gap-6 w-full"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600/15 border border-indigo-500/30">
        <CheckCircle2 size={32} className="text-indigo-400" />
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-white font-inter tracking-tight">
          Sua clínica está pronta!
        </h2>
        <p className="text-neutral-400 text-sm font-inter leading-relaxed">
          Bem-vindo(a),{" "}
          <span className="text-white font-medium">{data.nomeClinica}</span>. Sua
          conta foi criada com sucesso.
        </p>
      </div>

      {/* Trial badge */}
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 w-full">
        <CalendarDays size={18} className="text-indigo-400 shrink-0" />
        <p className="text-sm font-inter text-left">
          <span className="text-neutral-400">Trial gratuito até: </span>
          <span className="text-white font-semibold">{trialDate}</span>
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://nexasolutionstech.com.br/login"
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
      >
        Acessar Plataforma
        <ArrowRight size={16} />
      </a>

      {/* Back link */}
      <Link
        to="/"
        className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-2 font-inter"
      >
        ← Voltar à página inicial
      </Link>
    </motion.div>
  );
};
