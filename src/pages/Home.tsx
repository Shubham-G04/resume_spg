import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Image Column */}
          <div className="flex items-end justify-center pt-8 sm:pt-12">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
              <img
                src="https://i.postimg.cc/DZ7NXL3F/pfp-image.jpg"
                alt="Subham Prasad Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-end text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Subham Prasad Gupta
          </h1>

          <div className="text-lg sm:text-xl text-slate-300 mb-6 space-y-2">
            <p className="font-semibold">VLSI Engineer • Physical Design • RTL Development</p>
            <p className="text-slate-400 text-base mt-2">B.Tech Electronics Engineering (VLSI Design & Technology)</p>
            <p className="text-slate-400 text-base">VIT Chennai • Class of 2027</p>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center text-center mb-10">
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
             I am a B-Tech student at Vellore Institute of Technology, Chennai, specializing in VLSI Design and 
             Technology. Driven by curiosity and a passion for learning, I combine my technical skills with 14 years of
             fine arts training, musical experience, and disciplined Kung-Fu practice to strive for perfection in
             everything I do.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
          >
            View Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 bg-slate-800 text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-slate-400 text-sm">Industry Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-slate-400 text-sm">Ongoing Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
            <div className="text-slate-400 text-sm">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">5th</div>
            <div className="text-slate-400 text-sm">Semester B.Tech</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">9.12</div>
            <div className="text-slate-400 text-sm">CGPA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;