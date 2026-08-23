import { z } from "zod";
import { isValidCnpj } from "./utils/cnpj";

export const cadastroSchema = z.object({
  adminNome: z.string().min(1, "Informe seu nome"),
  adminEmail: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  adminCelular: z
    .string()
    .transform((v) => v.trim() || undefined)
    .pipe(
      z
        .string()
        .refine((v) => v.replace(/\D/g, "").length === 11, "Informe um celular válido com DDD")
        .optional()
    ),
  nomeClinica: z.string().min(2, "Informe o nome da sua clínica"),
  cnpj: z
    .string()
    .transform((v) => v.trim() || undefined)
    .pipe(
      z
        .string()
        .refine(isValidCnpj, "CNPJ inválido — informe os 14 dígitos")
        .optional()
    ),
  adminSenha: z
    .string()
    .min(1, "Senha é obrigatória")
    .min(8, "Senha deve ter pelo menos 8 caracteres"),
});

export type CadastroFormData = z.input<typeof cadastroSchema>;
export type CadastroPayload = z.output<typeof cadastroSchema>;

export interface SuccessData {
  clinicaId: number;
  nomeClinica: string;
  dataFimTrial: string;
  token: string;
  refreshToken: string;
}
