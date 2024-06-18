import React from "react";
import resumepdf from "../assets/React_devResume.pdf";
import { MdSimCardDownload } from "react-icons/md"; 

function Resume() {
  const downloadPDF = () => {
    const anchor = document.createElement("a");
    anchor.href = resumepdf;
    anchor.download = "FRONTEND(REACT-JS)RESUME.pdf";
    anchor.click();
  };

  return (
    <div className="container w-[80%] mx-auto  min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white text-black my-8 px-[5rem] py-4">
      <div className="w-full">
        <div className="w-full lg:flex justify-between m-auto">
          <div className="left-side">
            <h1 className="text-3xl font-bold mb-1">Aditya Duryodhan</h1>
            <p className="mb-2 text-3xl">Frontend Developer (React.Js)</p>
          </div>
          <div className="right-side">
            <p className="mb-2 text-blue-700">adityard009@gmail.com</p>
            <p className="mb-2">9527874625</p>
            <p className="mb-2">Bahadura, 44003, Nagpur</p>
            <p className="mb-2">
              <a
                href="https://linkedin.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-gray-500 border-b-4 border-gray-500 font-semibold mt-6 mb-2 ">
          WORK EXPERIENCE
        </h2>

        <h3 className="font-semibold">Numetry Technologies | Pune, MH</h3>
        <p className="text-gray-700 font-semibold">Frontend Developer | 09/2023 - 01/2024</p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Completed an intensive 4-month React Frontend Engineer Trainee
            program, gaining expertise in React.JS, HTML, CSS, and Bootstrap.
          </li>
          <li>
            Developed responsive UIs for diverse projects like React Lightbox
            gallery, To-do List, Bank Landing Page, and more.
          </li>
          <li>
            Led frontend development for "EduInfo India" project, collaborating
            closely with backend team for seamless integration.
          </li>
          <li>
            Managed the project lifecycle from inception to completion,
            emphasizing quality and user experience.
          </li>
        </ul>

        <h3 className="font-semibold">
          Tata Consultancy Services | Nagpur, MH
        </h3>
        <p className="text-gray-700 font-semibold">Application Support Desk | 09/2019 - 06/2022</p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Managed the DHL project under UK Import, ensuring accurate revenue
            generation by validating shipments in AS 400 (Citrix domain).
          </li>
          <li>
            Promoted to Mentor, overseeing team operations and conducting audits
            for process efficiency.
          </li>
          <li>
            Promoted to the Ultimatix project, where responsibilities shifted to
            resolving technical issues for TCS employees and clients, including
            password recovery and system troubleshooting.
          </li>
          <li>
            Collaborated within the Citrix process, and utilized Global Help
            Desk tools for timely resolution of critical issues.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-500 border-b-4 border-gray-500">
          SKILLS
        </h2>
        <p>
        <span className="text-gray-700 font-semibold">Backend:</span> Node.js, <span className="text-gray-700 font-semibold">Database:</span> MongoDB, HTML5, CSS3, Bootstrap,
          JavaScript, RESTful APIs, Ajax, Responsive Web Design, TailwindCss,
          React.js, JQuery,
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-500 border-b-4 border-gray-500">
          EDUCATION
        </h2>
        <p>
          Graduated with a bachelor's degree in BBA from Prerna College of
          Commerce in 2018.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-500 border-b-4 border-gray-500">
          PROJECT EXPERIENCE
        </h2>
        <h3 className="font-semibold">
          Rentify- MERN Stack Property Rental Application
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Developed Rentify, a MERN stack application enabling users to search
            and list properties for rent.
          </li>
          <li>
            Developed and integrated advanced user authentication, registration
            and property upload features, enhancing security and user
            experience.
          </li>
          <li>
            Designed a responsive frontend using React.JS to display listed
            properties on the homepage.
          </li>
          <li>
            Created an admin section with dashboard access for managing users,
            properties, and contact messages.
          </li>
          <li>
            Utilized Node.js, Express, and MongoDB for backend development and
            data storage.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-500 border-b-4 border-gray-500">
          PROJECT LINKS
        </h2>
        <p><span className="text-gray-700 font-semibold">Personal Projects:</span> Notes App | Weather App | Rentify</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-500 border-b-4 border-gray-500">
          PROFILE SUMMARY
        </h2>
        <p>
          Dedicated and adaptable professional with close to 1 year of hands-on
          experience in frontend engineering and near 3 years in application
          support. Trained as a React Frontend Engineer at Numetry Technologies.
          Led successful frontend development for the “EduInfo India” project,
          collaborating seamlessly with backend teams. As an Information Process
          Specialist at Tata Consultancy Services, I managed tasks for the DHL
          project, progressed to a Mentor role, and oversaw team operations and
          process audits. Proven troubleshooting skills. Seeking opportunities
          to leverage my frontend Development and application support expertise
          in a dynamic work environment.
        </p>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={downloadPDF}
          className="bg-black flex items-center text-white px-4 py-2 rounded-md shadow-lg hover:bg-white hover:text-black font-semibold opacity-60"
          title="Downlaod Resume"
        >
          <MdSimCardDownload className="text-2xl" /> Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
