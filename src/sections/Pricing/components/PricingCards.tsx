import { PricingCard } from "@/components/PricingCard";

const pricingPlans = [
  {
    name: "Essencial",
    price: "R$97",
    features: [
      "Até 50 pacientes ativos",
      "Agenda online com lembretes",
      "Prontuário eletrônico básico",
      "Relatórios de evolução",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Profissional",
    price: "R$197",
    highlighted: true,
    badge: "Mais Popular",
    features: [
      "Pacientes ilimitados",
      "Agenda com WhatsApp integrado",
      "Prontuário completo + avaliações",
      "Faturamento TISS automático",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
  },
  {
    name: "Clínica",
    price: "R$397",
    features: [
      "Tudo do Profissional",
      "Múltiplos profissionais",
      "Gestão de convênios",
      "Dashboard administrativo",
      "Controle de permissões",
      "Suporte dedicado",
    ],
  },
];

export const PricingCards = () => {
  return (
    <div className="hidden md:flex flex-wrap items-start justify-center gap-6 w-full z-[2]">
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={index}
          name={plan.name}
          price={plan.price}
          features={plan.features}
          highlighted={plan.highlighted}
          badge={plan.badge}
          ctaText="Testar 14 Dias Grátis"
          ctaHref="/cadastro"
        />
      ))}
    </div>
  );
};
