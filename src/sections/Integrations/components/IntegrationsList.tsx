import { Calendar, FileSignature, FileText, Mail, MessageCircle, type LucideIcon } from "lucide-react";

interface Integration {
  icon: LucideIcon;
  label: string;
  description: string;
}

const integrations: Integration[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Lembretes automáticos via WhatsApp para seus pacientes.",
  },
  {
    icon: FileSignature,
    label: "Assinatura Digital",
    description: "Profissionais podem assinar digitalmente os documentos com validade jurídica.",
  },
  // {
  //   icon: Calendar,
  //   label: "Google Calendar",
  //   description: "Sincronize agendamentos com Google Agenda e outros calendários.",
  // },
  // {
  //   icon: FileText,
  //   label: "TISS",
  //   description: "Integre com convênios e sistemas de faturamento TISS.",
  // },
  // {
  //   icon: Mail,
  //   label: "Gmail",
  //   description: "Envie confirmações e comunicados direto pelo Gmail da clínica.",
  // },
];

const IntegrationCard = ({
  icon: Icon,
  description,
}: {
  icon: LucideIcon;
  description: string;
  index: number;
}) => (
  <div className="relative w-full md:w-[326px] z-[3]">
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-11 rounded-2xl">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl shadow-[rgba(0,0,0,0.17)_0px_0.764039px_0.687635px_-0.5px,rgba(0,0,0,0.17)_0px_1.87166px_1.68449px_-1px,rgba(0,0,0,0.17)_0px_3.54652px_3.19187px_-1.5px,rgba(0,0,0,0.16)_0px_6.19129px_5.57216px_-2px,rgba(0,0,0,0.15)_0px_10.7756px_9.69802px_-2.5px,rgba(0,0,0,0.12)_0px_19.7367px_17.7631px_-3px,rgba(0,0,0,0.08)_0px_39px_35.1px_-3.5px,rgba(138,165,255,0.5)_0px_2px_4px_0px_inset] bg-white/[0.04] border border-white/[0.08]">
        <Icon size={24} className="text-indigo-400" />
      </div>
      {/* Description */}
      <p className="text-violet-100/70 text-base font-inter tracking-[-0.32px] leading-[25.6px] text-center break-words z-[2]">
        {description}
      </p>
    </div>
  </div>
);

const CenterLogo = () => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] z-[2]">
    <div className="flex items-center justify-center p-7">
      <img
        src="/nexa-icon-light.svg"
        alt="Nexa"
        className="h-[64px] w-[64px] object-contain"
      />
    </div>
  </div>
);

const PULSE_DURATION = '4.5s';
const PULSE_BG_H = 'linear-gradient(90deg, transparent 0%, rgba(138,165,255,0.15) 15%, rgba(138,165,255,0.9) 50%, rgba(138,165,255,0.15) 85%, transparent 100%)';
const PULSE_BG_V = 'linear-gradient(180deg, transparent 0%, rgba(138,165,255,0.15) 15%, rgba(138,165,255,0.9) 50%, rgba(138,165,255,0.15) 85%, transparent 100%)';
const PULSE_SHADOW = '0 0 1px 0px rgba(138,165,255,0.25)';

const DecorativeLines = () => (
  <>
    {/* Static base lines */}
    <div className="absolute top-1/2 -translate-y-[calc(50%+20px)] inset-x-0 h-[2px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(138,165,255,0.35)_0%,rgba(138,165,255,0.08)_70%,transparent_100%)] z-0" />
    <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-[2px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(138,165,255,0.35)_0%,rgba(138,165,255,0.08)_70%,transparent_100%)] z-0" />

    {/* Pulse orb — RIGHT */}
    <div
      className="absolute left-1/2 top-[calc(50%-20px)] w-[120px] h-[2px] rounded-full z-[1]"
      style={{
        background: PULSE_BG_H,
        boxShadow: PULSE_SHADOW,
        animation: `pulse-line-right ${PULSE_DURATION} linear infinite`,
      }}
    />

    {/* Pulse orb — LEFT */}
    <div
      className="absolute left-1/2 top-[calc(50%-20px)] w-[120px] h-[2px] rounded-full z-[1]"
      style={{
        background: PULSE_BG_H,
        boxShadow: PULSE_SHADOW,
        animation: `pulse-line-left ${PULSE_DURATION} linear infinite`,
      }}
    />

    {/* Pulse orb — DOWN */}
    <div
      className="absolute left-1/2 top-[calc(50%-20px)] h-[120px] w-[2px] rounded-full z-[1]"
      style={{
        background: PULSE_BG_V,
        boxShadow: PULSE_SHADOW,
        animation: `pulse-line-down ${PULSE_DURATION} linear infinite`,
      }}
    />

    {/* Pulse orb — UP */}
    <div
      className="absolute left-1/2 top-[calc(50%-20px)] h-[120px] w-[2px] rounded-full z-[1]"
      style={{
        background: PULSE_BG_V,
        boxShadow: PULSE_SHADOW,
        animation: `pulse-line-up ${PULSE_DURATION} linear infinite`,
      }}
    />

    {/* Glowing accents at intersection points */}
    <div className="absolute left-1/2 top-[calc(50%-20px)] -translate-x-[116px] -translate-y-1/2 w-0.5 bg-[linear-gradient(rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-[calc(50%-20px)] translate-x-[116px] -translate-y-1/2 w-0.5 bg-[linear-gradient(0deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-[calc(50%-20px)] -translate-x-1/2 -translate-y-[116px] w-[26px] bg-[linear-gradient(270deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />
    <div className="absolute left-1/2 top-[calc(50%-20px)] -translate-x-1/2 translate-y-[116px] w-[26px] bg-[linear-gradient(90deg,rgb(138,165,255)_0%,rgba(161,117,255,0)_62%)] shadow-[rgba(184,156,255,0.34)_0px_0px_96px_3px] opacity-50 rotate-[-89deg] z-[1]" />

  </>
);

export const IntegrationsList = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-[30px] gap-x-[150px] w-full max-w-[800px] mx-auto overflow-hidden">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={integration.label}
            icon={integration.icon}
            description={integration.description}
            index={index}
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
