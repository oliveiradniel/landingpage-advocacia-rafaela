import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import ReviewsSection from "./sections/ReviewsSection";
import SpecialtiesSection from "./sections/SpecialtiesSection";
import WhyChooseMySection from "./sections/WhyChooseMySection";

function App() {
  return (
    <div>
      <HeroSection />
      <WhyChooseMySection />
      <SpecialtiesSection />
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}

export default App;
