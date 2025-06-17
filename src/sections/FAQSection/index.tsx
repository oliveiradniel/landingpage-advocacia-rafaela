import Title from "./components/Title";
import QuestionList from "./components/QuestionList";
import Button from "./components/Button";

export default function FAQSection() {
  return (
    <section
      aria-labelledby="faq"
      className="pt-32 flex gap-8 flex-col items-center relative"
    >
      <Title />

      <div className="items-center flex flex-col w-full md:w-[800px] max-w-[700px]">
        <QuestionList />

        <Button />
      </div>
    </section>
  );
}
