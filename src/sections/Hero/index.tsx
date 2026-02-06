import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroCTAButtons } from "@/sections/Hero/components/HeroCTAButtons";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroLogos } from "@/sections/Hero/components/HeroLogos";

const VERIFIED_ICON_URL =
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg";

const userBadges = [
  {
    name: "LanderX",
    avatar:
      "https://c.animaapp.com/mkvwf206SqHHjG/assets/hB5bi4QrUW6ADBo4x4YHYj1FyyY.svg",
    position: "left-0 top-0",
  },
  {
    name: "Crystalio",
    avatar:
      "https://c.animaapp.com/mkvwf206SqHHjG/assets/AtXPNff5LTVvIV6wxVjP76Wnvc.svg",
    position: "right-0 bottom-0",
  },
];

interface UserBadgeProps {
  name: string;
  avatar: string;
  position: string;
}

const UserBadge = ({ name, avatar, position }: UserBadgeProps) => (
  <div
    className={`hidden md:flex absolute items-center gap-2 bg-zinc-900 p-4 rounded-xl w-min border border-neutral-800 ${position}`}
  >
    <div className="relative bg-zinc-700 h-8 w-8 overflow-hidden rounded">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <p className="text-white font-medium leading-5 whitespace-nowrap font-inter">
      {name}
    </p>
    <div className="relative w-4 h-4 overflow-hidden">
      <img
        src={VERIFIED_ICON_URL}
        alt="Verified"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </div>
);

const UserBadgesPreview = () => (
  <div className="relative h-[168px] w-[294px] z-[3]">
    <div className="relative h-full w-full">
      {userBadges.map((badge) => (
        <UserBadge key={badge.name} {...badge} />
      ))}
    </div>
  </div>
);

const HighlightCard = () => (
  <div className="relative flex flex-col items-center gap-6 w-full p-8 rounded-2xl md:basis-0 md:grow md:min-w-[300px] md:w-px">
    <div className="absolute bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] z-[3] overflow-hidden rounded-2xl inset-0" />

    <div className="relative flex flex-col gap-4 max-w-[540px] w-full z-[3] overflow-hidden">
      <h3 className="text-white text-2xl font-medium tracking-[-0.48px] leading-7 font-inter">
        Destaque sua Clínica
      </h3>
      <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-left font-inter max-w-[440px]">
        Eleve sua clínica com gestão profissional e conecte-se com pacientes de
        forma eficiente.
      </p>
    </div>

    <UserBadgesPreview />
  </div>
);

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-y-11 bg-[radial-gradient(80%_25%_at_50%_7.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] w-full overflow-hidden pt-[120px] pb-20 px-[18px] md:pt-40 md:pb-[100px] md:px-10">
      <div className="relative flex flex-col items-center justify-center gap-6 max-w-[1000px] w-full z-[3]">
        <div className="relative flex flex-col items-center justify-center gap-6 max-w-[720px] w-full">
          <HeroContent />
          <HeroHeading />
          <HeroDescription />
          <HeroCTAButtons />
        </div>
        <HeroLogos />
      </div>

      <section className="relative flex flex-col items-center justify-center gap-6 max-w-[1200px] w-full z-[2] scroll-mt-[100px]">
        <div className="relative flex flex-col md:flex-row flex-wrap items-start justify-center gap-6 w-full">
          <HighlightCard />
        </div>
      </section>
    </section>
  );
};
