import CardList from "./components/CardList";
import Description from "./components/Description";
import Images from "./components/Images";
import Title from "./components/Title";

export default function WhyChooseMySection() {
  return (
    <div
      aria-labelledby="why-choose-me"
      className="pt-6 sm:pt-24 flex flex-col items-center relative overflow-hidden"
    >
      <CardList />

      <div className="mt-32 flex gap-16">
        <Images />

        <div className="max-w-[520px] p-4 sm:p-0">
          <Title />

          <Description />
        </div>
      </div>
    </div>
  );
}
