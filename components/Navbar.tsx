// src/components/Navbar.js
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-black/70 backdrop-blur-md'
    } border-b border-gray-800/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-500 transition-colors duration-300">
              hexbyte
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {/* Startup Program Button */}
            <Link href="/startup-program" className="relative group py-1">
              <span className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Startup program
              </span>
              {/* Always visible line with hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 group-hover:h-1 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-600" />
            </Link>

            {/* Let's Talk Button */}
            <Link
              href="/contact"
              className="relative px-6 py-2.5 bg-purple-500 text-white font-medium rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Let's Talk</span>
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-4">
            <Link
              href="/startup-program"
              className="block relative w-fit mx-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg">
                Startup program
              </span>
              {/* Always visible line for mobile */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500" />
            </Link>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;