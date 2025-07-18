import { informationCardMocks } from "../informationCardMocks";

import InformationCard from "./InformationCard";

export default function CardList() {
  return (
    <ul
      aria-label="Principais motivos para escolher minha atuação"
      className="flex justify-center flex-col sm:flex-row gap-12 lg:gap-4 flex-wrap"
    >
      {informationCardMocks.map(({ Icon, title, description }, index) => (
        <InformationCard
          key={index}
          Icon={Icon}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
}
