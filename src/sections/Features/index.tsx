import { FadeIn } from "@/components/FadeIn";
import { FeatureCard } from "@/sections/Features/components/FeatureCard";

export const Features = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[1200px] gap-y-6 w-full z-[2] scroll-mt-[100px]">
      <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-6 w-full md:flex-row">
        <FadeIn direction="up" delay={0.1} className="flex-1">
          <FeatureCard
            variant="variant1"
            title="Destaque sua Clínica"
            description="Eleve sua marca com gestão profissional e conecte-se com os melhores resultados."
            avatars={[
              {
                src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/hB5bi4QrUW6ADBo4x4YHYj1FyyY.svg",
                alt: "user avatar",
                name: "LanderX",
                badgeSrc:
                  "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg",
              },
              {
                src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/AtXPNff5LTVvIV6wxVjP76Wnvc.svg",
                alt: "user avatar",
                name: "Crystalio",
                badgeSrc:
                  "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg",
              },
              {
                src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/16.png",
                alt: "user avatar",
                name: "Dr. Roberto",
                badgeSrc:
                  "https://c.animaapp.com/mkvwf206SqHHjG/assets/ghYW0cvnyQmg7VaLEOLaZUQOhFk.svg",
              },
            ]}
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="flex-[2]">
          <FeatureCard
            variant="variant2"
            title="Insights da Clínica"
            description="Automatize tudo, desde otimização do fluxo de trabalho até análise de evolução dos pacientes."
            avatars={[
              {
                src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/0yM6cBXNvZODiQkuDOtWDmSLT88.svg",
                alt: "user avatar",
                name: "Sua Clínica",
                badgeSrc:
                  "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg",
              },
              {
                src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/28.png",
                alt: "user avatar",
                name: "Dr. Roberto",
                badgeSrc:
                  "https://c.animaapp.com/mkvwf206SqHHjG/assets/ghYW0cvnyQmg7VaLEOLaZUQOhFk.svg",
              },
            ]}
            categories={[
              { name: "Clínicas de Fisioterapia" },
              { name: "Consultórios" },
              { name: "Estúdios de Pilates" },
              { name: "Centros de Reabilitação" },
              { name: "Clínicas Esportivas" },
              { name: "Espaços de Saúde" },
            ]}
            chartImageSrc="https://c.animaapp.com/mkvwf206SqHHjG/assets/1IaFtL4zGely9VkSxFrTkS3EEu0.svg"
          />
        </FadeIn>
      </div>
      <FadeIn direction="up" delay={0.3} fullWidth>
        <FeatureCard
          variant="variant3"
          title="Soluções de Dados Clínicos"
          description="Seu guia baseado em dados para tomar decisões clínicas informadas."
          avatars={[
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/hB5bi4QrUW6ADBo4x4YHYj1FyyY.svg",
              alt: "user avatar",
              name: "LanderX",
              badgeSrc:
                "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/AtXPNff5LTVvIV6wxVjP76Wnvc.svg",
              alt: "user avatar",
              name: "Crystal",
              badgeSrc:
                "https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg",
            },
          ]}
          categories={[
            { name: "Atendimentos Mensais" },
            { name: "Últimas 24h" },
            { name: "100% de Evolução" },
            { name: "Acompanhe Estatísticas" },
            { name: "Comece a Crescer Agora" },
            { name: "Retenção" },
            { name: "Principais Indicações" },
            { name: "Conversão" },
            { name: "Aumente a Receita" },
          ]}
          statsIcons={[
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-1.svg",
              alt: "Icon",
              label: "Atendimentos Mensais",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-2.svg",
              alt: "Icon",
              label: "Últimas 24h",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-3.svg",
              alt: "Icon",
              label: "Ver Crescimento",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
              alt: "Icon",
              label: "100% score anytime",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
              alt: "Icon",
              label: "Watch Stats & Growth like master",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-5.svg",
              alt: "Icon",
              label: "Retention",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-6.svg",
              alt: "Icon",
              label: "Top Referrals",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-7.svg",
              alt: "Icon",
              label: "Conversion",
            },
            {
              src: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-8.svg",
              alt: "Icon",
              label: "Grow Income",
            },
          ]}
          chartImageSrc="https://c.animaapp.com/mkvwf206SqHHjG/assets/59JXCuAmk7YjjfSwloE2pwaxzDA.svg"
          checklistItems={[
            {
              iconSrc:
                "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
              text: "100% score anytime",
            },
            {
              iconSrc:
                "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
              text: "Watch Stats & Growth like master",
            },
            {
              iconSrc:
                "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
              text: "Start Growing Now",
            },
          ]}
          showGrowthSection={true}
        />
      </FadeIn>
    </section>
  );
};
