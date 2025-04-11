
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Get the navbar height to offset the scroll position
          const navbarHeight = document.querySelector('nav').offsetHeight;
          
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - navbarHeight - 20; // Extra 20px buffer
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Show/hide scroll-to-top button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.add("opacity-100");
        scrollToTopBtn.classList.remove("opacity-0");
      } else {
        scrollToTopBtn.classList.add("opacity-0");
        scrollToTopBtn.classList.remove("opacity-100");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
      
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      <button
        id="scrollToTop"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-violet-600 text-white rounded-full shadow-lg opacity-0 transition-opacity duration-300 hover:bg-violet-700 z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
