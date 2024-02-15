import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <>
      {/* <div><span className="marquee-contact-info">
        <p>
        <i className="fa-regular fa-envelope"></i>  adityard009@gmail.com | <i className="fa-solid fa-mobile-screen"></i> 9527874625
          </p>
      </span></div> */}
      <div id="Home_container">
        <div className="sideMenu">
          <Navbar />
        </div>
        <div className="mainPage">
          <MainPage />
          <AboutMe/>
        </div>
      </div>
    </>
  );
}

export default Home;
