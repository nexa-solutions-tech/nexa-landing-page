import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { FormData, FormErrors } from "../types";
import { FormInput } from "./FormInput";

interface Step2AcessoProps {
  data: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const Step2Acesso = ({
  data,
  errors,
  onChange,
  onBack,
  onSubmit,
  isLoading,
}: Step2AcessoProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  function maskTelefone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <FormInput
        id="adminNome"
        label="Seu nome completo"
        value={data.adminNome}
        onChange={(v) => onChange("adminNome", v)}
        error={errors.adminNome}
        placeholder="João Silva"
      />

      <FormInput
        id="telefone"
        label="Telefone"
        value={data.telefone}
        onChange={(v) => onChange("telefone", maskTelefone(v))}
        placeholder="(00) 00000-0000"
        optional
      />

      <FormInput
        id="adminEmail"
        label="E-mail"
        type="email"
        value={data.adminEmail}
        onChange={(v) => onChange("adminEmail", v)}
        error={errors.adminEmail}
        placeholder="joao@clinica.com.br"
      />

      <FormInput
        id="adminSenha"
        label="Senha"
        value={data.adminSenha}
        onChange={(v) => onChange("adminSenha", v)}
        error={errors.adminSenha}
        placeholder="Mínimo 8 caracteres"
        hint="Use letras, números e símbolos para uma senha forte"
        showPasswordToggle
        passwordVisible={passwordVisible}
        onTogglePassword={() => setPasswordVisible((prev) => !prev)}
      />

      <button
        type="button"
        onClick={onSubmit}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full mt-1 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Criando conta…
          </>
        ) : (
          "Criar Conta Grátis"
        )}
      </button>

      <button
        type="button"
        onClick={onBack}
        disabled={isLoading}
        className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors text-center underline underline-offset-2 font-inter disabled:pointer-events-none"
      >
        ← Voltar
      </button>
    </div>
  );
};
