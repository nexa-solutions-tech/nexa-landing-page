import type { PlanoNome } from "./types";

export const PLAN_FEATURES: Record<PlanoNome, string[]> = {
  ESSENCIAL: [
    "Até 50 pacientes ativos",
    "Agenda online com lembretes",
    "Prontuário eletrônico básico",
    "Relatórios de evolução",
    "Suporte por e-mail",
  ],
  PROFISSIONAL: [
    "Pacientes ilimitados",
    "Agenda com WhatsApp integrado",
    "Prontuário completo + avaliações",
    "Faturamento TISS automático",
    "Relatórios avançados",
    "Suporte prioritário",
  ],
  CLINICA: [
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
};

export const PLAN_DISPLAY_NAMES: Record<PlanoNome, string> = {
  ESSENCIAL: "Essencial",
  PROFISSIONAL: "Profissional",
  CLINICA: "Clínica",
};

export const PLAN_DESCRIPTIONS: Record<PlanoNome, string> = {
  ESSENCIAL: "Ideal para profissionais autônomos que estão começando",
  PROFISSIONAL: "Para profissionais que querem crescer com eficiência",
  CLINICA: "Gestão completa para clínicas com múltiplos profissionais",
};

export const PLAN_HIGHLIGHTED: Record<PlanoNome, boolean> = {
  ESSENCIAL: false,
  PROFISSIONAL: true,
  CLINICA: false,
};

export const PLAN_TIER: Record<PlanoNome, "standard" | "popular" | "premium"> = {
  ESSENCIAL: "standard",
  PROFISSIONAL: "popular",
  CLINICA: "premium",
};

export const PLAN_BADGE: Record<PlanoNome, string | null> = {
  ESSENCIAL: null,
  PROFISSIONAL: "Mais Popular",
  CLINICA: "Mais Completo",
};

export const ANGULAR_APP_URL = "https://clinic.nexasolutionstech.com.br/login";
