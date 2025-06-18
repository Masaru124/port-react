import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-center text-gray-400">
      <p>&copy; 2025 My Portfolio </p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/Masaru124"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/matharishwa-s-322518325"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
