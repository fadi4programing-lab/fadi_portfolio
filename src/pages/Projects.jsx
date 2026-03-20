import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data'

const PJS = { fontFamily: "'Inter', sans-serif" }

export default function Projects() {
  return (
    <main className="pt-[68px] pb-20">
      <div className="max-w-6xl mx-auto px-[6%]">

        <div className="pt-14 pb-10 animate-fade-up delay-100">
          <span className="section-label">What I've built</span>
          <h1 className="section-title">Projects</h1>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            Click any card to see full details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-up delay-200">
          {PROJECTS.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              style={{ background: '#141b24', border: '1px solid #1e293b' }}>

              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ background: '#0f141c', height: '200px' }}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300"
                     style={{ background: 'rgba(6,182,212,0)' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                       style={{ background: '#06b6d4' }}>
                    <ArrowRight size={17} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[0.68rem] font-semibold uppercase mb-1"
                   style={{ ...PJS, color: '#06b6d4', letterSpacing: '0.12em' }}>
                  {project.tagline}
                </p>
                <h3 className="font-bold text-base text-white mb-2 group-hover:text-cyan-300 transition-colors" style={PJS}>
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3 flex-1"
                   style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {project.shortDesc.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.slice(0, 4).map(t => <span key={t} className="tech-badge">{t}</span>)}
                  {project.tech.length > 4 && (
                    <span className="tech-badge" style={{ opacity: 0.5 }}>+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
