import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { Section } from "@/components/Section";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionContainer } from "@/components/SectionContainer";

export const FoundersNote = () => {
  return (
    <Section>
      <SectionContainer gap="sm">
        <div className="relative z-[3] pr-0 md:pr-5">
          <SectionBadge>MENSAGEM DO FUNDADOR</SectionBadge>
        </div>
        <div className="relative content-center items-center flex flex-col shrink-0 flex-wrap h-min justify-center max-w-screen-sm gap-y-6 w-full z-[2]">
          <div className="relative flex flex-col shrink-0 justify-start break-words w-full">
            <h3 className="text-white text-2xl tracking-[-0.72px] leading-[33.6px] break-words text-center font-inter md:text-[32px] md:tracking-[-0.96px] md:leading-[44.8px]">
              "We gather your site data.{" "}
              <span className="text-indigo-400">
                We know your target audience &amp; how your brand can standout from crowd.
              </span>{" "}
              Best part is we also help you with Solutions„
            </h3>
          </div>
          <div className="relative content-center items-center flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-4 w-full md:flex-row md:gap-x-4">
            <div className="relative content-center items-center flex shrink-0 h-min justify-center w-min">
              <div className="relative aspect-square shadow-[rgb(255,255,255)_0px_0px_0px_2px] shrink-0 w-7 z-[1] overflow-hidden rounded-[1000px]">
                <div className="absolute rounded-[1000px] inset-0">
                  <img
                    sizes="28px"
                    src="https://c.animaapp.com/mkvwf206SqHHjG/assets/29.jpg"
                    alt="user pic"
                    className="aspect-[auto_4000_/_4000] h-full object-cover w-full rounded-[1000px]"
                  />
                </div>
              </div>
            </div>
            <div className="relative content-center items-center flex shrink-0 h-min justify-center w-min overflow-hidden">
              <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter">
                Fundador & Fisioterapeuta
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
    </Section>
  );
};
