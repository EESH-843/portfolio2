import React from "react";

const Education = ({ isDarkMode }) => {
  const educationDetails = [
    {
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      duration: "2022-2026",
      degree: "Bachelor of Technology in Computer Science and Engineering (Spl. in Artificial Intelligence and Machine Learning)",
      cgpa: "CGPA: 8.67",
    },
    {
      institution: "National Public School",
      duration: "2020-2021",
      degree: "CBSE Class XII Aggregate",
      score: "92.4%",
    },
    {
      institution: "National Public School",
      duration: "2018-2019",
      degree: "CBSE Class X Aggregate",
      score: "91.4%",
    },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen w-full p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-lg shadow-md mb-7 p-6 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-6 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Education Details
        </h2>

        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className={`p-4 mb-6 rounded-lg shadow-sm transition-all transform hover:scale-105 ${
              isDarkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-white text-gray-800"
            }`}
          >
            <h3
              className={`text-xl md:text-2xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {edu.institution}
            </h3>
            <p
              className={`text-sm md:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {edu.duration}
            </p>
            <p className="italic text-sm md:text-base">{edu.degree}</p>
            {edu.cgpa && <p className="mt-1 text-sm md:text-base">{edu.cgpa}</p>}
            {edu.score && <p className="mt-1 text-sm md:text-base">{edu.score}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
