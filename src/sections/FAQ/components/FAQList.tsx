import { useState } from "react";

const faqs = [
  {
    question: "O Nexa Clinic foi feito para clínicas multidisciplinares?",
    answer:
      "Sim. O sistema foi construído para o modelo onde vários profissionais de diferentes especialidades atendem os mesmos pacientes. O prontuário é centralizado por paciente, não por profissional, então cada especialista enxerga o histórico completo do paciente.",
  },
  {
    question: "Como funciona o prontuário compartilhado entre profissionais?",
    answer:
      "Cada atendimento é registrado dentro do prontuário do paciente, não importa a especialidade. Todos os profissionais autorizados têm acesso ao histórico clínico completo (avaliações, evoluções e documentos), sem precisar de cópias ou repasse manual de informações entre a equipe.",
  },
  {
    question: "Posso controlar o que cada profissional acessa no sistema?",
    answer:
      "Sim. O controle de permissões é granular: você define exatamente o que cada usuário pode ver ou editar. O recepcionista agenda sem acessar prontuários; o profissional visualiza seus pacientes; o gestor tem visão completa da clínica. Cada um trabalha no seu escopo.",
  },
  {
    question: "A assinatura digital funciona para todos os profissionais da equipe?",
    answer:
      "Sim. Cada profissional usa seu próprio certificado digital (.pfx) para assinar documentos, como laudos, evoluções e relatórios de alta. Todos os documentos têm validade jurídica e ficam registrados no sistema, sem necessidade de impressão.",
  },
  {
    question: "O sistema funciona em dispositivos móveis?",
    answer:
      "Sim. O Nexa Clinic é 100% responsivo e funciona em celulares e tablets, permitindo que qualquer profissional da equipe acesse o prontuário do paciente de onde estiver.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="w-full">
    <button
      onClick={onToggle}
      className="w-full bg-[linear-gradient(108deg,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] shadow-[rgba(138,165,255,0.2)_0px_1px_0px_0px_inset] rounded-[10px] px-4 py-3 overflow-hidden transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-2.5 w-full">
        {/* Question */}
        <p className="text-white text-base font-inter tracking-[-0.32px] leading-[25.6px] text-left opacity-90 flex-1">
          {question}
        </p>

        {/* Toggle Icon */}
        <div
          className={`w-5 h-5 opacity-75 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img
            src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-32.svg"
            alt="Toggle"
            className="w-full h-full text-white"
          />
        </div>
      </div>

      {/* Answer (collapsible) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-violet-100/70 text-base font-inter tracking-[-0.32px] leading-[25.6px] text-left">
          {answer}
        </p>
      </div>
    </button>
  </div>
);

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto">
      <div className="flex flex-col items-center gap-3 w-full">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};
