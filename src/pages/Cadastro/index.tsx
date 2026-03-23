import { FadeIn, GradientBlob, LightRays, SectionBadge } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Step1Clinica } from "./components/Step1Clinica";
import { Step2Acesso } from "./components/Step2Acesso";
import { StepIndicator } from "./components/StepIndicator";
import { SuccessScreen } from "./components/SuccessScreen";
import type { FormData, FormErrors, SuccessData } from "./types";
import { registerClinica } from "./utils/api";
import { isValidCnpj } from "./utils/cnpj";

const INITIAL_FORM: FormData = {
  nomeClinica: "",
  cnpj: "",
  especialidade: "",
  faixaProfissionais: "",
  telefone: "",
  adminNome: "",
  adminEmail: "",
  adminSenha: "",
};

function validateStep1(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nomeClinica.trim() || data.nomeClinica.trim().length < 2) {
    errors.nomeClinica = "Nome da clínica é obrigatório (mínimo 2 caracteres)";
  }
  if (!data.cnpj.trim()) {
    errors.cnpj = "CNPJ é obrigatório";
  } else if (!isValidCnpj(data.cnpj)) {
    errors.cnpj = "CNPJ inválido — informe os 14 dígitos";
  }
  return errors;
}

function validateStep2(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.adminNome.trim()) {
    errors.adminNome = "Nome é obrigatório";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.adminEmail.trim()) {
    errors.adminEmail = "E-mail é obrigatório";
  } else if (!emailRegex.test(data.adminEmail)) {
    errors.adminEmail = "E-mail inválido";
  }
  if (!data.adminSenha) {
    errors.adminSenha = "Senha é obrigatória";
  } else if (data.adminSenha.length < 8) {
    errors.adminSenha = "Senha deve ter pelo menos 8 caracteres";
  }
  return errors;
}

export const CadastroPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleNext = () => {
    const errs = validateStep1(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleBack = () => {
    setErrors({});
    setApiError(null);
    setStep(1);
  };

  const handleSubmit = async () => {
    const errs = validateStep2(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setApiError(null);
    setIsLoading(true);
    try {
      const result = await registerClinica(formData);
      setSuccessData(result);
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Erro inesperado. Tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-inter">
      {/* Background decorations */}
      <LightRays topOffset="-600px" />
      <GradientBlob className="top-0 bottom-auto" />

      {/* Minimal header */}
      <header className="fixed z-[8] top-0 inset-x-0 h-[68px] flex items-center px-6 md:px-10 backdrop-blur-sm bg-gradient-to-b from-black/80 to-transparent">
        <Link to="/" className="flex items-center gap-2">
          <svg
            className="w-7 h-7 text-indigo-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <span className="text-white font-bold text-lg font-inter tracking-tight">
            NexaClinic
          </span>
        </Link>
      </header>

      {/* Main content */}
      <main className="relative flex flex-col items-center pt-[100px] pb-16 px-[18px]">
        <FadeIn direction="up" className="w-full flex justify-center">
          <div className="w-full max-w-[480px] flex flex-col gap-6">

            {!successData ? (
              <>
                {/* Page header */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <SectionBadge>14 dias grátis · Sem cartão de crédito</SectionBadge>
                  <h1 className="text-3xl md:text-4xl font-semibold font-inter tracking-tight text-white">
                    Crie sua conta
                  </h1>
                  <p className="text-neutral-400 text-sm font-inter">
                    Acesso completo a todas as funcionalidades. Cancele quando quiser.
                  </p>
                </div>

                {/* Step indicator */}
                <StepIndicator currentStep={step} />

                {/* Form card with animated step transition */}
                <div className="relative p-px rounded-2xl bg-[linear-gradient(180deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] w-full">
                  <div className="rounded-2xl bg-[radial-gradient(96%_96%_at_49.3%_-25.1%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] p-8 w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: step === 2 ? 24 : -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: step === 2 ? -24 : 24 }}
                        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full"
                      >
                        {step === 1 ? (
                          <Step1Clinica
                            data={formData}
                            errors={errors}
                            onChange={handleChange}
                            onNext={handleNext}
                          />
                        ) : (
                          <Step2Acesso
                            data={formData}
                            errors={errors}
                            onChange={handleChange}
                            onBack={handleBack}
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {apiError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <p className="text-red-400 text-sm text-center font-inter">
                          {apiError}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <p className="text-neutral-600 text-xs text-center font-inter">
                  Ao criar sua conta você concorda com os{" "}
                  <a href="/termos" className="underline underline-offset-2 text-neutral-500 hover:text-neutral-300 transition-colors">
                    Termos de Uso
                  </a>{" "}
                  e a{" "}
                  <a href="/privacidade" className="underline underline-offset-2 text-neutral-500 hover:text-neutral-300 transition-colors">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </>
            ) : (
              <SuccessScreen data={successData} />
            )}

          </div>
        </FadeIn>
      </main>
    </div>
  );
};
