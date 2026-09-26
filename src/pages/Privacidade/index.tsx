import { GradientBlob, LightRays } from "@/components";
import { Link } from "react-router-dom";

const UPDATED_AT = "25 de setembro de 2026";
const CONTACT_EMAIL = "contato.nexasolutions@gmail.com";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-white text-xl md:text-2xl font-medium tracking-[-0.4px] mt-10 mb-3 font-inter">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-white text-base md:text-lg font-medium tracking-[-0.3px] mt-6 mb-2 font-inter">
    {children}
  </h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-violet-100/70 text-sm md:text-base leading-6 md:leading-7 font-inter mb-3">
    {children}
  </p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-2 mb-3 pl-5">{children}</ul>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-violet-100/70 text-sm md:text-base leading-6 md:leading-7 font-inter list-disc marker:text-indigo-400">
    {children}
  </li>
);

export const PrivacidadePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightRays topOffset="-600px" />
        <GradientBlob className="top-0 bottom-auto" />
      </div>

      {/* Minimal header */}
      <header className="fixed z-[8] top-0 inset-x-0 h-[68px] flex items-center px-6 md:px-10 backdrop-blur-sm bg-gradient-to-b from-black/80 to-transparent">
        <Link to="/" className="flex items-center gap-1.5 h-10 md:h-11 overflow-hidden">
          <img src="/clinic-A1-dark.svg" alt="Nexa Clinic" className="h-full w-auto" />
        </Link>
      </header>

      <main className="relative flex flex-col items-center pt-[120px] pb-20 px-[18px] z-[2]">
        <div className="w-full max-w-[720px] flex flex-col">
          <p className="text-indigo-400 text-xs md:text-sm font-medium uppercase tracking-[1px] font-inter mb-3">
            Política de Privacidade
          </p>
          <h1 className="text-white text-3xl md:text-[40px] font-medium tracking-[-0.6px] leading-tight font-inter mb-2">
            Política de Privacidade
          </h1>
          <p className="text-violet-100/50 text-sm font-inter mb-8">
            Última atualização: {UPDATED_AT}
          </p>

          <P>
            Esta política explica como a Nexa coleta, usa, armazena e protege dados pessoais
            ao operar o Nexa Clinic, nosso sistema de gestão para clínicas de reabilitação
            multidisciplinar, e este site institucional. Ela se aplica a visitantes deste
            site, a donos de clínicas e colaboradores que usam o Nexa Clinic, e explica também
            o papel da Nexa em relação aos dados de pacientes cadastrados por nossos clientes.
          </P>
          <P>
            Elaboramos esta política em conformidade com a Lei Geral de Proteção de Dados
            Pessoais (Lei nº 13.709/2018, "LGPD"). Se você tiver qualquer dúvida sobre o
            conteúdo abaixo, pode falar com a gente pelo e-mail{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {CONTACT_EMAIL}
            </a>
            .
          </P>

          <H2>1. Quem somos</H2>
          <P>
            A Nexa é a empresa responsável pelo desenvolvimento e operação do Nexa Clinic.
            Para fins desta política, a Nexa atua como <strong className="text-white">controladora</strong> dos
            dados pessoais de visitantes do site, leads e das contas de clínicas cadastradas
            (dados do responsável pela clínica e de seus colaboradores usuários do sistema),
            e como <strong className="text-white">operadora</strong> dos dados de pacientes que as
            clínicas clientes inserem no Nexa Clinic, conforme detalhado na seção 6.
          </P>
          <P>
            Razão social, CNPJ e endereço completos da Nexa estão disponíveis mediante
            solicitação pelo canal de contato informado ao final desta política.
          </P>

          <H2>2. Quais dados coletamos</H2>

          <H3>2.1 Dados que você nos fornece diretamente</H3>
          <P>Coletamos os dados que você mesmo informa ao interagir com o site ou se cadastrar:</P>
          <UL>
            <LI>
              <strong className="text-white">Cadastro da clínica:</strong> nome do responsável,
              e-mail, celular, nome da clínica, CNPJ e senha de acesso (armazenada de forma
              criptografada, nunca em texto simples).
            </LI>
            <LI>
              <strong className="text-white">Assinatura de plano:</strong> dados de cobrança
              como CPF/CNPJ do titular do pagamento, endereço (CEP e número) e, quando o
              pagamento é feito por cartão, os dados do cartão. Esses dados de pagamento são
              processados diretamente pelo Asaas, nosso parceiro de pagamentos; a Nexa não
              armazena o número completo do cartão em seus próprios servidores.
            </LI>
            <LI>
              <strong className="text-white">Contato:</strong> informações que você envia por
              e-mail, formulários ou canais de atendimento, como nome, e-mail e o conteúdo da
              sua mensagem.
            </LI>
          </UL>

          <H3>2.2 Dados de navegação</H3>
          <P>
            Como a maioria dos sites, coletamos automaticamente algumas informações técnicas
            quando você visita nosso site, como endereço IP, tipo de dispositivo e navegador,
            páginas visitadas e tempo de acesso. Usamos cookies essenciais para o funcionamento
            do site. Caso venhamos a usar cookies de análise ou de marketing no futuro, esta
            política será atualizada para refletir isso, e onde exigido pela lei
            solicitaremos seu consentimento antes de ativá-los.
          </P>

          <H3>2.3 Dados inseridos no sistema pela clínica</H3>
          <P>
            Ao usar o Nexa Clinic, a clínica cliente insere dados sobre seus próprios pacientes:
            dados cadastrais, agendamentos, histórico de atendimentos e evoluções clínicas
            registradas por cada profissional. Parte desses dados constitui{" "}
            <strong className="text-white">dado pessoal sensível</strong> nos termos do art. 5º,
            inciso II, da LGPD (dado referente à saúde). Esses dados pertencem à clínica e aos
            pacientes dela, não à Nexa, conforme explicado na seção 6.
          </P>

          <H2>3. Para que usamos os dados</H2>
          <P>Usamos os dados coletados para:</P>
          <UL>
            <LI>Criar e manter a conta da sua clínica e permitir o acesso ao Nexa Clinic;</LI>
            <LI>Processar pagamentos e gerenciar sua assinatura;</LI>
            <LI>Fornecer suporte e responder dúvidas ou solicitações;</LI>
            <LI>Enviar comunicações operacionais sobre o serviço (confirmações, avisos de cobrança, mudanças importantes);</LI>
            <LI>Melhorar o site e o produto, identificar falhas e planejar novas funcionalidades;</LI>
            <LI>Cumprir obrigações legais, regulatórias e fiscais;</LI>
            <LI>Prevenir fraudes e proteger a segurança da plataforma.</LI>
          </UL>

          <H2>4. Base legal para o tratamento</H2>
          <P>Tratamos dados pessoais com base em uma ou mais das seguintes bases legais previstas na LGPD:</P>
          <UL>
            <LI>
              <strong className="text-white">Execução de contrato:</strong> para viabilizar o
              uso do Nexa Clinic e o processamento de pagamentos da assinatura;
            </LI>
            <LI>
              <strong className="text-white">Cumprimento de obrigação legal ou regulatória:</strong>{" "}
              por exemplo, obrigações fiscais e contábeis;
            </LI>
            <LI>
              <strong className="text-white">Legítimo interesse:</strong> para melhorar nossos
              serviços e garantir a segurança da plataforma, sempre respeitando seus direitos
              e expectativas razoáveis de privacidade;
            </LI>
            <LI>
              <strong className="text-white">Consentimento:</strong> quando aplicável, como no
              envio de comunicações de marketing, que você pode revogar a qualquer momento.
            </LI>
          </UL>

          <H2>5. Compartilhamento de dados</H2>
          <P>Não vendemos dados pessoais. Compartilhamos dados apenas quando necessário, com:</P>
          <UL>
            <LI>
              <strong className="text-white">Asaas</strong> (processador de pagamentos), para
              viabilizar a cobrança da assinatura;
            </LI>
            <LI>
              <strong className="text-white">Provedores de infraestrutura e hospedagem</strong>{" "}
              que armazenam os dados em nossos servidores, sob obrigações contratuais de
              confidencialidade e segurança;
            </LI>
            <LI>
              <strong className="text-white">Autoridades públicas</strong>, quando exigido por
              lei, ordem judicial ou solicitação de autoridade competente.
            </LI>
          </UL>

          <H2>6. Nosso papel em relação aos dados de pacientes</H2>
          <P>
            Quando uma clínica usa o Nexa Clinic para registrar dados de seus pacientes, a{" "}
            <strong className="text-white">clínica é a controladora</strong> desses dados: ela
            decide quais informações coletar e como usá-las no cuidado de seus pacientes. A{" "}
            <strong className="text-white">Nexa atua como operadora</strong>, ou seja,
            processamos esses dados apenas seguindo as instruções da clínica e para viabilizar
            o funcionamento do sistema, sem utilizá-los para finalidades próprias, como
            publicidade.
          </P>
          <P>
            Se você é paciente de uma clínica que usa o Nexa Clinic e quiser exercer seus
            direitos sobre esses dados, o canal correto é falar diretamente com a clínica onde
            você é atendido, já que é ela quem decide sobre o tratamento desses dados.
          </P>

          <H2>7. Por quanto tempo guardamos os dados</H2>
          <P>
            Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas
            nesta política, para atender a obrigações legais e regulatórias (como prazos
            fiscais e de guarda de prontuário) ou até que você solicite a eliminação, quando
            aplicável. Ao final desses prazos, os dados são eliminados ou anonimizados de
            forma segura.
          </P>

          <H2>8. Como protegemos seus dados</H2>
          <P>
            Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra
            acesso não autorizado, perda, alteração ou vazamento, incluindo criptografia de
            senhas, controle de acesso por perfil de usuário dentro do Nexa Clinic e conexões
            seguras entre seu navegador e nossos servidores. Nenhum sistema é 100% imune a
            incidentes, e caso algum ocorra e afete seus dados, comunicaremos você e as
            autoridades competentes conforme exigido pela LGPD.
          </P>

          <H2>9. Seus direitos como titular de dados</H2>
          <P>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</P>
          <UL>
            <LI>Confirmação da existência de tratamento dos seus dados;</LI>
            <LI>Acesso aos dados que temos sobre você;</LI>
            <LI>Correção de dados incompletos, desatualizados ou incorretos;</LI>
            <LI>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD;</LI>
            <LI>Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa;</LI>
            <LI>Eliminação dos dados tratados com base no seu consentimento;</LI>
            <LI>Informação sobre com quem compartilhamos seus dados;</LI>
            <LI>Revogação do consentimento, quando o tratamento for baseado nele.</LI>
          </UL>
          <P>
            Para exercer qualquer um desses direitos, escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {CONTACT_EMAIL}
            </a>
            . Responderemos dentro dos prazos previstos na LGPD.
          </P>

          <H2>10. Crianças e adolescentes</H2>
          <P>
            O Nexa Clinic é destinado a clínicas e profissionais de saúde, não a menores de
            idade. Não coletamos intencionalmente dados de crianças ou adolescentes por meio
            deste site fora do contexto de atendimento clínico registrado por uma clínica
            cliente, que segue as regras de proteção de dados de menores previstas na LGPD.
          </P>

          <H2>11. Alterações nesta política</H2>
          <P>
            Podemos atualizar esta política periodicamente para refletir mudanças no Nexa Clinic
            ou na legislação aplicável. Sempre que houver uma alteração relevante, atualizaremos
            a data no topo desta página. Recomendamos revisitar esta política de tempos em
            tempos.
          </P>

          <H2>12. Fale conosco</H2>
          <P>
            Dúvidas, solicitações sobre seus dados ou qualquer outro assunto relacionado a esta
            política podem ser enviados para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {CONTACT_EMAIL}
            </a>
            .
          </P>

          <div className="mt-12 pt-6 border-t border-neutral-800">
            <Link
              to="/"
              className="text-violet-100/70 hover:text-white text-sm font-inter transition-colors duration-200"
            >
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
