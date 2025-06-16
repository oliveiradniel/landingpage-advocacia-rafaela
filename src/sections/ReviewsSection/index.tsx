import Title from "./components/Title";
import DepoimentList from "./components/DepoimentList";

export default function ReviewsSection() {
  return (
    <section
      aria-labelledby="review"
      className="pt-32 flex items-center flex-col relative "
    >
      <Title />

      <DepoimentList />
    </section>
  );
}
