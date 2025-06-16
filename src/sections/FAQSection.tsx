import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQSection() {
  const mockFAQs = [
    {
      question:
        "Preciso mesmo de um advogado para entrar com uma ação trabalhista?",
      response:
        "Sim. Embora a Justiça do Trabalho permita que o próprio trabalhador entre com uma ação, contar com um advogado especializado aumenta muito suas chances de sucesso. Um profissional pode identificar todos os seus direitos violados e montar uma estratégia sólida.",
    },
    {
      question: "Você atende trabalhadores de outras cidades ou estados?",
      response:
        "Sim! Hoje é possível acompanhar processos de forma digital em quase todo o Brasil. Atendo clientes de diversas regiões, com reuniões online e envio de documentos por meio eletrônico.",
    },
    {
      question: "Quanto tempo demora um processo trabalhista?",
      response:
        "O tempo pode variar bastante de acordo com a complexidade do caso e o tribunal onde ele tramita. Alguns casos mais simples podem ser resolvidos em poucos meses, enquanto outros podem levar mais tempo. Sempre explico os prazos estimados para que o cliente tenha uma expectativa realista.",
    },
    {
      question:
        "Preciso ter todos os documentos da empresa para entrar com a ação?",
      response:
        "Não necessariamente. Se você não tiver os documentos, é possível solicitar que a empresa apresente durante o processo. O ideal é reunir o máximo de informações possíveis (contrato, holerites, mensagens, etc.), mas a falta de documentos não impede a defesa dos seus direitos.",
    },
    {
      question: "Existe prazo para entrar com um processo trabalhista?",
      response:
        "Sim. O prazo geral é de até 2 anos após o fim do contrato de trabalho para ajuizar a ação. Além disso, é possível cobrar apenas os últimos 5 anos de direitos. Por isso, é importante procurar orientação o quanto antes.",
    },
    {
      question: "Posso entrar com uma ação mesmo ainda trabalhando na empresa?",
      response:
        "Sim, é possível. Em alguns casos, o trabalhador pode mover uma ação enquanto ainda está no emprego, principalmente em situações como assédio moral ou falta de pagamento de direitos. Porém, é importante avaliar os riscos junto ao advogado antes de tomar a decisão.",
    },
    {
      question:
        "Quais tipos de indenização posso ter direito em casos de assédio moral?",
      response:
        "Dependendo do caso, é possível solicitar indenização por danos morais, além da regularização de direitos trabalhistas que tenham sido afetados. Cada situação é avaliada de forma individualizada, com base nas provas disponíveis.",
    },
    {
      question: "Como funciona o atendimento inicial? Tem custo?",
      response:
        "O primeiro contato serve para entender seu caso e esclarecer dúvidas iniciais. Em muitos casos, ofereço uma análise prévia gratuita, e só após entender melhor a situação é que apresento o orçamento e a proposta de honorários.",
    },
    {
      question:
        "Preciso mesmo de um advogado para entrar com uma ação trabalhista?",
      response:
        "Sim. Embora a Justiça do Trabalho permita que o próprio trabalhador entre com uma ação, contar com um advogado especializado aumenta muito suas chances de sucesso. Um profissional pode identificar todos os seus direitos violados e montar uma estratégia sólida.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq"
      className="pt-32 flex gap-8 flex-col items-center relative"
    >
      <h2 id="faq" className="text-[clamp(20px,4vw,32px)] font-inter font-bold">
        <span className="text-vivid-blue">Perguntas </span> frequentes
      </h2>

      <ul
        aria-label="Lista de perguntas frequentes"
        className="flex gap-2 p-2 flex-col w-full md:w-[800px] max-w-[700px]"
      >
        {mockFAQs.map(({ question, response }, index) => (
          <li
            key={index}
            className={`flex border pl-10 pr-4 py-3 transition-all duration-300 ease-in-out rounded-md flex-col w-full gap-2 ${
              openIndex === index
                ? "border-white/20"
                : "border-white/30 hover:border-white/20"
            }`}
          >
            <button
              id={`faq-button-${index}`}
              aria-label={`${question} - pressione para expandir ou recolher a resposta`}
              aria-expanded={openIndex === index}
              aria-controls={`faq-panel-${index}`}
              onClick={() => toggleFAQ(index)}
              className={`justify-between group w-full flex gap-4 cursor-pointer`}
            >
              <p className="font-inter text-sm">{question}</p>
              <IoIosArrowDown
                size={22}
                aria-hidden="true"
                className={`text-vivid-blue transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className="text-white/80 font-lato text-sm leading-relaxed"
              >
                {response}
              </div>
            )}
          </li>
        ))}

        <button
          type="button"
          aria-label="Contato via WhatsApp para defesa trabalhista"
          className="bg-vivid-blue w-full mt-2 p-4 font-bold rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
        >
          <FaWhatsapp size={22} />
          Quero defesa especializada
        </button>
      </ul>
    </section>
  );
}
