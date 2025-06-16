import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="min-h-screen bg-[url(/background.jpg)] mask-b-from-60%" />

      <div className="absolute inset-0 bg-almost-black/86 backdrop-blur-sm" />

      <header className="absolute inset-0 w-full h-20 items-center gap-2 flex p-4 px-8">
        <img src="/logo.png" alt="Logo" className="w-[40px] h-[40px]" />
        <p className="font-bold font-lato">Rafaela Souza</p>
      </header>

      <main className="p-8 flex items-center justify-center absolute inset-0">
        <div className="max-w-[700px]">
          <h1 className="text-[clamp(16px,4vw,44px)] font-bold">
            <span className="block text-vivid-blue">Defesa Trabalhista</span>
            Especializada em proteger seus direitos como trabalhador.
          </h1>

          <p className="mt-4 font-lato text-[clamp(10px,2vw,16px)]">
            Com 8 anos de atuação dedicada à defesa dos{" "}
            <span className="text-vivid-blue font-bold">
              direitos dos trabalhadores
            </span>
            , ofereço suporte jurídico eficaz em casos complexos. Trabalho com
            agilidade e comprometimento para garantir que você tenha justiça e
            segurança no ambiente de trabalho.
          </p>

          <button
            type="button"
            className="bg-vivid-blue p-4 mt-8 font-lato font-bold rounded-md flex items-center cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <FaWhatsapp size={22} className="hidden sm:inline-flex mr-2" />
            Entre em contato{" "}
            <span className="hidden sm:inline-flex ml-1">
              {" "}
              e saiba seus direitos
            </span>
          </button>
        </div>
        <img
          src="/rafaela-photo.png"
          alt="Rafaela"
          className="mask-b-from-70% w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover"
        />
      </main>
    </div>
  );
}
