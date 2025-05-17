import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, MessageSquare, CreditCard, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Share Your Ride, Save Money & Connect
              </h1>
              <p className="text-xl text-indigo-100">
                RideShareWay connects riders with each other to share cab rides, 
                split fares, and make travel more affordable.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/ride-share">
                  <Button variant="primary" size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                    Share a Ride
                  </Button>
                </Link>
                <Link to="/join-ride">
                  <Button variant="secondary" size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800 border border-white">
                    Join a Ride
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/7289756/pexels-photo-7289756.jpeg" 
                  alt="People sharing ride" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm">New Delhi → Mumbai</p>
                        <p className="text-indigo-100 text-xs">₹800 per person • Tomorrow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How RideShareWay Works</h2>
            <p className="text-lg text-gray-600">
              Our platform makes it easy to connect with other travelers and share your rides in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create or Join a Ride</h3>
              <p className="text-gray-600">
                Enter your pickup location, destination, and date. Then choose to either share your ride or join an existing one.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect With Co-Travelers</h3>
              <p className="text-gray-600">
                Our system automatically matches you with riders heading in the same direction, making coordination effortless.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Split Costs & Save</h3>
              <p className="text-gray-600">
                Share the fare with your co-riders and save money. Use our built-in payment splitting feature for convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features You'll Love</h2>
            <p className="text-lg text-gray-600">
              RideShareWay is packed with useful features designed to make ride sharing safe, convenient, and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Location Matching</h3>
                    <p className="text-gray-600">
                      Our advanced location services ensure you're matched with rides that are truly on your route, saving time and hassle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Chat System</h3>
                    <p className="text-gray-600">
                      Communicate easily with your co-riders through our built-in messaging system to coordinate pickup times and locations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Payment Splitting</h3>
                    <p className="text-gray-600">
                      Share QR codes and payment details securely within the app to make fare splitting simple and transparent.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">User Verification & Safety</h3>
                    <p className="text-gray-600">
                      All users are verified with profiles and ratings, giving you peace of mind when sharing rides with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[600px] transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg" 
                alt="People sharing a cab" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Save Up To 50% On Your Daily Commute</h3>
                <p className="text-indigo-100 mb-4">
                  Join thousands of users who are already saving money by sharing their rides.
                </p>
                <Link to="/register">
                  <Button variant="primary" size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">
              Thousands of people are using RideShareWay to make their commutes more affordable and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                    alt="Testimonial avatar" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-500">Delhi</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "RideShareWay has completely transformed my daily commute to work. I save over ₹2000 every month and have made some great friends along the way!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt="Testimonial avatar" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Raj Patel</h4>
                  <p className="text-gray-500">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a frequent traveler between Mumbai and Pune, finding co-passengers was always challenging. With RideShareWay, it's now just a few clicks away!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Testimonial avatar" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Anita Desai</h4>
                  <p className="text-gray-500">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The payment splitting feature is a game-changer! No more awkward conversations about money. Everything is transparent and easy to manage."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Sharing Your Rides?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already saving money and reducing their carbon footprint with RideShareWay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <Button variant="primary" size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                Create an Account
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="secondary" size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800 border border-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;