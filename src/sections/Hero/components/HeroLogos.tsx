import { motion } from "framer-motion";

export const HeroLogos = () => {
  const logos = [
    "https://c.animaapp.com/mkvwf206SqHHjG/assets/5.svg",
    "https://c.animaapp.com/mkvwf206SqHHjG/assets/7.svg",
    "https://c.animaapp.com/mkvwf206SqHHjG/assets/6.svg",
    "https://c.animaapp.com/mkvwf206SqHHjG/assets/11.svg",
    "https://c.animaapp.com/mkvwf206SqHHjG/assets/13.svg",
  ];

  // Duplicate logos to create seamless loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center max-w-[1100px] gap-y-2.5 w-full z-[2] scroll-mt-[30px]">
      <div className="relative box-border caret-transparent shrink-0 h-[81px] w-full overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] items-center box-border caret-transparent flex h-full justify-items-center max-h-full max-w-full w-full overflow-hidden p-2.5">
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
              <div
                key={index}
                className="relative h-[30px] w-auto shrink-0 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Logo ${index}`}
                  className="h-full w-auto object-contain brightness-[0.8] opacity-65"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};