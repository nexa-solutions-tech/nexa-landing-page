import { FormInput } from "@/pages/Cadastro/components/FormInput";
import type { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";
import { maskCardNumber, maskExpiryMonth, maskExpiryYear, maskCvv } from "../utils/masks";
import type { PaymentFormData } from "../types";

interface CreditCardFormProps {
  register: UseFormRegister<Extract<PaymentFormData, { tipoCobranca: "CREDIT_CARD" }>>;
  setValue: UseFormSetValue<Extract<PaymentFormData, { tipoCobranca: "CREDIT_CARD" }>>;
  errors: FieldErrors<Extract<PaymentFormData, { tipoCobranca: "CREDIT_CARD" }>>;
}

export const CreditCardForm = ({ register, setValue, errors }: CreditCardFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter">
        Dados do cartão
      </p>

      <FormInput
        id="cardNumber"
        label="Número do cartão"
        inputMode="numeric"
        registration={{
          ...register("cardNumber"),
          onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("cardNumber", maskCardNumber(e.target.value), { shouldValidate: true });
          },
        }}
        error={errors.cardNumber?.message}
        placeholder="0000 0000 0000 0000"
      />

      <FormInput
        id="cardName"
        label="Nome impresso no cartão"
        registration={{
          ...register("cardName"),
          onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("cardName", e.target.value.toUpperCase(), { shouldValidate: true });
          },
        }}
        error={errors.cardName?.message}
        placeholder="JOÃO M SILVA"
      />

      <div className="grid grid-cols-3 gap-3">
        <FormInput
          id="cardExpiryMonth"
          label="Mês"
          inputMode="numeric"
          maxLength={2}
          registration={{
            ...register("cardExpiryMonth"),
            onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("cardExpiryMonth", maskExpiryMonth(e.target.value), { shouldValidate: true });
            },
          }}
          error={errors.cardExpiryMonth?.message}
          placeholder="01"
        />
        <FormInput
          id="cardExpiryYear"
          label="Ano"
          inputMode="numeric"
          maxLength={4}
          registration={{
            ...register("cardExpiryYear"),
            onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("cardExpiryYear", maskExpiryYear(e.target.value), { shouldValidate: true });
            },
          }}
          error={errors.cardExpiryYear?.message}
          placeholder="2027"
        />
        <FormInput
          id="cardCvv"
          label="CVV"
          inputMode="numeric"
          maxLength={4}
          registration={{
            ...register("cardCvv"),
            onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("cardCvv", maskCvv(e.target.value), { shouldValidate: true });
            },
          }}
          error={errors.cardCvv?.message}
          placeholder="123"
        />
      </div>
    </div>
  );
};
