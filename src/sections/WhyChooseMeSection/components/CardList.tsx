import { cardInformationMocks } from "../cardInformationMocks";

import CardInformation from "./CardInformation";

export default function CardList() {
  return (
    <ul
      aria-label="Principais motivos para escolher minha atuação"
      className="flex justify-center flex-col sm:flex-row gap-12 lg:gap-4 flex-wrap"
    >
      {cardInformationMocks.map(({ icon, title, description }) => (
        <CardInformation Icon={icon} title={title} description={description} />
      ))}
    </ul>
  );
}
