import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, MessageSquare, Briefcase, Share2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1E88E5] rounded-md flex items-center justify-center font-bold text-white">P</div>
            <span className="text-xl font-bold tracking-tight">PureShine <span className="text-[#26C6DA]">Cleaners</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            PureShine Cleaners provides reliable home, apartment, office, and move-out cleaning services with simple booking and professional service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#26C6DA] transition-colors" aria-label="Facebook"><MessageSquare size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#26C6DA] transition-colors" aria-label="Twitter"><Share2 size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#26C6DA] transition-colors" aria-label="Instagram"><Globe size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#26C6DA] transition-colors" aria-label="LinkedIn"><Briefcase size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/get-a-quote" className="text-gray-400 hover:text-white transition-colors text-[#26C6DA]">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#26C6DA] shrink-0" />
              <span className="text-gray-400">123 Clean Way, Suite 100<br />Modern City, MC 54321</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#26C6DA] shrink-0" />
              <span className="text-gray-400">(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#26C6DA] shrink-0" />
              <span className="text-gray-400">hello@pureshinecleaners.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe for cleaning tips and special offers.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-[#1E88E5] outline-none" 
            />
            <button className="bg-[#1E88E5] px-4 py-2 rounded-r-md hover:bg-[#26C6DA] transition-colors font-semibold">Join</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {currentYear} PureShine Cleaners. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
