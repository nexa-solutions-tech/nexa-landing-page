export interface FormData {
  nomeClinica: string;
  cnpj: string;
  especialidade: string;
  faixaProfissionais: string;
  telefone: string;
  adminNome: string;
  adminEmail: string;
  adminSenha: string;
}

export interface FormErrors {
  nomeClinica?: string;
  cnpj?: string;
  adminNome?: string;
  adminEmail?: string;
  adminSenha?: string;
}

export interface SuccessData {
  clinicaId: number;
  nomeClinica: string;
  dataFimTrial: string; // "YYYY-MM-DD" ou [year, month, day] (Jackson padrão)
  token: string;
  refreshToken: string;
}
