import { z } from "zod";

export type PlanoNome = "ESSENCIAL" | "PROFISSIONAL" | "CLINICA";
export type Ciclo = "MONTHLY" | "YEARLY";
export type TipoCobranca = "CREDIT_CARD" | "BOLETO" | "UNDEFINED";
export type CheckoutStep = 1 | 2 | 3;

export interface PlanoAPI {
  id: number;
  nome: PlanoNome;
  valorMensal: number;
  valorAnual: number;
  limitePacientes: number | null;
  descricao: string | null;
}

export interface AssinaturaPayload {
  plano: PlanoNome;
  ciclo: Ciclo;
  tipoCobranca: TipoCobranca;
  cpfCnpj: string;
  creditCard?: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardHolderInfo?: {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    phone: string;
  };
}

const creditCardSchema = z.object({
  tipoCobranca: z.literal("CREDIT_CARD"),
  cpfCnpj: z.string().min(14, "Informe o CPF ou CNPJ"),
  cardNumber: z.string().min(19, "Número do cartão inválido"),
  cardName: z.string().min(1, "Informe o nome no cartão"),
  cardExpiryMonth: z.string().min(2, "Mês inválido"),
  cardExpiryYear: z.string().min(4, "Ano inválido"),
  cardCvv: z.string().min(3, "CVV inválido"),
  holderName: z.string().min(1, "Informe o nome do titular"),
  holderEmail: z.string().email("E-mail inválido"),
  holderCpfCnpj: z.string().min(14, "Informe o CPF ou CNPJ"),
  holderPostalCode: z.string().min(9, "CEP inválido"),
  holderAddressNumber: z.string().min(1, "Informe o número"),
  holderPhone: z.string().min(14, "Telefone inválido"),
});

const boletoSchema = z.object({
  tipoCobranca: z.literal("BOLETO"),
  cpfCnpj: z.string().min(14, "Informe o CPF ou CNPJ"),
});

const undefinedSchema = z.object({
  tipoCobranca: z.literal("UNDEFINED"),
  cpfCnpj: z.string().min(14, "Informe o CPF ou CNPJ"),
});

export const paymentSchema = z.discriminatedUnion("tipoCobranca", [
  creditCardSchema,
  boletoSchema,
  undefinedSchema,
]);

export type PaymentFormData = z.infer<typeof paymentSchema>;
