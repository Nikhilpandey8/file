import React from 'react';
import { GraduationCap, Briefcase, Award, User } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Hello! I'm a final year BCA student at [Your College Name]. I'm passionate about [your interests, e.g., web development, AI, mobile apps]. 
              With a strong foundation in computer science and hands-on experience through various projects, 
              I'm eager to apply my knowledge to solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My major project focuses on [brief description of your major project]. Through this project, 
              I've gained valuable experience in [technologies/skills] and developed a deeper understanding of 
              [relevant domain knowledge].
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Outside of academics, I enjoy [your hobbies/interests] and continuously learning new technologies 
              through online courses and personal projects.
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor of Computer Applications<br />
                [Your College Name]<br />
                [Start Year] - [End Year]
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full w-fit mb-4">
                <Award className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Achievements</h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>[Achievement 1]</li>
                <li>[Achievement 2]</li>
                <li>[Achievement 3]</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full w-fit mb-4">
                <Briefcase className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                [Position], [Company Name]<br />
                [Duration]<br />
                [Brief description]
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-full w-fit mb-4">
                <User className="text-amber-600 dark:text-amber-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interests</h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>[Interest 1]</li>
                <li>[Interest 2]</li>
                <li>[Interest 3]</li>
                <li>[Interest 4]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;