import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import ClientShowcase from "./components/Clients";
import Process from "./components/Process";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
// import BackgroundVideo from "./components/BackgroundVideo";
import LogoTicker from "./components/Ticker";

function App() {
  return (
    <div className="relative">
      {/* <BackgroundVideo /> */}
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      {/* <ClientShowcase />
       */}
       <LogoTicker />
      <div id="process">
        <Process />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
