export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  status: 'ongoing' | 'completed';
  tags: string[];
  tools: string[];
  highlights: string[];
  progress?: number;
  type: string;
  detailed_description?: string;
  results?: string[];
  github_url?: string;
  demo_url?: string;
}

export const projectsData: Project[] = [
  {
    id: 'fm-netlist-partitioning',
    title: 'FM-Based Netlist Partitioning & Layout Visualization Tool',
    description: 'Netlist partitioner using the Fiduccia–Mattheyses algorithm with multiple randomized runs to minimize cut size and selecting the best partition.',
    period: '5th Semester (2025)',
    status: 'ongoing',
    tags: ['ongoing', 'academic', 'automation'],
    tools: ['Python', 'NetworkX', 'D3.js', 'Algorithm Implementation', 'Data Visualization'],
    highlights: [
      'Implementing Fiduccia–Mattheyses algorithm with optimizations',
      'Multiple randomized runs for optimal partition selection',
      'Interactive block layout visualization system',
      'Real-time cut-size minimization tracking',
      'Downloadable netlist samples and results'
    ],
    progress: 75,
    type: 'Academic Research',
    detailed_description: 'Advanced netlist partitioning tool implementing the Fiduccia–Mattheyses algorithm with enhanced optimization strategies.',
  },
  {
    id: 'sram-in-memory-computing',
    title: 'Implementation of In-Memory Computing on SRAM (8×8 6T cell array)',
    description: 'Cadence Virtuoso design of an 8×8 SRAM (6T) implementing in-memory arithmetic and logic operations to reduce data movement.',
    period: '5th Semester (2025)',
    status: 'ongoing',
    tags: ['ongoing', 'academic', 'hardware'],
    tools: ['Cadence Virtuoso', 'SPICE', 'ModelSim', 'QuestaSim', 'Layout Design'],
    highlights: [
      'Custom 6T SRAM cell array design in Virtuoso',
      'In-memory arithmetic operations (add, sub, logic)',
      'Input-controlled functionality implementation',
      'Complete DRC/LVS verification flow',
      'Performance analysis for latency, area, and power'
    ],
    progress: 30,
    type: 'Academic Research',
    detailed_description: 'Novel approach to in-memory computing using standard 6T SRAM cells with custom control logic.',
  },
  {
    id: 'risc-v-32bit',
    title: '32-bit RISC-V Architecture (Custom Direct Addressing Mode)',
    description: 'Design of a 32-bit RISC-V style CPU with custom direct addressing mode instruction set; RTL design and verification.',
    period: 'Ongoing',
    status: 'ongoing',
    tags: ['ongoing', 'academic', 'rtl'],
    tools: ['Verilog', 'SystemVerilog', 'ModelSim', 'QuestaSim', 'Vivado'],
    highlights: [
      'Custom instruction set with direct addressing modes',
      'Complete pipeline design and implementation',
      'Comprehensive verification testbench suite',
      'FPGA prototyping capabilities',
      'Performance optimization and analysis'
    ],
    progress: 45,
    type: 'Academic Research',
    detailed_description: 'Full-scale processor design with custom ISA extensions for enhanced addressing capabilities.',
  },
  {
    id: 'spi-physical-design',
    title: 'Physical Design Implementation of Serial Peripheral Interface using QFLOW',
    description: 'Full physical design implementation of an SPI module using QFLOW open-source flow as part of Maven Silicon internship.',
    period: 'May–July 2025',
    status: 'completed',
    tags: ['completed', 'internship', 'hardware'],
    tools: ['QFLOW', 'Cadence Tools', 'Standard Cell Libraries', 'DRC/LVS'],
    highlights: [
      'Complete SPI module physical implementation',
      'QFLOW open-source design flow mastery',
      'Successful DRC/LVS verification completion',
      'Weekly mentorship and design reviews',
      'Industry-standard physical design practices'
    ],
    type: 'Internship Project',
    detailed_description: 'Comprehensive physical design project demonstrating industry-standard implementation flow.',
  },
  {
    id: 'risc-v-16bit',
    title: 'Design of 16-bit RISC-V Processor using Verilog',
    description: 'End-to-end Verilog projects culminating in a customizable 16-bit RISC-V processor implementation with structured verification.',
    period: 'May–June 2025',
    status: 'completed',
    tags: ['completed', 'internship', 'rtl'],
    tools: ['Verilog', 'ModelSim', 'QuestaSim', 'Testbench Design'],
    highlights: [
      'Complete 16-bit RISC-V processor design',
      'Modular and customizable architecture',
      'Structured verification methodology',
      'FSM-based control unit implementation',
      'Comprehensive testbench coverage'
    ],
    type: 'Internship Project',
    detailed_description: 'Full processor implementation with emphasis on verification and customization.',
  },
  {
    id: 'image-recognizer',
    title: 'Image Recogniser Using Verilog & Python',
    description: 'A simplified image recogniser implemented as node/neuron structures in Verilog with Python automation for data handling.',
    period: '2nd Semester (2024)',
    status: 'completed',
    tags: ['completed', 'academic', 'rtl'],
    tools: ['Verilog', 'Python', 'ModelSim', 'Image Processing'],
    highlights: [
      'Neural network structure in hardware (Verilog)',
      'Python automation for data preprocessing',
      'Custom activation function implementation',
      'Image classification accuracy testing',
      'Hardware-software integration methodology'
    ],
    type: 'Academic Project',
    detailed_description: 'Novel approach to image recognition using hardware-based neural network implementation.',
  },
  {
    id: 'tcl-perl-automation',
    title: 'TCL & PERL Script Projects (Automation & Verification)',
    description: 'Signal & system automation using TCL-Perl; module & testbench generator; log/netlist/SDC/Verilog analyzer using REGEX.',
    period: '4th Semester (2025)',
    status: 'completed',
    tags: ['completed', 'academic', 'automation'],
    tools: ['TCL', 'Perl', 'REGEX', 'Shell Scripting', 'EDA Integration'],
    highlights: [
      'Automated testbench generation scripts',
      'Netlist and SDC file analyzers',
      'Verilog code parsing and modification tools',
      'Log file analysis and reporting',
      'EDA tool integration and workflow automation'
    ],
    type: 'Academic Project',
    detailed_description: 'Comprehensive automation suite for VLSI design flow optimization.',
  },
  {
    id: 'gui-verification',
    title: 'GUI-based System Verification Environment',
    description: 'Desktop GUI application for generating verification modules and testbench scaffolds with customizable parameters.',
    period: '4th Semester (2025)',
    status: 'completed',
    tags: ['completed', 'academic', 'automation'],
    tools: ['TCL-tk', 'Python', 'GUI Development', 'Code Generation'],
    highlights: [
      'Intuitive GUI for verification setup',
      'Automated testbench scaffold generation',
      'Customizable verification parameters',
      'Template-based code generation',
      'User-friendly verification workflow'
    ],
    type: 'Academic Project',
    detailed_description: 'User-friendly tool for streamlining verification environment setup.',
  },
  {
    id: 'sound-equalizer',
    title: 'Sound Equaliser (Hardware)',
    description: 'Hardware sound equalizer using Arduino and signal processing to alter bass/mid/treble in live audio streams.',
    period: '3rd Semester (2024)',
    status: 'completed',
    tags: ['completed', 'academic', 'hardware'],
    tools: ['Arduino', 'Signal Processing', 'PCB Design', 'Audio Processing'],
    highlights: [
      'Real-time audio signal processing',
      'Multi-band frequency analysis',
      'Hardware-based filter implementation',
      'Interactive control interface',
      'Live audio demonstration capability'
    ],
    type: 'Academic Project',
    detailed_description: 'Hardware implementation of real-time audio processing with custom filter design.',
  },
];