import Ai from "@/components/HomePageSections/Ai";
import FAQ from "@/components/HomePageSections/FAQ";
import HeroSection from "@/components/HomePageSections/Hero";
import HowWork from "@/components/HomePageSections/HowWork";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <HeroSection></HeroSection>
      <HowWork></HowWork>
      <Ai></Ai>
      <FAQ></FAQ>
    </div>
  );
};

export default HomePage;
