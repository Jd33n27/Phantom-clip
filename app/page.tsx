import Hero from "@/components/Hero";
import VSLSection from "@/components/VSLSection";
import TrustBadge from "@/components/TrustBadge";
import Ticker from "@/components/Ticker";
import Process from "@/components/Process";
import FAQ from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <VSLSection />
      </div>
      <TrustBadge />
      <Ticker />
      <div id="process">
        <Process />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}