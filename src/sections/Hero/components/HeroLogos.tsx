import { motion } from "framer-motion";

const logos = [
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/5.svg",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/7.svg",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/6.svg",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/11.svg",
  "https://c.animaapp.com/mkvwf206SqHHjG/assets/13.svg",
];

const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

const LogoItem = ({ src, index }: { src: string; index: number }) => (
  <div className="relative h-[30px] w-auto shrink-0 flex items-center justify-center">
    <img
      src={src}
      alt={`Partner logo ${(index % logos.length) + 1}`}
      className="h-full w-auto object-contain brightness-[0.8] opacity-65"
    />
  </div>
);

export const HeroLogos = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2.5 max-w-[1100px] w-full z-[2] scroll-mt-[30px]">
      <div className="relative h-[81px] w-full overflow-hidden">
        <div className="flex items-center h-full w-full overflow-hidden p-2.5 [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
          <motion.div
            className="flex gap-x-[100px] items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeLogos.map((src, index) => (
              <LogoItem key={index} src={src} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};