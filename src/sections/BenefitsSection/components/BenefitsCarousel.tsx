import { motion } from "framer-motion";

export const BenefitsCarousel = () => {
  const items = [
    "Economia de Tempo",
    "Agenda Flexível",
    "Gestão Inteligente",
    "Planos Personalizáveis",
    "Insights Clínicos",
    "Automação em Tempo Real",
    "Relatórios Instantâneos",
    "Prontuário Eletrônico",
    "Suporte Dedicado",
    "Crescimento com IA",
  ];

  // Duplicate items for seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full z-[2] overflow-hidden">
      {/* First Row - Moving Left */}
      <div className="relative box-border caret-transparent shrink-0 h-[60px] max-w-screen-xl w-full overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] items-center box-border caret-transparent flex h-full w-full overflow-hidden p-2.5">
          <motion.div
            className="flex gap-x-[30px] items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`row1-${index}`}
                className="relative box-border caret-transparent shrink-0 h-[50px]"
              >
                <div className="relative content-center items-center bg-[radial-gradient(97%_115%_at_13.2%_3.7%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] box-border caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 w-min overflow-hidden px-6 py-3 rounded-[228px] border border-white/10">
                  <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter whitespace-nowrap">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row - Moving Right */}
      <div className="relative box-border caret-transparent shrink-0 h-[60px] max-w-screen-xl w-full overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] items-center box-border caret-transparent flex h-full w-full overflow-hidden p-2.5">
          <motion.div
            className="flex gap-x-[30px] items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`row2-${index}`}
                className="relative box-border caret-transparent shrink-0 h-[50px]"
              >
                <div className="relative content-center items-center bg-[radial-gradient(97%_115%_at_13.2%_3.7%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] box-border caret-transparent gap-x-2.5 flex flex-col h-min justify-center gap-y-2.5 w-min overflow-hidden px-6 py-3 rounded-[228px] border border-white/10">
                  <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter whitespace-nowrap">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};