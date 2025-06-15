import { FaUserShield } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";

export default function WhyChooseMySection() {
  return (
    <div className="bg-almost-black">
      <div className=" pt-26 pb-26 mask-t-from-70% flex justify-center gap-4">
        <div className="flex flex-col border border-white/10 p-4 max-w-[320px] gap-2 pt-10 relative shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 bg-vivid-blue p-2 rounded-md translate-y-[-50%]">
            <GiInjustice size={34} />
          </div>

          <h3 className="font-inter font-semibold text-sm">
            Compromisso com a Sua Justiça
          </h3>
          <p className="font-lato text-sm">
            Você merece saber, com clareza, cada etapa da sua defesa. Explico de
            forma direta e acessível o que está acontecendo, para que você
            acompanhe seu caso com segurança.
          </p>
        </div>

        <div className="flex flex-col border border-white/10 p-4 max-w-[320px] gap-2 pt-10 relative shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 bg-vivid-blue p-2 rounded-md translate-y-[-50%]">
            <IoMdChatbubbles size={34} />
          </div>

          <h3 className="font-inter font-semibold text-sm">
            Comunicação Rápida e Sem Barreiras
          </h3>
          <p className="font-lato text-sm">
            Seu direito não pode esperar. O contato é direto comigo, sem
            burocracias. Comunicação rápida e objetiva, para agir quando você
            mais precisa.
          </p>
        </div>

        <div className="flex flex-col border border-white/10 p-4 max-w-[320px] gap-2 pt-10 relative shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 bg-vivid-blue p-2 rounded-md translate-y-[-50%]">
            <FaUserShield size={34} />
          </div>

          <h3 className="font-inter font-semibold text-sm">
            Defesa com Olhar Humano
          </h3>
          <p className="font-lato text-sm">
            Por trás de cada processo existe uma história de trabalho, esforço e
            muitas vezes, de injustiça. Meu compromisso é ouvir você, entender
            sua realidade e lutar para garantir o que é seu por direito.
          </p>
        </div>
      </div>
    </div>
  );
}
