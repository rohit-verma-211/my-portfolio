import React from "react";
import "./App.css";


import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from  "./Components/Projects";
import Experience from "./Components/Experience";
import Testimonials from "./Components/Testimonials";
import Hobbies from "./Components/Hobbies";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Testimonials />
      <Hobbies />
      <Footer />
      
    </div>
  );
}

export default App;