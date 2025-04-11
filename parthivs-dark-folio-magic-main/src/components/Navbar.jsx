
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-5'
    }`} style={{ height: 'auto' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          <span className="gradient-text">Parthiv</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative hover-effect
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
                after:bg-violet-500 after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white hover-effect"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg shadow-lg py-4 px-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
