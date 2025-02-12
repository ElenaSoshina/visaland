
import './App.css';
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
//
//
import FAQ from "./components/FAQ/FAQ";
// import Footer from "./components/Footer/Footer";
import {Services} from "./components/Services/Services";
import {Pricing} from "./components/Pricing/Pricing";
import {StepsSection} from "./components/Steps/StepsSection";



function App() {
  return (
      <div className="app-container">
        <Header />
        <HeroSection />
          <StepsSection />
        <Services />
        <Pricing />
        <FAQ />
        {/*<Footer />*/}
      </div>
  );
}

export default App;
