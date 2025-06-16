import { depoimentMocks } from "../depoimentMocks";

import Depoiment from "./Depoiment";

export default function DepoimentList() {
  return (
    <ul
      aria-label="Lista de depoimentos de clientes sobre os serviços"
      className="mt-8 flex gap-4 flex-col sm:flex-row justify-center flex-wrap"
    >
      {depoimentMocks.map(({ name, assessment, avatarURL, numberOfStars }) => (
        <Depoiment
          name={name}
          assessment={assessment}
          avatarURL={avatarURL}
          numberOfStars={numberOfStars}
        />
      ))}
    </ul>
  );
}
