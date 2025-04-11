import { Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Parthiv</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & Computer Science Student focused on creating
              elegant and functional applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/IAmParthivsinh-15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/parthivsinh-vaghela-660266260/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:parthivsinhv@gmail.com" 
                className="hover-effect"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">React.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Node.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Express.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">MongoDB</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">JavaScript</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">TypeScript</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Python</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">C++</span>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            &copy; {currentYear} Parthivsinh Vaghela. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse-slow" /> 
            and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
