const integrations = [
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-20.svg",
    description: "Lembretes automáticos via WhatsApp para seus pacientes.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-21.svg",
    description: "Sincronize agendamentos com Google Agenda e outros calendários.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-22.svg",
    description: "Integre com convênios e sistemas de faturamento TISS",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-23.svg",
    description: "Conecte com dezenas de outras ferramentas sem código",
  },
];

const IntegrationCard = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => (
  <div className="relative w-full md:w-[326px] z-[3]">
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-11 rounded-2xl">
      {/* Icon Container */}
      <div className="flex items-center justify-center p-2 rounded-lg shadow-[rgba(0,0,0,0.17)_0px_0.764039px_0.687635px_-0.5px,rgba(0,0,0,0.17)_0px_1.87166px_1.68449px_-1px,rgba(0,0,0,0.17)_0px_3.54652px_3.19187px_-1.5px,rgba(0,0,0,0.16)_0px_6.19129px_5.57216px_-2px,rgba(0,0,0,0.15)_0px_10.7756px_9.69802px_-2.5px,rgba(0,0,0,0.12)_0px_19.7367px_17.7631px_-3px,rgba(0,0,0,0.08)_0px_39px_35.1px_-3.5px,rgba(138,165,255,0.5)_0px_2px_4px_0px_inset]">
        <img
          src={icon}
          alt="Integration icon"
          className="w-[35px] h-[38px] text-indigo-400"
        />
      </div>
      {/* Description */}
      <p className="text-violet-100/70 text-base font-inter tracking-[-0.32px] leading-[25.6px] text-center break-words z-[2]">
        {description}
      </p>
    </div>
  </div>
);

const CenterLogo = () => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
    <div className="flex items-center justify-center gap-2.5 p-7">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Glowing dot */}
        <div className="relative w-[22px] h-[22px] bg-blue-700 rounded-full shadow-[rgba(82,151,255,0.5)_0px_0px_20px_0px] overflow-hidden" />
        
        {/* Pulsing rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[21px] h-[21px] bg-blue-700 rounded-full opacity-50 z-[1]" />
        
        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[42px] z-[1]">
          <a className="flex items-center justify-center h-full w-[130px] gap-1.5 overflow-hidden">
            <div className="relative w-[108px] h-[42px]">
              <img
                src="https://c.animaapp.com/mkvwf206SqHHjG/assets/dgVEBclaou1On3YT6iSCEOOKkHg.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const DecorativeLines = () => (
  <>
    {/* Horizontal line */}
    <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-1 bg-[radial-gradient(63.6719%_63.6719%_at_50%_50%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] opacity-[0.14] z-0" />
    
    {/* Vertical line */}
    <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-1 bg-[radial-gradient(63.6719%_63.6719%_at_50%_50%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] opacity-[0.14] z-[1]" />
    
    {/* Glowing accents */}
    <div className="absolute left-1/2 top-1/2 -translate-x-[116px] -translate-y-1/2 w-0.5 h-[26px] bg-[linear-gradient(rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-1/2 translate-x-[116px] -translate-y-1/2 w-0.5 h-[26px] bg-[linear-gradient(0deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[116px] h-0.5 w-[26px] bg-[linear-gradient(270deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[116px] h-0.5 w-[26px] bg-[linear-gradient(90deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
  </>
);

export const IntegrationsList = () => {
  return (
    <div className="relative w-full">
      <div className="relative flex flex-wrap items-center justify-center gap-[150px] w-full">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            icon={integration.icon}
            description={integration.description}
          />
        ))}
        
        {/* Center element - only visible on md+ */}
        <div className="hidden md:block">
          <CenterLogo />
          <DecorativeLines />
        </div>
      </div>
    </div>
  );
};
