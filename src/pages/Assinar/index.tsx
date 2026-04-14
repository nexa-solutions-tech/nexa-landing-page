import { FadeIn, GradientBlob, LightRays } from "@/components";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PaymentForm } from "./components/PaymentForm";
import { PlanSelection } from "./components/PlanSelection";
import { StepIndicator } from "./components/StepIndicator";
import { SuccessScreen } from "./components/SuccessScreen";
import type { AssinaturaPayload, CheckoutStep, Ciclo, PlanoAPI, PlanoNome, TipoCobranca } from "./types";
import { createAssinatura, fetchPlanos } from "./utils/api";

const LOGIN_URL = "https://nexasolutionstech.com.br/login";

export const AssinarPage = () => {
  const [searchParams] = useSearchParams();
  const tokenRef = useRef<string | null>(null);
  const didFetchRef = useRef(false);

  const [step, setStep] = useState<CheckoutStep>(1);
  const [planos, setPlanos] = useState<PlanoAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [selectedPlano, setSelectedPlano] = useState<PlanoNome | null>(null);
  const [tipoCobranca, setTipoCobranca] = useState<TipoCobranca>("CREDIT_CARD");
  const [ciclo, setCiclo] = useState<Ciclo>(
    searchParams.get("ciclo") === "YEARLY" ? "YEARLY" : "MONTHLY"
  );

  // Extract token on mount
  useEffect(() => {
    if (didFetchRef.current) return;

    const token = searchParams.get("token");
    if (!token) {
      window.location.href = LOGIN_URL;
      return;
    }

    didFetchRef.current = true;
    tokenRef.current = token;

    // Clean token from URL for security
    const url = new URL(window.location.href);
    url.searchParams.delete("token");
    const planoParam = url.searchParams.get("plano");
    url.searchParams.delete("plano");
    url.searchParams.delete("ciclo");
    window.history.replaceState({}, "", url.pathname + url.search);

    // Load plans
    fetchPlanos(token)
      .then((data) => {
        setPlanos(data);

        // Pre-select plan if param is valid
        if (planoParam) {
          const upper = planoParam.toUpperCase() as PlanoNome;
          const valid = data.some((p) => p.nome === upper);
          if (valid) {
            setSelectedPlano(upper);
            setStep(2);
          }
        }
      })
      .catch((err) => {
        if (err instanceof Error && err.message === "UNAUTHORIZED") {
          window.location.href = LOGIN_URL;
          return;
        }
        setError(err instanceof Error ? err.message : "Erro ao carregar planos.");
      })
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getSelectedPlanoData = useCallback((): PlanoAPI | undefined => {
    return planos.find((p) => p.nome === selectedPlano);
  }, [planos, selectedPlano]);

  const handleSubmit = async (payload: AssinaturaPayload) => {
    setApiError(null);
    try {
      await createAssinatura(tokenRef.current!, payload);
      setTipoCobranca(payload.tipoCobranca);
      setStep(3);
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Erro ao criar assinatura. Tente novamente."
      );
    }
  };

  return (
    <div
      className={`relative bg-black text-white font-inter ${step === 3 ? "h-screen overflow-hidden" : "min-h-screen"}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightRays topOffset="-600px" />
        <GradientBlob className="top-0 bottom-auto" />
      </div>

      {/* Header */}
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

      {/* Main */}
      <main className="relative flex flex-col items-center pt-[100px] pb-16 px-[18px]">
        <FadeIn direction="up" className="w-full flex justify-center">
          <div className={`w-full flex flex-col gap-5 ${step === 1 ? "max-w-[920px]" : "max-w-[680px]"}`}>
            {loading ? (
              <div className="flex flex-col items-center gap-4 pt-20">
                <Loader2 size={32} className="text-indigo-400 animate-spin" />
                <p className="text-neutral-400 text-sm font-inter">Carregando planos...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-4 pt-20">
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm text-center font-inter">{error}</p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="text-indigo-400 hover:text-indigo-300 text-sm font-inter underline underline-offset-2"
                >
                  Tentar novamente
                </button>
              </div>
            ) : (
              <>
                <StepIndicator currentStep={step} />

                {step === 1 && (
                  <PlanSelection
                    planos={planos}
                    ciclo={ciclo}
                    onCicloChange={setCiclo}
                    selectedPlano={selectedPlano}
                    onSelectPlano={setSelectedPlano}
                    onContinue={() => setStep(2)}
                  />
                )}

                {step === 2 && getSelectedPlanoData() && (
                  <PaymentForm
                    plano={getSelectedPlanoData()!}
                    ciclo={ciclo}
                    onBack={() => setStep(1)}
                    onSubmit={handleSubmit}
                    apiError={apiError}
                  />
                )}

                {step === 3 && selectedPlano && (
                  <SuccessScreen planoNome={selectedPlano} tipoCobranca={tipoCobranca} />
                )}
              </>
            )}
          </div>
        </FadeIn>
      </main>
    </div>
  );
};
