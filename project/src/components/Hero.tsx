import React from 'react';
import { ChevronDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen pt-20 flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                [Your Full Name]
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Final Year BCA Student at [Your College Name]
            </h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
              Welcome to my portfolio website showcasing my BCA major project and other work.
              I'm passionate about creating innovative solutions and learning new technologies.
            </p>
            <div className="flex space-x-4 pt-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                View My Project
              </button>
              <button className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                Download CV
              </button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/[your-github]" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <GitHub size={24} />
              </a>
              <a href="https://linkedin.com/in/[your-linkedin]" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:[your-email]" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-800 shadow-lg"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                {/* Add your profile photo URL here */}
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;