// Features for NexaClinic (positive)
const nexaClinicFeatures = [
  "Colaboração fácil entre profissionais",
  "Análise de dados integrada",
  "Automação de processos",
  "Automação de processos",
  "Automação de processos",
];

// Features for Others (negative)
const othersFeatures = [
  "Colaboração limitada entre profissionais",
  "Opções rígidas e não escaláveis",
  "Funcionalidades básicas de dashboard",
  "Falta de análises avançadas",
  "Interfaces desatualizadas e complexas",
];

// Divider line component
const FeatureDivider = () => (
  <div className="hidden md:block w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
);

// Feature item component
const FeatureItem = ({
  text,
  isPositive,
}: {
  text: string;
  isPositive: boolean;
}) => (
  <div className="flex items-center gap-2.5 w-full">
    <img
      src={
        isPositive
          ? "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-24.svg"
          : "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-26.svg"
      }
      alt={isPositive ? "Check" : "X"}
      className={`shrink-0 ${isPositive ? "w-[19px] h-5" : "w-3.5 h-[17px]"}`}
    />
    <p className="text-violet-100/70 text-base font-inter tracking-[-0.32px] leading-[25.6px] break-words flex-1">
      {text}
    </p>
  </div>
);

// Card wrapper with gradient border
const ComparisonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full z-[1]">
    <div className="p-px rounded-2xl bg-[radial-gradient(96%_96%_at_48.8%_-35.7%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)]">
      <div className="flex flex-col items-center gap-5 px-[30px] py-6 rounded-2xl bg-[radial-gradient(96%_96%_at_36.1%_27.7%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]">
        {children}
      </div>
    </div>
  </div>
);

// Column header for NexaClinic
const NexaClinicHeader = () => (
  <div className="flex items-center justify-center h-[62px] w-full">
    <div className="flex items-center gap-2">
      <svg
        className="w-7 h-7 text-indigo-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
      <span className="text-white font-bold text-xl font-inter tracking-tight">
        NexaClinic
      </span>
    </div>
  </div>
);

// Column header for Others
const OthersHeader = () => (
  <div className="flex items-center justify-center gap-2 h-[62px] w-full p-1.5 rounded-xl">
    <img
      src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-25.svg"
      alt="Others icon"
      className="w-6 h-6 text-white"
    />
    <h3 className="text-white text-2xl font-medium font-inter tracking-[-0.48px] leading-7 text-center whitespace-nowrap">
      Outros
    </h3>
  </div>
);

export const ComparisonTable = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full max-w-[1000px] mx-auto">
      {/* NexaClinic Column */}
      <div className="flex flex-col items-center gap-2 w-full md:flex-1 md:min-w-[350px]">
        <NexaClinicHeader />
        <ComparisonCard>
          {nexaClinicFeatures.map((feature, index) => (
            <div key={index} className="w-full">
              <FeatureItem text={feature} isPositive />
              {index < nexaClinicFeatures.length - 1 && <FeatureDivider />}
            </div>
          ))}
        </ComparisonCard>
      </div>

      {/* Others Column */}
      <div className="flex flex-col items-center gap-2 w-full md:flex-1 md:min-w-[350px]">
        <OthersHeader />
        <ComparisonCard>
          {othersFeatures.map((feature, index) => (
            <div key={index} className="w-full">
              <FeatureItem text={feature} isPositive={false} />
              {index < othersFeatures.length - 1 && <FeatureDivider />}
            </div>
          ))}
        </ComparisonCard>
      </div>
    </div>
  );
};
