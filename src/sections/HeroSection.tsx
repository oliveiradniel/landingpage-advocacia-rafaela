import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-almost-black relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-vivid-blue/10 blur-3xl pointer-events-none rounded-full z-10" />

      <div className="absolute bottom-[] right-[-10%] w-[600px] h-[600px] bg-vivid-blue/10 blur-3xl pointer-events-none rounded-full z-10" />

      <div className="min-h-screen bg-[url(/background.jpg)] mask-b-from-60%" />

      <div className="absolute inset-0 bg-almost-black/86 backdrop-blur-sm" />

      <header className="absolute inset-0 w-full h-20 items-center gap-2 flex p-4 px-8">
        <img src="/logo.png" alt="Logo" width={40} height={40} />
        <p className="font-bold font-lato">Rafaela Souza</p>
      </header>

      <main className="flex items-center justify-center absolute inset-0">
        <div className="max-w-[700px]">
          <h1 className="text-[44px] font-bold">
            <span className="block text-vivid-blue">Defesa Trabalhista</span>
            Especializada em proteger seus direitos como trabalhador.
          </h1>

          <p className="mt-4 font-lato">
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
            className="bg-vivid-blue p-4 mt-8 font-bold rounded-md flex items-center gap-2 cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <FaWhatsapp size={22} />
            Entre em contato e saiba seus direitos
          </button>
        </div>
        <img
          src="/rafaela-photo.png"
          alt="Rafaela"
          width={400}
          className="mask-b-from-70%"
        />
      </main>
    </div>
  );
}
