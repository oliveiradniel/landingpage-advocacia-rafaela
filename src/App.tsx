import FAQSection from "./sections/FAQSection";
import Footer from "./sections/Footer";
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

      <div className="w-full flex justify-center">
        <div className="w-[80%] h-[0.3px] my-16 bg-white/30" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
