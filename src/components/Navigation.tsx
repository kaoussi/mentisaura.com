import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img
                src="/default.png"
                alt="Mentis Aura"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <a
              href="/book"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              The Book
            </a>
            <a
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              About
            </a>
            <a
              href="/samples"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Sample Chapters
            </a>
            <a
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Contact
            </a>
            <a
              href="/faq"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              FAQ
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2">
            <a
              href="/book"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              The Book
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/samples"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sample Chapters
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/faq"
              className="block px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
