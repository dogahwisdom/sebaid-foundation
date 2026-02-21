import { LINKS } from '../constants';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <img src={LINKS.logo} alt="SEBaid Foundation" className="h-10 w-auto" />
              <span className="font-bold text-xl">SEBaid Foundation</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities and driving sustainable change through health, education, and social support initiatives across Ghana.
            </p>
            <div className="flex gap-4">
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-bold text-lg mb-6">Organization</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Mission & Vision</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Impact Stories</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get Involved</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#get-involved" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#get-involved" className="hover:text-white transition-colors">Partner with Us</a></li>
              <li><a href="#get-involved" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Advocate</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#events" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">Media & Videos</a></li>
              <li><a href={LINKS.feedback} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Feedback Form</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SEBaid Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
