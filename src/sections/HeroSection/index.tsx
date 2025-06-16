import BackgroundImage from "./components/BackgroundImage";
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import Title from "./components/Title";
import Description from "./components/Description";
import Button from "./components/Button";

export default function HeroSection() {
  return (
    <section
      role="region"
      aria-labelledby="hero-title"
      aria-label="Seção inicial com apresentação da advogada Rafaela Souza"
      className="relative overflow-hidden"
    >
      <BackgroundImage />

      <Overlay />

      <Header />

      <div className="p-8 flex items-center justify-center absolute inset-0">
        <div className="max-w-[700px]">
          <Title />

          <Description />

          <Button />
        </div>

        <img
          src="/rafaela-photo.png"
          alt="Rafaela Souza, advogada trabalhista"
          className="mask-b-from-70% w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover"
        />
      </div>
    </section>
  );
}
