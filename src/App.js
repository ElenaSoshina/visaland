
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
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Agreement from "./components/Agreement/Agreement";
import About from "./components/About/About";



function App() {
  return (
      <div className="app-container">
        <Header />
        <HeroSection />
          <About />
          <StepsSection />
        <Services />
        <Pricing />
          <Agreement />
        <FAQ />
          <Form />
        <Footer />
      </div>
  );
}

export default App;
