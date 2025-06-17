import { questionMocks } from "../questionMocks";

import Question from "./Question";

export default function QuestionList() {
  return (
    <ul
      aria-label="Lista de perguntas frequentes"
      className="flex gap-2 p-2 flex-col w-full"
    >
      {questionMocks.map(({ question, response }, index) => (
        <Question
          key={index}
          index={index}
          question={question}
          response={response}
        />
      ))}
    </ul>
  );
}
