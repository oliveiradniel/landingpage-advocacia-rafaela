import { informationCardMocks } from "../informationCardMocks";

import InformationCard from "./InformationCard";

export default function CardList() {
  return (
    <ul
      aria-label="Lista de principais áreas de atuação"
      className="flex gap-8 flex-col sm:flex-row justify-center flex-wrap"
    >
      {informationCardMocks.map(({ pathname, title, description }, index) => (
        <InformationCard
          key={index}
          pathname={pathname}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
}
