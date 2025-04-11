
import { Code, Cpu, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              Hello! I'm Parthivsinh Vaghela, a passionate Computer Science student at Nirma University, 
              graduating in June 2026. I specialize in full-stack web development using the MERN stack 
              and have a strong interest in cybersecurity, machine learning, and system-level programming.
            </p>
            
            <p className="text-gray-300">
              I actively contribute to open-source projects, participate in hackathons, and enjoy building 
              meaningful digital solutions that solve real-world problems. My goal is to leverage technology 
              to create impactful applications that enhance user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-card p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <GraduationCap className="h-8 w-8 text-violet-500 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Education</h3>
                <p className="text-gray-400 text-sm">Computer Science, Nirma University</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <Code className="h-8 w-8 text-violet-500 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Development</h3>
                <p className="text-gray-400 text-sm">Full-Stack MERN Developer</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <Cpu className="h-8 w-8 text-violet-500 mb-3" />
                <h3 className="text-lg font-semibold mb-1">ML & Security</h3>
                <p className="text-gray-400 text-sm">AI and Cybersecurity Enthusiast</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <Trophy className="h-8 w-8 text-violet-500 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Competitive</h3>
                <p className="text-gray-400 text-sm">Codeforces Rating: 1278</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-10 right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-[50px]"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px]"></div>
            
            <div className="glass-card p-8 rounded-lg border border-white/10 relative z-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-violet-400">My Focus Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      <span className="text-gray-300">Full-Stack Web Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      <span className="text-gray-300">Machine Learning Applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      <span className="text-gray-300">Cybersecurity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      <span className="text-gray-300">System-Level Programming</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-400">My Education</h3>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-indigo-400 mt-1" />
                    <div>
                      <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                      <p className="text-gray-400">Nirma University</p>
                      <p className="text-gray-500 text-sm">Graduating: June 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
