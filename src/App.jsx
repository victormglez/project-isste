import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-[#fffff] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
