const features = [
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-9.svg",
    title: "Lembretes Automáticos",
    description:
      "Envie lembretes de consulta por WhatsApp de forma automática e reduza as faltas, sem esforço manual da recepção.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-10.svg",
    title: "Confirmação em Tempo Real",
    description:
      "Os pacientes confirmam ou cancelam pela própria mensagem e a agenda de todos os profissionais é atualizada na hora.",
  },
];

// Icon with gradient border effect
const FeatureIcon = ({ src }: { src: string }) => (
  <div className="relative flex justify-center items-center overflow-hidden rounded-lg p-[1.5px]">
    <div className="relative flex justify-center items-center bg-black rounded-lg p-2.5 z-[2]">
      <img src={src} alt="" className="w-[35px] h-[35px]" />
    </div>
    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-[linear-gradient(303deg,rgb(41,52,255)_0%,rgba(171,171,171,0)_25%)] rounded-lg z-[1]" />
    <div className="absolute inset-0 bg-[linear-gradient(140deg,rgb(41,52,255)_-4%,rgba(0,0,0,0)_25%)] rounded-lg z-[1]" />
  </div>
);

// Feature card component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex-1">
    <div className="relative bg-[radial-gradient(96%_96%_at_48.8%_-35.7%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] rounded-2xl p-px overflow-hidden min-h-[268px]">
      <div className="relative bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] rounded-2xl p-8 flex flex-col gap-6 h-full">
        {/* Icon */}
        <div className="relative flex justify-between items-center w-full z-[2]">
          <FeatureIcon src={icon} />
        </div>

        {/* Content */}
        <div className="relative flex flex-col gap-4 z-[2] overflow-hidden">
          <h3 className="text-white text-2xl font-medium tracking-[-0.48px] leading-7 text-left font-inter">
            {title}
          </h3>
          <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-left font-inter">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const AIEfficiencyFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};