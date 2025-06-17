export interface IInformationCard {
  pathname: string;
  title: string;
  description: string;
}

export default function InformationCard({
  pathname,
  title,
  description,
}: IInformationCard) {
  return (
    <li className="max-w-[326px] rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
      <img
        src={pathname}
        alt=""
        aria-hidden="true"
        className="w-full h-[220px] object-cover rounded-t-lg"
      />

      <div className="bg-white p-6 rounded-b-lg">
        <h3 className="text-near-black text-center font-inter font-bold text-sm h-12">
          {title}
        </h3>

        <p className="text-near-black h-[180px] font-inter text-center text-sm flex items-center">
          {description}
        </p>
      </div>
    </li>
  );
}
