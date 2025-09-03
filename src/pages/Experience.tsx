import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Maven Silicon',
      role: 'VLSI Design Intern',
      period: 'May 2025 – July 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Physical Design Implementation of SPI using QFLOW',
      highlights: [
        'Implemented complete physical design flow for Serial Peripheral Interface (SPI) module',
        'Used QFLOW open-source physical design flow for place and route',
        'Participated in regular mentoring classes covering VLSI design methodologies',
        'Applied physical design constraints and successfully completed DRC/LVS verification',
        'Gained hands-on experience with standard cell libraries and floorplanning techniques'
      ],
      tools: ['QFLOW', 'Cadence Tools', 'Standard Cell Libraries', 'Physical Design Flow'],
      companyColor: 'from-emerald-500 to-teal-600',
    },
    {
      company: '1Stop.ai',
      role: 'Hardware Design Intern',
      period: 'May 2025 – June 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Verilog projects culminating in customizable 16-bit RISC-V implementation',
      highlights: [
        'Developed comprehensive Verilog projects starting from basic FSM design',
        'Designed and implemented a fully functional 16-bit RISC-V processor',
        'Created customizable instruction set architecture with direct addressing modes',
        'Applied structured verification methodologies using testbenches',
        'Gained expertise in digital design flow from specification to implementation'
      ],
      tools: ['Verilog', 'SystemVerilog', 'ModelSim', 'QuestaSim', 'RISC-V ISA'],
      companyColor: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Practical experience in VLSI design, physical implementation, and RTL development through 
            industry internships and hands-on projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.companyColor} bg-clip-text text-transparent`}>
                      {exp.company}
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-200 mb-3">{exp.role}</h4>
                  <p className="text-slate-300 font-medium mb-4">{exp.description}</p>
                </div>
                
                <div className="flex flex-col lg:items-end text-sm text-slate-400 space-y-1">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-slate-200 mb-3">Key Accomplishments</h5>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-400 flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-slate-300 mb-3">Technologies & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Looking for Opportunities</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internships and entry-level positions in VLSI design, physical design, 
              and digital design engineering. Interested in roles involving RTL design, verification, 
              and automation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;