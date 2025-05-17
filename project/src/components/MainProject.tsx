import React, { useState } from 'react';
import { Presentation as PresentationChart, Code, Users, Laptop, ExternalLink, FileText } from 'lucide-react';

const MainProject = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <PresentationChart size={20} /> },
    { id: 'technologies', label: 'Technologies', icon: <Code size={20} /> },
    { id: 'features', label: 'Features', icon: <Laptop size={20} /> },
    { id: 'team', label: 'Team', icon: <Users size={20} /> },
  ];

  return (
    <section id="main-project" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Major Project</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            This is my BCA final year major project, showcasing the culmination of my academic knowledge and technical skills.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              {/* Project screenshot placeholder */}
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                Project Screenshot
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                [Your Project Title]
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                A comprehensive [type of application] designed to [main purpose/goal].
              </p>
              
              <div className="flex space-x-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Web App
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Node.js
                </span>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={16} className="mr-1" />
                  View Live
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Code size={16} className="mr-1" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FileText size={16} className="mr-1" />
                  Documentation
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id 
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This project aims to [describe the main goal and purpose of your project]. It was developed as part of my BCA final year curriculum to demonstrate my understanding of [relevant subjects/concepts].
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The application solves [describe the problem it solves] by implementing [mention key implementations/approaches]. The development process involved extensive research, planning, and iterative development.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Key achievements include [mention notable achievements or challenges overcome during the project development].
                  </p>
                </div>
              )}

              {activeTab === 'technologies' && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Frontend</h5>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          React.js
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Tailwind CSS
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Redux
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Backend</h5>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Node.js
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Express.js
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          MongoDB
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Tools</h5>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Git & GitHub
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          VS Code
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Postman
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Deployment</h5>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Netlify (Frontend)
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          Render (Backend)
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          MongoDB Atlas (Database)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Feature 1</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Detailed description of feature 1 and its benefits. Explain how it works and why it's important.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Feature 2</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Detailed description of feature 2 and its benefits. Explain how it works and why it's important.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Feature 3</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Detailed description of feature 3 and its benefits. Explain how it works and why it's important.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Feature 4</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Detailed description of feature 4 and its benefits. Explain how it works and why it's important.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Team</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mr-4">
                        <span className="text-gray-500 dark:text-gray-400">Photo</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Your Name</h5>
                        <p className="text-gray-600 dark:text-gray-400">Team Lead & Developer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mr-4">
                        <span className="text-gray-500 dark:text-gray-400">Photo</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Team Member 2</h5>
                        <p className="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mr-4">
                        <span className="text-gray-500 dark:text-gray-400">Photo</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Team Member 3</h5>
                        <p className="text-gray-600 dark:text-gray-400">Backend Developer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mr-4">
                        <span className="text-gray-500 dark:text-gray-400">Photo</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">Project Guide</h5>
                        <p className="text-gray-600 dark:text-gray-400">Faculty Mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProject;