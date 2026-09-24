import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialsHeader } from "./components/TestimonialsHeader";

const STAR_ICON = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-15.svg";
const HALF_STAR_ICON = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-17.svg";

const testimonials = [
  {
    text: "Antes, cada profissional usava um sistema diferente. Hoje toda a equipe registra no mesmo prontuário do paciente. A comunicação entre as especialidades mudou completamente.",
    rating: 5.0,
    user: {
      name: "Dra. Juliana Ferreira",
      title: "Diretora, Clínica Reabilitar",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/31.jpg",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "A agenda multiprofissional resolveu um problema que a gente tinha todo dia: conflito de horário entre especialidades diferentes para o mesmo paciente. Hoje é automático.",
    rating: 5.0,
    user: {
      name: "Dr. Carlos Eduardo",
      title: "Fisioterapeuta, Centro de Reabilitação CE",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/19.png",
    },
  },
  {
    text: "Eu precisava ver o que outro profissional tinha registrado antes do meu atendimento. No NexaClinic isso está ali, no prontuário do paciente. Simples assim.",
    rating: 4.8,
    hasHalfStar: true,
    user: {
      name: "Dra. Ana Beatriz",
      title: "Fonoaudióloga, Clínica Integrar Saúde",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/27.png",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "Gerencio uma equipe com profissionais de várias áreas. O controle de permissões me permite definir o que cada um acessa, e o dashboard me mostra a produtividade de cada especialidade.",
    rating: 5.0,
    user: {
      name: "Dr. Roberto Almeida",
      title: "Gestor Clínico, Instituto NeuroVida",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/46.png",
      imageAlt: "foto do usuário",
    },
  },
  {
    text: "A assinatura digital com meu próprio certificado foi um divisor de águas. Assino laudos diretamente no sistema, com validade jurídica, sem precisar imprimir nada.",
    rating: 5.0,
    user: {
      name: "Dra. Marina Costa",
      title: "Terapeuta Ocupacional, Clínica Movimento",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/1.avif",
    },
  },
  {
    text: "Atendo alguns pacientes em casa, fora da clínica. Abro o NexaClinic pelo celular, confiro o histórico e registro a evolução na hora, sem precisar levar notebook nem passar tudo pro sistema depois.",
    rating: 5.0,
    user: {
      name: "Dr. Rafael Nogueira",
      title: "Fisioterapeuta, Atendimento Domiciliar",
      imageUrl: "https://c.animaapp.com/mkvwf206SqHHjG/assets/16.png",
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full z-[2]">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={0.1 * index}
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
