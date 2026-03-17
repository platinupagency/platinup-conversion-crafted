import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import StatsSection from "@/components/sections/StatsSection";
import InsightSection from "@/components/sections/InsightSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import TeamSection from "@/components/sections/TeamSection";
import IdealClientSection from "@/components/sections/IdealClientSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <InsightSection />
      <SolutionSection />
      <DifferentiationSection />
      <TeamSection />
      <IdealClientSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCTASection />
    </main>
    <Footer />
  </>
);

export default Index;
