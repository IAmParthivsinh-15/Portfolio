
import { Briefcase, Calendar, Award, Code, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Amazon ML Summer School',
      period: 'July 2024',
      description: 'Attended intensive ML training sessions conducted by Amazon scientists. Gained hands-on exposure to supervised and unsupervised learning techniques.',
      icon: <Calendar className="h-5 w-5" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Google Developer Group (GDG), Core Team Member',
      period: 'Oct 2024 - Present',
      description: 'Led web development events and workshops, fostering community growth. Contributed to event logistics and technical mentoring.',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'from-red-600 to-amber-600'
    },
    {
      title: 'Community Service Internship',
      period: 'May 2023 - June 2023',
      description: 'Volunteered to educate and engage children in foundational learning.',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const certifications = [
    {
      title: 'Data Analysis Certificate',
      issuer: 'IBM Cognitive Classes',
      link: 'https://www.credly.com/badges/fc0ae179-f192-4475-8391-a5b3432a3aab/linked_in_profile'
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/d872b826a6c4'
    },
    {
      title: 'Data Analysis Using Python',
      issuer: 'Credly',
      link: '#'
    }
  ];

  const profiles = [
    {
      name: 'Codolio',
      link: 'https://codolio.com/profile/parthivsinhv'
    },
    {
      name: 'Codeforces (SolitaryScripter, Max Rating: 1278)',
      link: 'https://codeforces.com/profile/SolitaryScripter'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-violet-400">Experience Timeline</h3>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-violet-500 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start lg:justify-center group">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br rounded-full shadow-lg shadow-violet-500/20 ring-4 ring-black text-white z-10">
                    {exp.icon}
                  </div>
                  
                  <div className="ml-6 lg:w-[calc(50%-2.5rem)] lg:mr-auto lg:ml-0 glass-card p-5 rounded-lg">
                    <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${exp.color} mb-3`}></div>
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-violet-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Certifications */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-violet-400">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <h4 className="text-white font-medium">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Competitive Programming Profiles */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-violet-400">Competitive Programming</h3>
              </div>
              
              <div className="space-y-4">
                {profiles.map((profile, index) => (
                  <a 
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <h4 className="text-white font-medium">{profile.name}</h4>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      View Profile <ExternalLink className="h-3 w-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
