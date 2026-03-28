import { FormInput } from "@/pages/Cadastro/components/FormInput";
import type { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";
import { maskCardNumber } from "../utils/masks";
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
        registration={{
          ...register("cardNumber"),
          onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("cardNumber", maskCardNumber(e.target.value));
          },
        }}
        error={errors.cardNumber?.message}
        placeholder="0000 0000 0000 0000"
      />

      <FormInput
        id="cardName"
        label="Nome impresso no cartão"
        registration={register("cardName")}
        error={errors.cardName?.message}
        placeholder="JOÃO M SILVA"
      />

      <div className="grid grid-cols-3 gap-3">
        <FormInput
          id="cardExpiryMonth"
          label="Mês"
          registration={register("cardExpiryMonth")}
          error={errors.cardExpiryMonth?.message}
          placeholder="01"
        />
        <FormInput
          id="cardExpiryYear"
          label="Ano"
          registration={register("cardExpiryYear")}
          error={errors.cardExpiryYear?.message}
          placeholder="2027"
        />
        <FormInput
          id="cardCvv"
          label="CVV"
          registration={register("cardCvv")}
          error={errors.cardCvv?.message}
          placeholder="123"
        />
      </div>
    </div>
  );
};
