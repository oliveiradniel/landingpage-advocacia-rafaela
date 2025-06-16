import Title from "./components/Title";
import Button from "./components/Button";
import CardList from "./components/CardList";

export default function SpecialtiesSection() {
  return (
    <div
      aria-labelledby="specialties"
      className="pt-32 flex gap-8 flex-col items-center relative"
    >
      <Title />

      <div className="flex flex-col gap-8 items-center">
        <CardList />

        <Button />
      </div>
    </div>
  );
}
