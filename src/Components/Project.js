import React, { useEffect } from "react";
import AOS from "aos";

import emi from "../assets/emi.png";
import notes from "../assets/notes.jpeg";
import weather from "../assets/weather.png";
import liveImg from "../assets/liveImg.png";
import githubImg from "../assets/githubImg.png";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);

  const emiGitHubURL = "https://github.com/ARDuryodhan/EMI-calculator";
  const emiLiveURL = "https://calculateemi.netlify.app";

  const notesGitHubURL = "https://github.com/ARDuryodhan/Notes_App";
  const notesLiveURL = " https://arduryodhan.github.io/Notes_App";

  const weatherGitHubURL = "https://github.com/ARDuryodhan/WeatherApp";
  const weatherLiveURL = "https://arduryodhan.github.io/WeatherApp";

  const projects = [
    {
      title: "EMI Calculator",
      description:
        "Developed an EMI calculator utilizing HTML, CSS, and JavaScript to assist users in estimating monthly loan repayments based on principal amount, interest rate, and loan tenure. Enhanced user experience with responsive design and intuitive functionality.",
      imageUrl: emi,
      githubUrl: emiGitHubURL,
      liveUrl: emiLiveURL,
    },
    {
      title: "Notes Application",
      description:
        "I developed a notes application using ReactJS, allowing users to create, edit, and organize notes seamlessly. Implemented features include real-time updates, user authentication, and responsive design, enhancing user experience and productivity.",
      imageUrl: notes,
      githubUrl: notesGitHubURL,
      liveUrl: notesLiveURL,
    },
    {
      title: "Weather App",
      description:
        "I developed a weather application using ReactJS, leveraging APIs to fetch real-time weather data and display it in an intuitive user interface. Implemented features include location-based weather forecasts, dynamic updates, and responsive design for seamless usability across devices.",
      imageUrl: weather,
      githubUrl: weatherGitHubURL,
      liveUrl: weatherLiveURL,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="flip-left"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 italic line-clamp-5">
                &#x201C;{project.description}&#x201D;
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.githubUrl}
                  className="text-blue-500 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ maxWidth: "5.5rem" }} // Adjust max width as per your design
                >
                  <img
                    src={githubImg}
                    alt="GitHub"
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="bg-gray-300 rounded hover:shadow-lg transition duration-300"
                  />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ maxWidth: "5.5rem" }}
                  className="hover:shadow-lg transition duration-300"
                >
                  <img
                    src={liveImg}
                    alt="Live"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
