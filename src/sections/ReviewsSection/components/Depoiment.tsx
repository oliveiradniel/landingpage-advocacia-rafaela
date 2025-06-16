import { FaUser } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

export interface IDepoiment {
  name: string;
  assessment: string;
  avatarURL: string;
  numberOfStars: number;
}

export default function Depoiment({
  name,
  assessment,
  avatarURL,
  numberOfStars,
}: IDepoiment) {
  return (
    <li className="rounded-lg w-[350px] border flex flex-col border-white/10 p-4 gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
      <p className="h-[160px] font-lato">{assessment}</p>

      <div className="flex items-center gap-2">
        {avatarURL && avatarURL?.length > 0 ? (
          <img
            src={avatarURL}
            alt={`Foto de perfil de ${name}`}
            className="w-[42px] h-[42px] rounded-full object-cover"
          />
        ) : (
          <FaUser aria-hidden="true" size={28} height={28} />
        )}

        <div className="flex flex-col">
          <p className="font-lato font-bold">{name}</p>
          <div aria-label={`${numberOfStars} de 5 estrelas`} className="flex">
            {Array.from({ length: numberOfStars }).map((_, i) => (
              <IoMdStar
                key={i}
                aria-hidden="true"
                className="text-yellow-300"
              />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
