import { FaWhatsapp } from "react-icons/fa";

export default function Button() {
  return (
    <button
      type="button"
      aria-label="Contato via WhatsApp para defesa trabalhista"
      className="bg-vivid-blue sm:w-[80%] w-full p-4 font-bold rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
    >
      <FaWhatsapp
        aria-hidden="true"
        size={22}
        className="hidden sm:inline-flex"
      />
      Quero defesa especializada
    </button>
  );
}
