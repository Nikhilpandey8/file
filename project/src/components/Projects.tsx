import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of what this project does and the technologies used.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'gray-200',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Project Two',
      description: 'A brief description of what this project does and the technologies used.',
      tags: ['JavaScript', 'HTML/CSS', 'Firebase'],
      image: 'gray-300',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Project Three',
      description: 'A brief description of what this project does and the technologies used.',
      tags: ['Python', 'Django', 'SQL'],
      image: 'gray-400',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Project Four',
      description: 'A brief description of what this project does and the technologies used.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      image: 'gray-500',
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Other Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some other projects I've worked on during my academic journey and in my free time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className={`h-48 bg-${project.image} dark:bg-gray-700 flex items-center justify-center`}>
                <span className="text-gray-500 dark:text-gray-400">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.links.live} 
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Live
                  </a>
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg inline-block"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;