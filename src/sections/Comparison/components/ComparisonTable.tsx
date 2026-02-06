// Features for FisioClinic (positive)
const fisioClinicFeatures = [
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

// Column header for FisioClinic
const FisioClinicHeader = () => (
  <div className="flex items-center justify-center h-[62px] w-full overflow-hidden">
    <a className="flex items-center gap-1.5 h-9 w-[130px] overflow-hidden">
      <div className="relative h-[34px] w-[118px]">
        <img
          src="https://c.animaapp.com/mkvwf206SqHHjG/assets/FbO4dnbdmZd5UO3ULm6CTPenvIo.png"
          alt="FisioClinic Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </a>
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
      {/* FisioClinic Column */}
      <div className="flex flex-col items-center gap-2 w-full md:flex-1 md:min-w-[350px]">
        <FisioClinicHeader />
        <ComparisonCard>
          {fisioClinicFeatures.map((feature, index) => (
            <div key={index} className="w-full">
              <FeatureItem text={feature} isPositive />
              {index < fisioClinicFeatures.length - 1 && <FeatureDivider />}
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
