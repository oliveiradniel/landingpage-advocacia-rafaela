import { FaWhatsapp } from "react-icons/fa";

export default function Button() {
  return (
    <button
      type="button"
      aria-label="Contato via WhatsApp para defesa trabalhista"
      className="bg-vivid-blue p-4 mt-8 font-lato font-bold rounded-md flex items-center cursor-pointer hover:bg-vivid-blue/90 transition-colors duration-300 ease-in-out shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
    >
      <FaWhatsapp
        size={22}
        aria-hidden="true"
        className="hidden sm:inline-flex mr-2"
      />
      Entre em contato{" "}
      <span className="hidden sm:inline-flex ml-1"> e saiba seus direitos</span>
    </button>
  );
}
