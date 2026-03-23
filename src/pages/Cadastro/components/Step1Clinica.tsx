import * as Select from "@radix-ui/react-select";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import type { FormData, FormErrors } from "../types";
import { maskCnpj } from "../utils/cnpj";
import { FormInput } from "./FormInput";

const FAIXAS = [
  { value: "DE_1_A_5",   label: "1 a 5 profissionais" },
  { value: "DE_6_A_10",  label: "6 a 10 profissionais" },
  { value: "DE_11_A_20", label: "11 a 20 profissionais" },
  { value: "DE_21_A_50", label: "21 a 50 profissionais" },
  { value: "MAIS_DE_50", label: "Mais de 50 profissionais" },
];

interface Step1ClinicaProps {
  data: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}

export const Step1Clinica = ({ data, errors, onChange, onNext }: Step1ClinicaProps) => {
  const handleCnpjChange = (value: string) => {
    onChange("cnpj", maskCnpj(value));
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <FormInput
        id="nomeClinica"
        label="Nome da clínica"
        value={data.nomeClinica}
        onChange={(v) => onChange("nomeClinica", v)}
        error={errors.nomeClinica}
        placeholder="Ex: Clínica São Paulo"
      />

      <FormInput
        id="cnpj"
        label="CNPJ"
        value={data.cnpj}
        onChange={handleCnpjChange}
        error={errors.cnpj}
        placeholder="00.000.000/0000-00"
        hint="Digite apenas os números"
      />

      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm font-medium text-neutral-300 font-inter">
          Quantidade de profissionais
        </label>
        <Select.Root
          value={data.faixaProfissionais}
          onValueChange={(v) => onChange("faixaProfissionais", v)}
        >
          <Select.Trigger className="flex items-center justify-between w-full bg-neutral-900 border border-neutral-700 hover:border-neutral-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 rounded-xl px-4 py-3 text-sm font-inter transition-all duration-200 outline-none cursor-pointer data-[placeholder]:text-neutral-600">
            <Select.Value placeholder="Selecione uma faixa" />
            <Select.Icon>
              <ChevronDown size={16} className="text-neutral-500" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              position="popper"
              sideOffset={6}
              className="z-[50] w-[--radix-select-trigger-width] bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-xl"
            >
              <Select.Viewport className="p-1">
                {FAIXAS.map((faixa) => (
                  <Select.Item
                    key={faixa.value}
                    value={faixa.value}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-inter text-neutral-300 cursor-pointer select-none outline-none hover:bg-neutral-800 focus:bg-neutral-800 data-[state=checked]:text-white data-[state=checked]:bg-indigo-600/20 transition-colors"
                  >
                    <Select.ItemText>{faixa.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check size={14} className="text-indigo-400" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="flex items-center justify-center gap-2 w-full mt-1 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
      >
        Próximo
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
