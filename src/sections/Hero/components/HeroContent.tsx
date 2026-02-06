import { FadeIn } from "@/components/FadeIn";

const avatars = [
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/ETgoVdeITLLIYCHTFNeVuZDMyQY.png",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/bnJJiW5Vfixlrz7M2pzoeyHBU.png",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/rlizSNVuxrrqd6I5hGaSxwqn0Os.png",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/X0pqhTmlK8gdYqPbljhuLXlyd0I.png",
];

const ProfileAvatar = ({ src, index }: { src: string; index: number }) => (
  <div className="relative h-7 w-7 -ml-3 first:ml-0 z-[1] overflow-hidden rounded-full">
    <img
      src={src}
      alt={`Cliente ${index + 1}`}
      className="absolute inset-0 h-full w-full object-cover rounded-full"
    />
  </div>
);

const AvatarStack = () => (
  <div className="hidden md:flex items-center pr-[22px]">
    {avatars.map((src, index) => (
      <ProfileAvatar key={index} src={src} index={index} />
    ))}
  </div>
);

const ClientCount = () => (
  <div className="hidden md:flex items-center gap-1 overflow-hidden">
    <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap font-inter">
      Junte-se a
    </p>
    <div className="flex items-center gap-0.5 h-6 overflow-hidden">
      <span className="text-white text-sm leading-[22.4px] font-inter">
        2.500
      </span>
      <p className="text-white tracking-[-0.32px] leading-[25.6px] whitespace-nowrap font-inter">
        +
      </p>
    </div>
    <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap font-inter">
      clínicas satisfeitas
    </p>
  </div>
);

export const HeroContent = () => {
  return (
    <FadeIn direction="up" className="hidden md:flex md:flex-wrap md:items-center md:justify-center md:gap-2.5 md:w-full">
      <AvatarStack />
      <ClientCount />
    </FadeIn>
  );
};
