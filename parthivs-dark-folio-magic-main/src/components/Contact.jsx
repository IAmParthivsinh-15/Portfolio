
import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or connect with me directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-violet-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-4">Feel free to get in touch with me using any of these platforms:</p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:parthivsinhv@gmail.com"
                      className="flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-violet-400" />
                      <span className="text-gray-300">parthivsinhv@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://github.com/IAmParthivsinh-15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Github className="h-5 w-5 text-violet-400" />
                      <span className="text-gray-300">IAmParthivsinh-15</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/parthivsinh-vaghela-660266260/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-violet-400" />
                      <span className="text-gray-300">parthivsinh-vaghela</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Let's Connect</h4>
                  <p className="text-gray-400">
                    I'm open to discussing new projects, job opportunities, or just having a chat about technology and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-violet-400">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
