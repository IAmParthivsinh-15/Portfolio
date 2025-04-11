import { ArrowDownCircle, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-20 overflow-hidden relative"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-light text-gray-300">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">
                Parthivsinh Vaghela
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 py-4">
                Full-Stack Developer & Computer Science Student
              </p>
            </div>

            <p className="text-gray-300 max-w-2xl">
              I specialize in building modern web applications using the MERN
              stack. With a strong foundation in cybersecurity and machine
              learning, I create robust, scalable, and secure digital solutions.
            </p>

            <div className="flex space-x-5 pt-4">
              <a
                href="https://github.com/IAmParthivsinh-15"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Github className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/parthivsinh-vaghela-660266260/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="mailto:parthivsinhv@gmail.com" className="hover-effect">
                <Mail className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>

            <div className="pt-8">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105"
              >
                Explore My Work
                <ArrowDownCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="w-80 h-80 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-violet-500/20">
                <div className="w-full h-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dsdxjgbe5/image/upload/v1744393987/xx32nkywexfnqykki9mj.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDownCircle className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
