import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate full-stack developer and Android developer with a growing skillset in web and
              Android development. I'm focused on learning the latest technologies, and I'm eager to
              contribute to innovative projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="#skills"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Skills
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                See Projects
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">Fresh Start</h3>
                <p className="text-gray-400">Focused on growth and learning</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">50+ Projects</h3>
                <p className="text-gray-400">Web & Android Applications</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">Frontend</h3>
                <p className="text-gray-400">React, Tailwind CSS, HTML, CSS</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">Backend</h3>
                <p className="text-gray-400">Node.js, Django, API Development</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">Android</h3>
                <p className="text-gray-400">Kotlin, Java, Jetpack Compose</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">Data Analysis</h3>
                <p className="text-gray-400">Python, Pandas, Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
