import React, { useEffect } from "react";
import AOS from "aos";

import mypic from "../assets/mypic.png";
import skillsImg from "../assets/skilllogo.png";
import { Link } from "react-router-dom";

function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);
  return (
    <>
      <div
        id="hello"
        className="flex justify-center p-1 mt-4 text-center items-center"
      >
        <p className="w-[5rem] border-[1.5px] border-black py-1 px-3 rounded-full font-semibold">
          Hello!
        </p>
      </div>
      <div className="profilesection max-w-7xl mx-auto">
        <div className="w-full m-auto text-center mt-4">
          <p className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-4 tracking-widest">
            I'm <span className="text-red-600 font-sans" data-aos="zoom-in">Aditya,</span>
          </p>
          <p className="border-black text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-widest">
            Frontend Developer
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-5 px-5 lg:px-20">
          <div className="flex flex-col justify-start space-y-4 mb-4 md:mb-0">
            <p className="font-bold text-[5rem] -mb-14">&#x201C;</p>
            <p className="text-lg italic w-[25rem]">
              Frontend developer proficient in React.js, specializes in
              responsive design passionate about delivering intuitive user
              interfaces that drive impactful user experiences.
            </p>
            <div className="flex space-x-3 ">
              <img
                src={skillsImg}
                alt="skills-Img"
                className="w-full max-w-[10rem] h-auto"
              />
            </div>
          </div>
          <div className="flex justify-center items-center bg-red-600 rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden mb-4 md:mb-0">
            <img
              src={mypic}
              alt="my-pic"
              className="w-full h-full object-cover"
               data-aos="flip-left"
            />
          </div>
          <div className="flex flex-col items-center text-center md:items-start">
            <div className="m-auto">
              <span className="text-red-600 font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold">
                1 Year,
              </span>
              <p className="border-black text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-widest">
                Experience
              </p>
            </div>
            <div className="bg-gray-100 mt-3 rounded-full p-2 flex justify-between gap-3 w-full">
              <Link to={"/resume"}>
                <button className="bg-red-600 rounded-full w-[10rem] text-white py-2 px-4 ">
                  Resume
                </button>
              </Link>
              <Link to={"/contact"}>
                <button className="bg-transparent  rounded-full w-[10rem]  font-bold py-2 px-4 border border-black">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
