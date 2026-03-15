import Hero from "@/components/Hero";
import FAQ from "@/components/Faq";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div id="home">
        <Hero />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Founders />
      </div>
      
      <div id="contact">
        <Services />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}
