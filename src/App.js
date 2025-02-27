import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FAQ from "./components/FAQ/FAQ";
import { Services } from "./components/Services/Services";
import { Pricing } from "./components/Pricing/Pricing";
import { StepsSection } from "./components/Steps/StepsSection";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Agreement from "./components/Agreement/Agreement";
import About from "./components/About/About";

function App() {
    // Создаём рефы для секций
    const homeRef = useRef(null);
    const pricesRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const contactsRef = useRef(null);
    const formRef = useRef(null);

    return (
        <div className="app-container">
            <Header
                homeRef={homeRef}
                pricesRef={pricesRef}
                servicesRef={servicesRef}
                aboutRef={aboutRef}
                contactsRef={contactsRef}
                formRef={formRef}
            />
            <HeroSection ref={homeRef} />
            <Pricing ref={pricesRef} formRef={formRef} />
            <StepsSection />
            <Services ref={servicesRef} />
            <Agreement />
            <About ref={aboutRef} />
            <FAQ />
            <Form ref={formRef} />
            <Footer ref={contactsRef} />
        </div>
    );
}

export default App;
