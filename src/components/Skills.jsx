import React from 'react';

const skills = [
  { id: 1, iconClass: 'devicon-html5-plain-wordmark', color: 'text-orange-500', label: 'HTML' },
  { id: 2, iconClass: 'devicon-javascript-plain', color: 'text-yellow-500', label: 'JavaScript' },
  { id: 3, iconClass: 'devicon-react-plain-wordmark', color: 'text-cyan-400', label: 'React' },
  { id: 4, iconClass: 'devicon-nodejs-plain-wordmark', color: 'text-green-400', label: 'Node.js' },
  { id: 5, iconClass: 'devicon-django-plain-wordmark', color: 'text-green-600', label: 'Django' },
  { id: 6, iconClass: 'devicon-android-plain-wordmark', color: 'text-green-500', label: 'Android' },
  { id: 7, iconClass: 'devicon-postgresql-plain', color: 'text-blue-500', label: 'PostgreSQL' },
  { id: 8, iconClass: 'devicon-java-plain-wordmark', color: 'text-red-500', label: 'Java' },
  { id: 9, iconClass: 'devicon-mongodb-plain-wordmark', color: 'text-green-700', label: 'MongoDB' },
  { id: 10, iconClass: 'devicon-express-original', color: 'text-gray-600', label: 'Express.js' },
  { id: 11, iconClass: 'devicon-bootstrap-plain-wordmark', color: 'text-purple-600', label: 'Bootstrap' },
  { id: 12, iconClass: 'devicon-tailwindcss-plain', color: 'text-teal-500', label: 'Tailwind CSS' },
  { id: 13, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', label: 'Scikit-learn' },
  { id: 14, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', label: 'Numpy' },
  { id: 15, iconClass: 'devicon-pandas-plain-wordmark', color: 'text-green-600', label: 'Pandas' },
  { id: 16, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg', label: 'Matplotlib' },
  { id: 17, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', label: 'SQLite' },
  { id: 18, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', label: 'Linux' },
  { id: 19, imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', label: 'C' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-20 text-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110"
              title={skill.label}
            >
              {skill.iconClass ? (
                <i className={`${skill.iconClass} ${skill.color} text-5xl`}></i>
              ) : (
                <img src={skill.imgSrc} alt={skill.label} className="w-16 h-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
