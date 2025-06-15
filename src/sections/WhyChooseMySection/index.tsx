import { FaUserShield } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";

import CardInformation from "./components/CardInformation";

export default function WhyChooseMySection() {
  return (
    <div className="pt-26 flex flex-col items-center">
      <div className="flex justify-center gap-4">
        <CardInformation
          Icon={GiInjustice}
          title="Compromisso com a Sua Justiça"
          description="Você merece saber, com clareza, cada etapa da sua defesa. Explico de
            forma direta e acessível o que está acontecendo, para que você
            acompanhe seu caso com segurança."
        />

        <CardInformation
          Icon={IoMdChatbubbles}
          title="Comunicação Rápida e Sem Barreiras"
          description="Seu direito não pode esperar. O contato é direto comigo, sem
            burocracias. Comunicação rápida e objetiva, para agir quando você
            mais precisa."
        />

        <CardInformation
          Icon={FaUserShield}
          title="Defesa com Olhar Humano"
          description="Por trás de cada processo existe uma história de trabalho, esforço e
            muitas vezes, de injustiça. Meu compromisso é ouvir você, entender
            sua realidade e lutar para garantir o que é seu por direito."
        />
      </div>

      <div className="mt-32 flex gap-16">
        <div className="relative flex w-[370px] max-w-[370px] h-[400px]">
          <img
            src="/documents.png"
            alt="Documentos"
            width={200}
            height={200}
            className="rounded-lg absolute top-0 left-0 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          />
          <img
            src="/rafaela-photo2.png"
            alt="Rafaela"
            width={200}
            className="rounded-lg absolute bottom-0 right-0 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          />
        </div>

        <div className="max-w-[520px]">
          <h1 className="text-[32px] font-inter font-bold">
            Por que escolher{" "}
            <span className="text-vivid-blue">minha atuação</span> na defesa dos
            direitos trabalhistas?
          </h1>

          <p className="mt-8 mb-4 font-lato">
            Atuo de forma estratégica e personalizada na defesa de trabalhadores
            que enfrentam conflitos e injustiças no ambiente de trabalho. Meu
            compromisso é garantir que cada cliente tenha acesso aos direitos
            que lhe são devidos, com orientação clara, ética e total dedicação
            ao seu caso.
          </p>

          <p className="font-lato">
            Ao longo da minha trajetória, já representei trabalhadores em
            diversas situações, como{" "}
            <strong className="text-vivid-blue">
              reclamações por verbas rescisórias
            </strong>
            ,{" "}
            <strong className="text-vivid-blue">horas extras não pagas</strong>,{" "}
            <strong className="text-vivid-blue">assédio moral</strong>,{" "}
            <strong className="text-vivid-blue">acidentes de trabalho</strong>,{" "}
            <strong className="text-vivid-blue">
              reconhecimento de vínculo empregatício
            </strong>{" "}
            e outras demandas que envolvem relações trabalhistas. Cada caso é
            tratado com atenção aos detalhes, análise cuidadosa da documentação
            e construção de uma estratégia sólida para alcançar o melhor
            resultado.
          </p>
        </div>
      </div>
    </div>
  );
}
