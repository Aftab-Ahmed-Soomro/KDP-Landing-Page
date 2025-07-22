import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Banner3 from "./components/banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Banner6 from "./components/Banner6";
import Banner7 from "./components/Banner7";
import Banner8 from "./components/Banner8";
import Banner9 from "./components/Banner9";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Banner3 />
        <Banner4 />
        <Banner5 />
        <Banner6 />
        <Banner7 />
        <Banner9 />
        <Banner8 />
      </main>
      <Footer />
    </div>
  );
};

export default App;
