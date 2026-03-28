import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="bg-[#263238] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-[#26C6DA]" /> (123) 456-7890</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-[#26C6DA]" /> hello@pureshinecleaners.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-[#26C6DA]" /> Mon–Sat, 8:00 AM – 6:00 PM
          </div>
        </div>
      </div>
      
      <nav className={cn(
        "transition-all duration-300 px-4 md:px-8 py-4 flex items-center justify-between",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm"
      )}>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1E88E5] rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
          <span className="text-2xl font-bold tracking-tight text-[#263238]">PureShine <span className="text-[#1E88E5]">Cleaners</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium transition-colors hover:text-[#1E88E5]",
                location.pathname === link.href ? "text-[#1E88E5]" : "text-[#263238]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-a-quote"
            className="bg-[#1E88E5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#26C6DA] transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#263238]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 gap-4 md:hidden animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-[#263238]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-a-quote"
              className="bg-[#1E88E5] text-white text-center px-6 py-3 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
