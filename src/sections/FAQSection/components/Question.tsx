import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

export interface IQuestion {
  index: number;
  question: string;
  response: string;
}

export default function Question({ index, question, response }: IQuestion) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevState) => (prevState === index ? null : index));
  };

  return (
    <li
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
  );
}
