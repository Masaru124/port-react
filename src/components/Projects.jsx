import React from "react";

const projects = [
  {
    id: 1,
    title: "AMC News APP",
    description:
      "A mobile application built with Kotlin and Jetpack Compose. Users can stay up-to-date with the latest news.",
    technologies: ["Java", "XML"],
    apkLink: "/apk/AMC news.apk",
    githubLink: "https://github.com/Masaru124/AMC-android",
    hasApk: true,
  },
  {
    id: 2,
    title: "AMC News Website",
    description:
      "A news website using Django for the backend and SQL for the database. Provides real-time news updates.",
    technologies: ["Django", "Python", "SQL"],
    githubLink: "https://github.com/Masaru124/News",
  },
  {
    id: 3,
    title: "ElectroSolve",
    description:
      "A platform designed for Electronics students to solve coding challenges and improve problem-solving skills.",
    technologies: ["Django", "Python", "SQL", "Tailwind"],
    githubLink: "https://github.com/Masaru124/ElectroSolve",
  },
  {
    id: 4,
    title: "Car Price Prediction",
    description:
      "A machine learning project to predict car prices based on features like model, mileage, and year.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    githubLink:
      "https://github.com/Masaru124/OIBSIP-/tree/main/Car%20Price%20Prediction",
  },
  {
    id: 5,
    title: "Unemployment Analysis",
    description:
      "An analysis of unemployment trends using data to identify key factors and predict future trends.",
    technologies: ["Python", "Pandas", "Data Analysis", "Jupyter Notebooks"],
    githubLink:
      "https://github.com/Masaru124/OIBSIP-/tree/main/Unemployment%20analysis",
  },
  {
    id: 6,
    title: "Recipe APP",
    description:
      "A mobile application built with Kotlin and Jetpack Compose, allowing users to explore and create recipes. It integrates with a recipe API for real-time data.",
    technologies: ["Kotlin", "Jetpack Compose", "API Integration"],
    apkLink: "/apk/Recipe.apk",
    githubLink: "https://github.com/Masaru124/Recipe-Android",
    hasApk: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <ul className="list-disc ml-5 text-gray-300 mb-4">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
