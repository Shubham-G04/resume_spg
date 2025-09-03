import React from 'react';
import { Cpu, Code, Wrench, Paintbrush } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core VLSI & Digital Design',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      skills: [
        'VLSI CAD',
        'VLSI Physical Design',
        'Digital Circuit Design',
        'Verilog / SystemVerilog',
        'RTL Design & Verification',
        '8051 & 8086 Assembly'
      ],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-8 h-8 text-emerald-400" />,
      skills: [
        'Cadence (nclaunch, Virtuoso, Genus, Innovus)',
        'Synopsys TCAD (Sentaurus Structure Editor, Workbench)',
        'ModelSim / QuestaSim',
        'Xilinx Vivado',
        'QFLOW',
        'SPICE Simulation'
      ],
      color: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Programming & Scripting',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      skills: [
        'Python',
        'Java',
        'TCL / TCL-tk',
        'Perl',
        'HTML / HTML5',
        'JavaScript',
        'REGEX',
        'Shell Scripting'
      ],
      color: 'from-purple-400 to-indigo-500',
    },
    {
      title: 'Creative & Design',
      icon: <Paintbrush className="w-8 h-8 text-orange-400" />,
      skills: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe InDesign',
        'Adobe Lightroom',
        'Adobe XD',
        'Fine Arts (14 years)',
        'UI/UX Design Principles'
      ],
      color: 'from-orange-400 to-red-500',
    },
  ];

  const certifications = [
    'Physical Design Implementation using Industry Tools',
    'Verilog HDL for Digital Design',
    'Advanced VLSI Design Methodologies',
    'Automation in EDA Tools'
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive blend of technical VLSI skills, programming expertise, and creative design capabilities 
            developed through academic pursuit and industry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 ml-4">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700/30 border border-slate-600/30 rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center">Professional Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4"></div>
                <span className="text-slate-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Continuous Learning</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Always exploring emerging technologies in VLSI design, from advanced node physical design 
              challenges to novel architectures like in-memory computing and custom processors. My artistic 
              background provides unique design intuition for complex engineering problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;