import React, { useState } from 'react';
import { Filter, Calendar, Code, Zap, ExternalLink, Play } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'completed', label: 'Completed' },
    { id: 'internship', label: 'Internship' },
    { id: 'academic', label: 'Academic' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'rtl', label: 'RTL Design' },
    { id: 'automation', label: 'Automation' },
  ];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    return project.tags.includes(filter);
  });

  const ongoingProjects = filteredProjects.filter(p => p.status === 'ongoing');
  const completedProjects = filteredProjects.filter(p => p.status === 'completed');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects & Research
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            A collection of VLSI design projects, RTL implementations, and automation tools spanning 
            academic research and industry internships.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-slate-300'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Ongoing Projects Section */}
        {ongoingProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Zap className="w-6 h-6 text-teal-400 mr-3" />
              <h2 className="text-2xl font-bold text-slate-200">Ongoing Projects</h2>
              <div className="ml-4 px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full">
                Active Research
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ongoingProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isOngoing={true}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects Section */}
        {completedProjects.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <Code className="w-6 h-6 text-slate-400 mr-3" />
              <h2 className="text-2xl font-bold text-slate-200">Completed Projects</h2>
              <div className="ml-4 px-3 py-1 bg-slate-600/30 text-slate-400 text-xs font-medium rounded-full">
                Past Work
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isOngoing={false}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-400 mb-2">No projects found</h3>
            <p className="text-slate-500">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;