
import { useState } from 'react';
import { ExternalLink, Github, Code, Cpu, Database, Server } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Chat App Backend - MERN Stack',
      description: 'Built a real-time chat backend system with support for user management and group chats. Implemented RESTful APIs and secured communication through structured access control. Integrated Kafka to manage high traffic and added custom logging for enhanced security.',
      github: 'https://github.com/IAmParthivsinh-15/Chat-App---MERN',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Kafka', 'JavaScript'],
      icon: <Server className="h-6 w-6" />,
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Malware Detection Using ML',
      description: 'Designed a malware detection model that achieved 89% accuracy. Employed feature engineering and selection techniques to improve classifier performance. Applied ensemble learning using a Voting Classifier.',
      github: 'https://github.com/IAmParthivsinh-15/Track-4-RedHat-Hackers-Mined-Hackathon',
      tags: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost'],
      icon: <Cpu className="h-6 w-6" />,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'Memory Allocation Algorithms',
      description: 'Implemented First Fit, Best Fit, Worst Fit, and Next Fit algorithms. Designed an intuitive user interface for visualizing allocation processes.',
      github: 'https://github.com/IAmParthivsinh-15/Memory_Allocation_Algorithms',
      tags: ['JavaScript', 'HTML', 'CSS'],
      icon: <Code className="h-6 w-6" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 4,
      title: 'Ciphering Algorithms',
      description: 'Developed a ciphering suite supporting DES, RSA, and classical substitution ciphers like Vigenère, Playfair, and Affine. Enabled interactive encryption/decryption through clean React components.',
      github: 'https://github.com/IAmParthivsinh-15/Ciphering_Algorithms',
      tags: ['C++', 'TypeScript', 'Next.js', 'HTML/CSS'],
      icon: <Database className="h-6 w-6" />,
      color: 'from-pink-600 to-rose-600'
    },
  ];

  return (
    <section id="projects" className="section-padding bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale"
                  >
                    <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
