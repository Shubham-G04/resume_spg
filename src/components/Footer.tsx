import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Subham Prasad Gupta</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Electronics Engineer & VLSI enthusiast blending rigorous physical design and RTL engineering 
              with 14 years of fine-arts training. Currently pursuing B.Tech at VIT Chennai.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-300 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/projects" className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                View Projects
              </a>
              <a href="/experience" className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Experience
              </a>
              <a href="/skills" className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Skills & Tools
              </a>
              <a href="/resume.pdf" download className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Download Resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-300 mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:shubham01dec04@gmail.com"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                shubham01dec04@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/subham-pr-gupta-088a2328a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
              <a
                href="tel:+919830755812"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 9830755812
              </a>
              <div className="flex items-center text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                VIT Chennai, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Subham Prasad Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;