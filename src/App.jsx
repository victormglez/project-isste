import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen bg-[#fffff] overflow-hidden">
      <div className="app">
        <Navbar />
        <Hero />
        <Features />
      </div>

      <Footer />
    </div>
  );
};

export default App;
