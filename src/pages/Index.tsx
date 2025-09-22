import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanPrograms from "@/components/LoanPrograms";
import TrackRecord from "@/components/TrackRecord";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LoanPrograms />
      <TrackRecord />
      <FAQ />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
