import React from 'react';
import { Code, Database, Layout, Search, Server, Shield } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'C/C++', level: 55 },
  ];

  const skillCategories = [
    { 
      icon: <Layout />, 
      title: 'Frontend Development',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    { 
      icon: <Server />, 
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'PHP']
    },
    { 
      icon: <Database />, 
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    { 
      icon: <Code />, 
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C/C++', 'PHP']
    },
    { 
      icon: <Search />, 
      title: 'Tools & Methodologies',
      skills: ['Git', 'VS Code', 'Agile', 'JIRA', 'Figma']
    },
    { 
      icon: <Shield />, 
      title: 'Other',
      skills: ['Problem Solving', 'Team Collaboration', 'Project Management']
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            These are the skills I've acquired throughout my academic journey and personal projects.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skill Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mb-4">
                    <span className="text-blue-600 dark:text-blue-400">{category.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.title}</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;