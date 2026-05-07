import { FormInput } from "@/pages/Cadastro/components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { paymentSchema, type AssinaturaPayload, type Ciclo, type PaymentFormData, type PlanoAPI, type TipoCobranca } from "../types";
import { maskCpfCnpj } from "../utils/masks";
import { CardHolderForm } from "./CardHolderForm";
import { CreditCardForm } from "./CreditCardForm";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { SubscriptionSummary } from "./SubscriptionSummary";

interface PaymentFormProps {
  plano: PlanoAPI;
  ciclo: Ciclo;
  onBack: () => void;
  onSubmit: (payload: AssinaturaPayload) => Promise<void>;
  apiError: string | null;
  /** CNPJ informado no cadastro da clínica, quando disponível. */
  clinicCnpj?: string;
}

export const PaymentForm = ({
  plano,
  ciclo,
  onBack,
  onSubmit,
  apiError,
  clinicCnpj,
}: PaymentFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      tipoCobranca: "CREDIT_CARD",
      cpfCnpj: clinicCnpj ? maskCpfCnpj(clinicCnpj) : "",
    },
  });

  const tipoCobranca = watch("tipoCobranca");

  const handleMethodChange = (method: TipoCobranca) => {
    if (method === "CREDIT_CARD" || method === "BOLETO") {
      setValue("tipoCobranca", method, { shouldValidate: false });
    }
  };

  const processSubmit = async (data: PaymentFormData) => {
    const cpfCnpjClean = data.cpfCnpj.replace(/\D/g, "");

    const payload: AssinaturaPayload = {
      plano: plano.nome,
      ciclo,
      tipoCobranca: data.tipoCobranca,
      cpfCnpj: cpfCnpjClean,
    };

    if (data.tipoCobranca === "CREDIT_CARD") {
      payload.creditCard = {
        holderName: data.cardName,
        number: data.cardNumber.replace(/\s/g, ""),
        expiryMonth: data.cardExpiryMonth,
        expiryYear: data.cardExpiryYear,
        ccv: data.cardCvv,
      };
      payload.creditCardHolderInfo = {
        name: data.holderName,
        email: data.holderEmail,
        cpfCnpj: cpfCnpjClean,
        postalCode: data.holderPostalCode.replace(/\D/g, ""),
        addressNumber: data.holderAddressNumber,
        phone: data.holderPhone.replace(/\D/g, ""),
      };
    }

    await onSubmit(payload);
  };

  // Type-safe register/setValue/errors for credit card fields
  const ccRegister = register as unknown as PaymentFormProps["onSubmit"] extends never
    ? never
    : typeof register;
  const ccSetValue = setValue as unknown as typeof setValue;
  const ccErrors = errors as typeof errors;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col gap-6 w-full"
    >
      <SubscriptionSummary plano={plano} ciclo={ciclo} />

      <form onSubmit={handleSubmit(processSubmit)} className="flex flex-col gap-6">
        {/* Payment method */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter">
            Forma de pagamento
          </p>
          <PaymentMethodSelector value={tipoCobranca} onChange={handleMethodChange} />
        </div>

        {/* Credit card fields */}
        {tipoCobranca === "CREDIT_CARD" ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <CreditCardForm
              register={ccRegister as any}
              setValue={ccSetValue as any}
              errors={ccErrors as any}
            />
            <CardHolderForm
              register={ccRegister as any}
              setValue={ccSetValue as any}
              errors={ccErrors as any}
              cpfCnpjRegistration={{
                ...register("cpfCnpj"),
                onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue("cpfCnpj", maskCpfCnpj(e.target.value), { shouldValidate: true });
                },
              }}
              cpfCnpjError={errors.cpfCnpj?.message}
              cpfCnpjHint="Documento de quem aparecerá como pagador na fatura."
            />
          </motion.div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter">
              Dados para cobrança
            </p>
            <FormInput
              id="cpfCnpj"
              label="CPF/CNPJ do pagador"
              registration={{
                ...register("cpfCnpj"),
                onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue("cpfCnpj", maskCpfCnpj(e.target.value), { shouldValidate: true });
                },
              }}
              error={errors.cpfCnpj?.message}
              placeholder="000.000.000-00"
              hint="Documento que aparecerá no boleto."
            />
          </div>
        )}

        {/* Trust signal */}
        <div className="flex items-center justify-center gap-2 text-neutral-500">
          <Lock size={13} />
          <span className="text-xs font-inter">Pagamento seguro processado via Asaas</span>
        </div>

        {/* Error */}
        {apiError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <p className="text-red-400 text-sm text-center font-inter">{apiError}</p>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-white/[0.03] hover:bg-white/[0.06] text-neutral-400 hover:text-white text-sm font-medium font-inter transition-all duration-200 sm:w-auto"
          >
            <ArrowLeft size={15} />
            Voltar
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Processando...
              </>
            ) : (
              "Assinar agora"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
