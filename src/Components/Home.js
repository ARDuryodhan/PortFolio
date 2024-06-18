import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div id="Home_container">
        <div className="sideMenu">
          <Navbar />
        </div>
        <div className="mainPage">
          <MainPage />
          <AboutMe />
          <Resume />
          <Project />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
