import React, { useEffect } from "react";
import AOS from "aos";
import ProfileImage from "../assets/63524497617.png";

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center" data-aos="zoom-in">
          <img src={ProfileImage} alt="Profile" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" />
        </div>
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl mb-4 leading-relaxed" data-aos="fade-right">
            Dedicated and adaptable fresher with close to 1 year hands-on experience in frontend engineering and Completed a rigorous React Frontend Engineer Trainee program at Numetry Technologies,
            and have skills like React.JS, HTML, CSS, and Bootstrap while developing responsive interfaces for diverse projects.
          </p>
          <p className="text-lg md:text-xl mb-4 leading-relaxed" data-aos="fade-left">
            Led the frontend development for the "EduInfo India" project, collaborating seamlessly with backend
            developers to ensure project cohesion. Previously, excelled as an Information Processing Specialist at Tata
            Consultancy Services, managing critical tasks within the DHL project and progressing to the role of Mentor,
            overseeing team operations and conducting audits for process efficiency.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" data-aos="zoom-in-left">
            Skilled in troubleshooting and providing comprehensive support, with a proven track record of adaptability
            and innovation across various projects. Seeking opportunities to leverage skills in frontend development and
            application support to contribute effectively in a dynamic work environment.
          </p>

          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
