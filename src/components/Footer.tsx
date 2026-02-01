import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src="/white.png"
                alt="Mentis Aura"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-300 text-sm mb-4">
              We publish ideas, not just words.
            </p>
            <p className="text-gray-400 text-xs italic">
              Where thought moves freely.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/book" className="text-gray-300 hover:text-white transition-colors">
                  The Contradicted Existence
                </a>
              </li>
              <li>
                <a href="/samples" className="text-gray-300 hover:text-white transition-colors">
                  Sample Chapters
                </a>
              </li>
              <li>
                <a href="/bulk-orders" className="text-gray-300 hover:text-white transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/about-author" className="text-gray-300 hover:text-white transition-colors">
                  About the Author
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/MentisAura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on X"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/mentis.aura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mentis-aura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.pinterest.com/mentisaura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on Pinterest"
                >
                  <FaPinterest className="w-5 h-5" />
                </a>
                <a
                  href="https://substack.com/@mentisaura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Subscribe to our Substack"
                >
                  <SiSubstack className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-400 mb-1">Contact</p>
              <p className="text-sm text-gray-300">30 N Gould St Ste R</p>
              <p className="text-sm text-gray-300">Sheridan, WY 82801</p>
              <p className="text-sm text-gray-300 mt-1">+1 251 384 3909</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2024, 2025 Nassim El Hassouni. Published by Mentis Aura LLC.
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            Where thought moves freely.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
