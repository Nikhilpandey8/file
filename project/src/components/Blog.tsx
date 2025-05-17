import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How I Built My BCA Major Project',
      excerpt: 'A detailed walkthrough of my development process, challenges faced, and solutions implemented during my major project.',
      date: 'May 15, 2024',
      readTime: '8 min read',
      author: 'Your Name',
      category: 'Development',
      image: 'blue'
    },
    {
      title: 'Best Practices for Web Development',
      excerpt: 'A comprehensive guide on modern web development best practices that I learned during my BCA journey.',
      date: 'Apr 28, 2024',
      readTime: '6 min read',
      author: 'Your Name',
      category: 'Web Development',
      image: 'purple'
    },
    {
      title: 'My Experience with React and TypeScript',
      excerpt: 'Sharing my experience working with React and TypeScript for frontend development in my projects.',
      date: 'Apr 10, 2024',
      readTime: '5 min read',
      author: 'Your Name',
      category: 'Frontend',
      image: 'teal'
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Insights</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My thoughts, experiences, and insights from my journey through BCA and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className={`h-48 bg-gradient-to-r from-${post.image}-500 to-${post.image}-600 flex items-center justify-center p-8`}>
                <h3 className="text-xl font-bold text-white text-center">{post.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {post.category}
                  </span>
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors inline-block"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;