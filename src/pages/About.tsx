import React from 'react';
import { GraduationCap, Award, Music, Palette, Zap } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      degree: 'B.Tech — Electronics Engineering (VLSI Design & Technology)',
      institution: 'VIT Chennai',
      period: '2023–2027',
      status: 'Current - 5th Semester | CGPA: 9.12',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    },
    {
      degree: 'Senior Secondary (XI–XII)',
      institution: 'Delhi Public School, Ruby Park, Kolkata',
      period: '2020–2022',
      status: '90.6%',
      icon: <Award className="w-6 h-6 text-blue-400" />,
    },
    {
      degree: 'High School (IX–X)',
      institution: 'Heritage International Public School, Kushinagar',
      period: '2018–2020',
      status: '94.6%',
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
  ];

  const interests = [
    {
      title: 'Fine Arts',
      description: '14 years of training',
      icon: <Palette className="w-8 h-8 text-purple-400" />,
    },
    {
      title: 'Music',
      description: 'Guitar, Ukulele, Drums',
      icon: <Music className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: 'Kung-Fu',
      description: 'Discipline & Focus',
      icon: <Zap className="w-8 h-8 text-orange-400" />,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">My Story</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a curious and disciplined individual with a deep passion for understanding the intricate 
                world of electronics and digital design. Currently pursuing my B.Tech in Electronics Engineering 
                with a specialization in VLSI Design & Technology at VIT Chennai, I'm in my 5th semester and 
                have been consistently exploring the fascinating intersection of hardware design and creative problem-solving.
              </p>
              <p>
                My journey in engineering is uniquely shaped by 14 years of fine arts training, which has instilled 
                in me a strong sense of aesthetics, attention to detail, and creative design intuition. This artistic 
                foundation, combined with my technical pursuits, allows me to approach VLSI design with both analytical 
                rigor and creative insight.
              </p>
              <p>
                Beyond academics, I'm passionate about music, playing guitar, ukulele, and drums. I also practice 
                Kung-Fu, which has taught me discipline, focus, and the pursuit of perfection — qualities that directly 
                translate to my approach in digital design and physical implementation.
              </p>
              <p>
                My current focus areas include VLSI CAD, physical design implementation, RTL design using 
                Verilog/SystemVerilog, and automation through TCL/Perl scripting. I'm particularly interested 
                in emerging areas like in-memory computing and custom processor architectures.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-200 mb-6">Life Outside Engineering</h2>
            <div className="grid grid-cols-1 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-200"
                >
                  <div className="flex items-center mb-3">
                    {interest.icon}
                    <h3 className="text-lg font-semibold text-slate-200 ml-3">{interest.title}</h3>
                  </div>
                  <p className="text-slate-400">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-200 mb-8 text-center">Education Timeline</h2>
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {education.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-200">{education.degree}</h3>
                      <span className="text-sm font-medium text-cyan-400 mt-1 sm:mt-0">{education.status}</span>
                    </div>
                    <p className="text-slate-300 font-medium mb-1">{education.institution}</p>
                    <p className="text-slate-400 text-sm">{education.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;