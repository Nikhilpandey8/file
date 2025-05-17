import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, HelpCircle, MapPin, CreditCard, User, LifeBuoy, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const Help: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get answers to your questions about RideShareWay. We're here to help you make the most of your ride-sharing experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">How does location matching work?</h3>
              </div>
              <p className="text-gray-600">
                Our system uses advanced GPS and location algorithms to match riders who are traveling along similar routes. 
                When you create or search for a ride, we look for users with pickup and destination points within a 5km radius 
                of your locations to ensure convenient matching.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">How does payment splitting work?</h3>
              </div>
              <p className="text-gray-600">
                RideShareWay provides a secure platform for sharing payment details with your co-riders. 
                You can upload QR codes for UPI payments or share other payment information securely 
                through our chat system. We never store your actual payment information on our servers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">How do I create or update my profile?</h3>
              </div>
              <p className="text-gray-600">
                After registering, go to the Profile section in your dashboard. Here, you can upload a profile 
                picture, update your contact information, and manage your account settings. Having a complete 
                profile helps build trust with potential co-riders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">How do I communicate with other riders?</h3>
              </div>
              <p className="text-gray-600">
                Once you join or create a ride, a chat room is automatically created for all participants. 
                You can send text messages, share images, and exchange contact details if needed. All communication 
                stays within the platform for your security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <LifeBuoy className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Is ride sharing safe?</h3>
              </div>
              <p className="text-gray-600">
                Safety is our top priority. All users are required to register with valid email addresses and 
                verify their accounts. We also encourage users to add profile pictures and complete their profiles. 
                Additionally, our in-app chat allows you to communicate with potential co-riders before meeting them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">How do I report issues or inappropriate behavior?</h3>
              </div>
              <p className="text-gray-600">
                If you encounter any issues or inappropriate behavior, please contact our support team immediately 
                at nikhilpandeynp2003@gmail.com. Include details about the incident, and we'll investigate promptly 
                to ensure a safe environment for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <Mail className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Have a question? Send us an email and we'll respond within 24 hours.</p>
              <a 
                href="mailto:nikhilpandeynp2003@gmail.com" 
                className="text-indigo-600 font-medium hover:text-indigo-800"
              >
                nikhilpandeynp2003@gmail.com
              </a>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <Phone className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Need immediate assistance? Give us a call during business hours.</p>
              <p className="text-indigo-600 font-medium">+91 9876543210</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <MessageSquare className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team for instant help with your issues.</p>
              <Button variant="primary" size="md">
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <div>
                <Button variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Help Resources */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-4">User Guide</h3>
              <p className="mb-4 text-indigo-100">
                Comprehensive guide to using all features of RideShareWay platform.
              </p>
              <Link to="#">
                <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  View Guide
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
              <p className="mb-4 text-indigo-100">
                Step-by-step video tutorials on how to use RideShareWay effectively.
              </p>
              <Link to="#">
                <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  Watch Videos
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-4">Community Forum</h3>
              <p className="mb-4 text-indigo-100">
                Connect with other users, share experiences, and get advice.
              </p>
              <Link to="#">
                <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  Join Forum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;