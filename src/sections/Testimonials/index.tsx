import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialsHeader } from "./components/TestimonialsHeader";

const STAR_ICON = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg";
const HALF_STAR_ICON = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-17.svg";

const testimonials = [
  {
    text: "O sistema revolucionou a gestão da minha clínica. Agendamentos automáticos e prontuários digitais salvaram horas do meu dia!",
    rating: 5.0,
    user: {
      name: "Dra. Ana Beatriz",
      title: "Ortopedista",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/27.png",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "A integração com WhatsApp para lembretes reduziu em 70% as faltas dos meus pacientes. Incrível!",
    rating: 5.0,
    user: {
      name: "Dr. Carlos Eduardo",
      title: "Clínica Vida Saúde",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/19.png",
    },
  },
  {
    text: "Excelente para organização! Os relatórios de evolução ajudam muito no acompanhamento dos pacientes.",
    rating: 4.8,
    hasHalfStar: true,
    user: {
      name: "Dra. Marina Costa",
      title: "Médica Esportiva",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/1.avif",
    },
  },
  {
    text: "A melhor solução que já usei! Transformou completamente a gestão da nossa equipe de profissionais.",
    rating: 5.0,
    user: {
      name: "Dr. Roberto Almeida",
      title: "Diretor Clínico",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/46.png",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "Produto incrível! A assinatura digital com nosso próprio certificado agilizou demais a rotina dos profissionais.",
    rating: 5.0,
    user: {
      name: "Dra. Juliana Ferreira",
      title: "Clínica Reabilitar",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/31.jpg",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "Design incrível e muito funcional! Superou todas as nossas expectativas na clínica.",
    rating: 5.0,
    user: {
      name: "Dr. Paulo Henrique",
      title: "Clínica Centro Saúde",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/32.png",
    },
  },
];

export const Testimonials = () => {
  return (
    <Section className="px-[18px] py-20 md:px-10 md:py-[100px]">
      <SectionContainer className="max-w-[1200px] gap-y-11">
        {/* Header */}
        <FadeIn
          direction="up"
          className="relative flex flex-col items-center justify-center gap-6 w-full z-[3]"
        >
          <TestimonialsHeader />
        </FadeIn>

        {/* Grid de Testimonials */}
        <div className="relative flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 max-w-[1120px] w-full z-[2]">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={0.1 + index * 0.1}
              className="contents"
            >
              <TestimonialCard
                text={testimonial.text}
                rating={testimonial.rating}
                starIcon={STAR_ICON}
                halfStarIcon={testimonial.hasHalfStar ? HALF_STAR_ICON : undefined}
                user={testimonial.user}
              />
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1280px] md:w-screen h-1 bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] opacity-[0.14] z-[1]" />
      <div className="absolute bottom-[-249px] left-1/2 -translate-x-1/2 w-[600px] md:w-[793px] h-[378px] md:h-[499px] bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] rotate-[-13deg] rounded-[10px] z-[1]" />
    </Section>
  );
};
