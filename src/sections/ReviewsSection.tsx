import { FaUser } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

export default function ReviewsSection() {
  const mockDepoiments = [
    {
      name: "Camila Ferreira",
      avatar_url: "/camila-ferreira.jpg",
      numberOfStars: 4,
      assessment:
        "Profissional incrível! Resolveu meu caso com uma rapidez que eu nem esperava. Consegui receber todos os meus direitos sem dor de cabeça.",
    },
    {
      name: "Carlos Alberto",
      avatar_url: "/carlos-alberto.jpg",
      numberOfStars: 5,
      assessment:
        "Muito atenciosa e dedicada. Me explicou tudo com uma linguagem simples e me deixou segura durante todo o processo. Consegui a indenização que precisava e me senti muito acolhida.",
    },
    {
      name: "Patrícia Souza",
      avatar_url: "/patricia-souza.jpg",
      numberOfStars: 5,
      assessment:
        "A forma como ela conduziu meu processo foi excepcional! Além da parte técnica, senti de verdade que ela se importava com a minha história.",
    },
  ];

  return (
    <section
      aria-labelledby="review"
      className="pt-32 flex items-center flex-col relative "
    >
      <h2
        id="review"
        className="text-[clamp(20px,4vw,32px)] font-inter font-bold"
      >
        O que <span className="text-vivid-blue">nossos cliente</span> dizem
      </h2>

      <ul
        aria-label="Lista de depoimentos de clientes sobre os serviços"
        className="mt-8 flex gap-4 flex-col sm:flex-row justify-center flex-wrap"
      >
        {mockDepoiments.map(
          ({ name, avatar_url, numberOfStars, assessment }, index) => (
            <li
              key={index}
              className="rounded-lg w-[350px] border flex flex-col border-white/10 p-4 gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
            >
              <p className="h-[160px] font-lato">{assessment}</p>

              <div className="flex items-center gap-2">
                {avatar_url && avatar_url?.length > 0 ? (
                  <img
                    src={avatar_url}
                    alt={`Foto de perfil de ${name}`}
                    className="w-[42px] h-[42px] rounded-full object-cover"
                  />
                ) : (
                  <FaUser aria-hidden="true" size={28} height={28} />
                )}

                <div className="flex flex-col">
                  <p className="font-lato font-bold">{name}</p>
                  <div
                    aria-label={`${numberOfStars} de 5 estrelas`}
                    className="flex"
                  >
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
          )
        )}
      </ul>
    </section>
  );
}
