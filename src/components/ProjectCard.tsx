import React from 'react';
import { Calendar, Tag, ExternalLink, Play, GitBranch, Clock } from 'lucide-react';

interface Project {
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
}

interface ProjectCardProps {
  project: Project;
  isOngoing: boolean;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isOngoing, onClick }) => {
  return (
    <div
      className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group ${
        isOngoing ? 'ring-2 ring-teal-500/20 hover:ring-teal-500/40' : ''
      }`}
      onClick={() => onClick(project)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {isOngoing && (
              <span className="ml-3 px-2 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full animate-pulse">
                ONGOING
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm mb-3">{project.description}</p>
        </div>
      </div>

      <div className="flex items-center text-sm text-slate-500 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        {project.period}
        <span className="mx-2">•</span>
        <Tag className="w-4 h-4 mr-2" />
        {project.type}
      </div>

      {isOngoing && project.progress && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-400">Progress</span>
            <span className="text-teal-400 font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Highlights</h4>
        <ul className="space-y-1">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <li key={idx} className="text-slate-400 text-sm flex items-start">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-700/40 text-slate-400 text-xs rounded border border-slate-600/30"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="px-2 py-1 text-slate-500 text-xs">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {isOngoing ? (
            <GitBranch className="w-4 h-4 text-teal-400" />
          ) : (
            <Clock className="w-4 h-4 text-slate-500" />
          )}
        </div>
        <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
          View Details
          <ExternalLink className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;