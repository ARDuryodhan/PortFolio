import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import lax from "lax.js";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";

function App() {
  useEffect(() => {
    lax.init();

    lax.addDriver("scrollY", () => window.scrollY);

    lax.addElements(".animate-title", {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [0, 100],
        ],
      },
    });

    lax.addElements(".animate-image", {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          [0, -100],
        ],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
