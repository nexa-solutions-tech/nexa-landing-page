import { FormInput } from "@/pages/Cadastro/components/FormInput";
import type { UseFormRegister, UseFormSetValue, UseFormRegisterReturn, FieldErrors } from "react-hook-form";
import { maskPhone, maskPostalCode } from "../utils/masks";
import type { PaymentFormData } from "../types";

type CreditCardData = Extract<PaymentFormData, { tipoCobranca: "CREDIT_CARD" }>;

interface CardHolderFormProps {
  register: UseFormRegister<CreditCardData>;
  setValue: UseFormSetValue<CreditCardData>;
  errors: FieldErrors<CreditCardData>;
  cpfCnpjRegistration: UseFormRegisterReturn & {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  cpfCnpjError?: string;
  cpfCnpjHint?: string;
}

export const CardHolderForm = ({
  register,
  setValue,
  errors,
  cpfCnpjRegistration,
  cpfCnpjError,
  cpfCnpjHint,
}: CardHolderFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter">
        Dados do titular
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="holderName"
          label="Nome completo"
          registration={register("holderName")}
          error={errors.holderName?.message}
          placeholder="Digite seu nome completo"
        />

        <FormInput
          id="holderEmail"
          label="E-mail"
          type="email"
          registration={register("holderEmail")}
          error={errors.holderEmail?.message}
          placeholder="Digite seu e-mail"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="cpfCnpj"
          label="CPF/CNPJ do titular"
          registration={cpfCnpjRegistration}
          error={cpfCnpjError}
          placeholder="Digite o CPF ou CNPJ"
          hint={cpfCnpjHint}
        />

        <FormInput
          id="holderPhone"
          label="Telefone"
          registration={{
            ...register("holderPhone"),
            onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("holderPhone", maskPhone(e.target.value), { shouldValidate: true });
            },
          }}
          error={errors.holderPhone?.message}
          placeholder="Digite seu telefone"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          id="holderPostalCode"
          label="CEP"
          registration={{
            ...register("holderPostalCode"),
            onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("holderPostalCode", maskPostalCode(e.target.value), { shouldValidate: true });
            },
          }}
          error={errors.holderPostalCode?.message}
          placeholder="Digite o CEP"
        />

        <FormInput
          id="holderAddressNumber"
          label="Número"
          inputMode="numeric"
          maxLength={10}
          registration={register("holderAddressNumber")}
          error={errors.holderAddressNumber?.message}
          placeholder="Digite o número"
        />
      </div>
    </div>
  );
};
