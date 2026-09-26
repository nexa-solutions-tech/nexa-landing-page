import { FadeIn } from "@/components/FadeIn";
import agendaImg from "@/assets/screenshots/agenda-multiprofissional.png";
import historicoImg from "@/assets/screenshots/historico-compartilhado.png";

interface ShowcaseItem {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    image: agendaImg,
    alt: "Tela de agendamentos do Nexa Clinic, com filtros por status, paciente e profissional, e a visualização semanal da agenda",
    title: "Agenda multiprofissional",
    description:
      "Toda a equipe em uma única tela. Cada profissional com sua própria coluna de horários, sem risco de conflito entre especialidades.",
  },
  {
    image: historicoImg,
    alt: "Tela de atendimentos do paciente no Nexa Clinic, mostrando evoluções registradas por fonoaudiólogo, psicopedagogo e fisioterapeuta na mesma linha do tempo",
    title: "Histórico compartilhado entre especialidades",
    description:
      "O mesmo paciente, atendido por profissionais de especialidades diferentes. Todas as evoluções na mesma linha do tempo, visíveis para toda a equipe.",
  },
];

const BrowserChrome = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-800/80">
    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
  </div>
);

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => (
  <div className="flex flex-col gap-5 w-full">
    <div className="relative w-full rounded-2xl p-px bg-[radial-gradient(96%_96%_at_48.8%_-35.7%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] overflow-hidden">
      <div className="relative flex flex-col w-full rounded-2xl overflow-hidden bg-[radial-gradient(96%_96%_at_36.1%_27.7%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]">
        <BrowserChrome />
        <div className="w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-1.5 px-1">
      <h3 className="text-white text-lg font-semibold tracking-[-0.3px] leading-6 font-inter">
        {item.title}
      </h3>
      <p className="text-violet-100/70 text-sm tracking-[-0.2px] leading-[22px] font-inter">
        {item.description}
      </p>
    </div>
  </div>
);

export const ProductShowcaseGallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full z-[2]">
      {showcaseItems.map((item, index) => (
        <FadeIn key={item.title} direction="up" delay={0.1 * index} fullWidth>
          <ShowcaseCard item={item} />
        </FadeIn>
      ))}
    </div>
  );
};
