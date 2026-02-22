import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-white/70 backdrop-blur-xl border-b border-black/5 supports-[backdrop-filter]:bg-white/60' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
            <img src={LINKS.logo} alt="SebAid Foundation" className="h-10 w-auto" />
            <span className={`font-semibold text-xl tracking-tight transition-colors duration-300 ${
              scrolled || isOpen ? 'text-gray-900' : 'text-white'
            }`}>
              SebAid Foundation
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-black hover:bg-black/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-involved"
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                scrolled 
                  ? 'bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/5' 
                  : 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10'
              }`}
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled || isOpen ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden h-screen"
          >
            <div className="px-4 py-8 space-y-6 flex flex-col items-center justify-center h-full pb-32">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
