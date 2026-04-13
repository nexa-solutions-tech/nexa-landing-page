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
}

export const CardHolderForm = ({
  register,
  setValue,
  errors,
  cpfCnpjRegistration,
  cpfCnpjError,
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
          placeholder="João Marcos Silva"
        />

        <FormInput
          id="holderEmail"
          label="E-mail"
          type="email"
          registration={register("holderEmail")}
          error={errors.holderEmail?.message}
          placeholder="joao@email.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="cpfCnpj"
          label="CPF ou CNPJ"
          registration={cpfCnpjRegistration}
          error={cpfCnpjError}
          placeholder="000.000.000-00"
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
          placeholder="(11) 99999-0000"
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
          placeholder="00000-000"
        />

        <FormInput
          id="holderAddressNumber"
          label="Número"
          inputMode="numeric"
          maxLength={10}
          registration={register("holderAddressNumber")}
          error={errors.holderAddressNumber?.message}
          placeholder="123"
        />
      </div>
    </div>
  );
};
