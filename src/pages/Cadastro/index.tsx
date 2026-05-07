import { FadeIn, GradientBlob, LightRays, SectionBadge } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock, CreditCard, Loader2, Shield, Star, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FormInput } from "./components/FormInput";
import { SuccessScreen } from "./components/SuccessScreen";
import {
  cadastroSchema,
  type CadastroFormData,
  type CadastroPayload,
  type SuccessData,
} from "./types";
import { registerClinica } from "./utils/api";
import { maskCnpj } from "./utils/cnpj";

export const CadastroPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planoParam = searchParams.get("plano");
  const cicloParam = searchParams.get("ciclo");

  const [apiError, setApiError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      adminNome: "",
      adminEmail: "",
      nomeClinica: "",
      cnpj: "",
      adminSenha: "",
    },
  });

  const onSubmit = async (data: CadastroPayload) => {
    setApiError(null);
    try {
      const result = await registerClinica(data);

      if (planoParam) {
        // Repassa o CNPJ informado no cadastro para a etapa de pagamento
        // pré-preencher o campo de documento do titular do cartão.
        // sessionStorage evita expor o CNPJ na URL.
        if (data.cnpj) {
          sessionStorage.setItem("nexa.cadastro.cnpj", data.cnpj);
        }
        const ciclo = cicloParam === "YEARLY" ? "YEARLY" : "MONTHLY";
        navigate(`/assinar?token=${result.token}&plano=${planoParam}&ciclo=${ciclo}`);
        return;
      }

      setSuccessData(result);
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Erro inesperado. Tente novamente."
      );
    }
  };

  return (
    <div className={`relative bg-black text-white font-inter ${successData ? "h-screen overflow-hidden" : "min-h-screen"}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightRays topOffset="-600px" />
        <GradientBlob className="top-0 bottom-auto" />
      </div>

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
          <div className="w-full max-w-[480px] md:max-w-[600px] flex flex-col gap-4">

            {!successData ? (
              <>
                {/* Page header */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <SectionBadge>
                    {planoParam ? "Crie sua conta para assinar" : "14 dias grátis · Sem cartão de crédito"}
                  </SectionBadge>
                  <h1 className="text-3xl md:text-4xl font-semibold font-inter tracking-tight text-white">
                    {planoParam ? "Cadastre sua clínica" : "Comece seu teste gratuito"}
                  </h1>
                  <p className="text-neutral-400 text-sm font-inter">
                    {planoParam
                      ? "Após o cadastro, você será direcionado para finalizar sua assinatura."
                      : "Acesso completo por 14 dias. Sem compromisso, cancele a qualquer momento."}
                  </p>
                </div>

                {/* Form card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative p-px rounded-2xl bg-[linear-gradient(180deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] w-full"
                >
                  <div className="rounded-2xl bg-[radial-gradient(96%_96%_at_49.3%_-25.1%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] p-5 md:p-8 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">

                      {/* Section: Seus dados */}
                      <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter">
                        Seus dados
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput
                          id="adminNome"
                          label="Seu nome"
                          registration={register("adminNome")}
                          error={errors.adminNome?.message}
                          placeholder="João Silva"
                        />

                        <FormInput
                          id="adminEmail"
                          label="E-mail"
                          type="email"
                          registration={register("adminEmail")}
                          error={errors.adminEmail?.message}
                          placeholder="joao@clinica.com.br"
                        />
                      </div>

                      {/* Section: Sua clínica */}
                      <div className="border-t border-neutral-800 pt-5 mt-1">
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter mb-5">
                          Sua clínica
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormInput
                            id="nomeClinica"
                            label="Nome da clínica"
                            registration={register("nomeClinica")}
                            error={errors.nomeClinica?.message}
                            placeholder="Ex: Clínica São Paulo"
                          />

                          <FormInput
                            id="cnpj"
                            label="CNPJ"
                            registration={{
                              ...register("cnpj"),
                              onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
                                setValue("cnpj", maskCnpj(e.target.value), {
                                  shouldValidate: !!errors.cnpj,
                                });
                              },
                            }}
                            error={errors.cnpj?.message}
                            placeholder="00.000.000/0000-00"
                            hint="Você pode adicionar depois"
                            optional
                          />
                        </div>
                      </div>

                      {/* Section: Segurança */}
                      <div className="border-t border-neutral-800 pt-5 mt-1">
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-inter mb-5">
                          Segurança
                        </p>

                        <FormInput
                          id="adminSenha"
                          label="Senha"
                          registration={register("adminSenha")}
                          error={errors.adminSenha?.message}
                          placeholder="Mínimo 8 caracteres"
                          hint="Mínimo 8 caracteres"
                          showPasswordToggle
                          passwordVisible={passwordVisible}
                          onTogglePassword={() => setPasswordVisible((prev) => !prev)}
                        />
                      </div>

                      {/* CTA Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Preparando sua clínica…
                          </>
                        ) : planoParam ? (
                          "Criar conta e assinar"
                        ) : (
                          "Começar meu teste gratuito"
                        )}
                      </button>

                      {/* Trust signals */}
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <Shield size={13} />
                          Dados protegidos
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <Clock size={13} />
                          Configuração em 2 minutos
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <CreditCard size={13} />
                          Sem cartão necessário
                        </span>
                      </div>
                    </form>

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
                </motion.div>

                {/* Social proof */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-neutral-300 font-inter">
                      +200 clínicas já confiam na Nexa
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-neutral-500 ml-1.5 font-inter">
                      4.9/5 de satisfação
                    </span>
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
