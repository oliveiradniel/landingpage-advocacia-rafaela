import type { IconType } from "react-icons";

interface ICardInformation {
  Icon: IconType;
  title: string;
  description: string;
}

export default function CardInformation({
  Icon,
  title,
  description,
}: ICardInformation) {
  return (
    <li className="flex flex-col border border-white/10 p-4 max-w-[320px] gap-2 pt-10 relative shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
      <div className="absolute top-0 bg-vivid-blue p-2 rounded-md translate-y-[-50%]">
        <Icon size={34} aria-hidden="true" focusable="false" />
      </div>

      <h3 className="font-inter font-semibold text-sm">{title}</h3>
      <p className="font-lato text-sm">{description}</p>
    </li>
  );
}
