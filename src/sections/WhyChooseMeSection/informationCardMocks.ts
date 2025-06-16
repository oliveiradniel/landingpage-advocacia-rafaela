import { FaUserShield } from "react-icons/fa";

import { GiInjustice } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";

import type { IInformationCard } from "./components/InformationCard";

export const informationCardMocks: IInformationCard[] = [
  {
    Icon: GiInjustice,
    title: "Compromisso com a Sua Justiça",
    description:
      "Você merece saber, com clareza, cada etapa da sua defesa. Explico de forma direta e acessível o que está acontecendo, para que você acompanhe seu caso com segurança.",
  },
  {
    Icon: IoMdChatbubbles,
    title: "Comunicação Rápida e Sem Barreiras",
    description:
      "Seu direito não pode esperar. O contato é direto comigo, sem burocracias. Comunicação rápida e objetiva, para agir quando você mais precisa.",
  },
  {
    Icon: FaUserShield,
    title: "Defesa com Olhar Humano",
    description:
      "Por trás de cada processo existe uma história de trabalho, esforço e muitas vezes, de injustiça. Meu compromisso é ouvir você, entender sua realidade e lutar para garantir o que é seu por direito.",
  },
];
