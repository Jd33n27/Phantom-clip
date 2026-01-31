import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import LogoTicker from "./components/Ticker";
import VSLSection from "./components/VSLSection"; 
import Contact from "./components/Contact"; 

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      {/* Insert VSL Section here as the primary "Hook" after Hero */}
      

      <LogoTicker />

      <div id="process">
        <Process />
      </div>

      <VSLSection />

      <div id="faq">
        <FAQ />
      </div>

      <div id="contact">
      <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
