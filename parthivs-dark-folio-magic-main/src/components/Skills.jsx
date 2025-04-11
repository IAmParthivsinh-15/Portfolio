import { Check } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', progress: '90%' },
    { name: 'React.js', progress: '85%' },
    { name: 'Node.js & Express', progress: '80%' },
    { name: 'MongoDB', progress: '75%' },
    { name: 'C++', progress: '85%' },
    { name: 'Python', progress: '70%' },
    { name: 'Java', progress: '65%' },
    { name: 'Docker & Kubernetes', progress: '60%' },
  ];

  const otherSkills = [
    'HTML/CSS/Tailwind', 
    'Git & GitHub', 
    'REST APIs', 
    'MySQL', 
    'Machine Learning',
    'DevOps', 
    'Jenkins', 
    'GitOps',
    'ArgoCD',
    'Kafka',
    'Unix Shell',
    'VS Code'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I've developed a diverse skill set throughout my educational and personal projects,
            focusing on modern web technologies and programming languages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills with Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-violet-400">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.progress}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full">
                    <div 
                      className="skill-bar"
                      style={{ width: skill.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Tools & Technologies</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 glass-card rounded-lg hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-violet-400">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-300">Communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-300">Teamwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-300">Leadership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-300">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
