import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Download, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email
    const mailtoLink = `mailto:shubham01dec04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            I'm always interested in discussing VLSI design opportunities, research collaborations, 
            or innovative projects in digital design and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-200 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-200">
                <div className="flex items-center mb-3">
                  <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                  <h3 className="text-lg font-medium text-slate-200">Email</h3>
                </div>
                <div className="space-y-2 ml-10">
                  <a
                    href="mailto:shubham01dec04@gmail.com"
                    className="block text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    shubham01dec04@gmail.com (Personal)
                  </a>
                  <a
                    href="mailto:subhamprasad.gupta2023@vitstudent.ac.in"
                    className="block text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    subhamprasad.gupta2023@vitstudent.ac.in (College)
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-200">
                <div className="flex items-center mb-3">
                  <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
                  <h3 className="text-lg font-medium text-slate-200">LinkedIn</h3>
                </div>
                <div className="ml-10">
                  <a
                    href="https://www.linkedin.com/in/subham-pr-gupta-088a2328a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    Professional Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-200">
                <div className="flex items-center mb-3">
                  <Phone className="w-6 h-6 text-emerald-400 mr-4" />
                  <h3 className="text-lg font-medium text-slate-200">Phone</h3>
                </div>
                <div className="ml-10">
                  <a
                    href="tel:+919830755812"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    +91 9830755812
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <h3 className="text-lg font-medium text-slate-200">Location</h3>
                </div>
                <div className="ml-10">
                  <p className="text-slate-400">VIT Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium w-full justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume - Subham Prasad Gupta (PDF)
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-200 mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-slate-800/20 border border-slate-700/30 rounded-lg">
              <h3 className="text-lg font-medium text-slate-200 mb-3">Quick Response</h3>
              <p className="text-slate-400 text-sm">
                I typically respond to messages within 24-48 hours. For urgent inquiries, 
                feel free to reach out directly via phone or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;