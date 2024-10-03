import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-white focus:outline-none lg:hidden">
              <FiMenu size={24} />
            </button>
            <div className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight">stitchflow</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200">Platform</a>
            <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200">Integrations</a>
            <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200">Company</a>
            <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-indigo-700 text-white placeholder-indigo-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white focus:bg-indigo-600 transition-all duration-200"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
              </div>
            </div>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Schedule a demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;