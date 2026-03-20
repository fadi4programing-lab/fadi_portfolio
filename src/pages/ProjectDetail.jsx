import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from '../data'

const PJS = { fontFamily: "'Inter', sans-serif" }

export default function ProjectDetail() {
  const { id }                    = useParams()
  const [activeImg, setActiveImg] = useState(0)

  const project = PROJECTS.find(p => p.id === parseInt(id))

  if (!project) return (
    <main className="pt-[68px] min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-bold text-3xl text-white mb-4" style={PJS}>Project Not Found</p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    </main>
  )

  return (
    <main className="pt-[68px] pb-20">
      <div className="max-w-5xl mx-auto px-[6%]">

        <Link to="/projects"
              className="inline-flex items-center gap-2 mt-10 mb-8 text-sm hover:text-cyan-400 transition-colors"
              style={{ color: 'rgba(255,255,255,0.40)' }}>
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        <div className="mb-8 animate-fade-up delay-100">
          <span className="section-label">Project</span>
          <h1 className="section-title mb-1">{project.title}</h1>
          <p className="text-sm font-semibold mb-3" style={{ ...PJS, color: '#06b6d4' }}>{project.tagline}</p>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.50)' }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-10 animate-fade-up delay-200">
          <div className="relative rounded-2xl overflow-hidden mb-3"
               style={{ background: '#0f141c', border: '1px solid #1e293b' }}>
            <img
              src={project.images[activeImg]}
              alt={project.title}
              className="w-full object-contain"
              style={{ height: 'clamp(220px,45vw,520px)' }}
            />
            {project.images.length > 1 && (
              <>
                <button onClick={() => setActiveImg(i => Math.max(0, i-1))} disabled={activeImg === 0}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full text-white flex items-center justify-center transition-colors hover:bg-orange-500 disabled:opacity-20"
                  style={{ background: 'rgba(0,0,0,0.50)' }}>
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => setActiveImg(i => Math.min(project.images.length-1, i+1))} disabled={activeImg === project.images.length-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full text-white flex items-center justify-center transition-colors hover:bg-orange-500 disabled:opacity-20"
                  style={{ background: 'rgba(0,0,0,0.50)' }}>
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
                  style={{ width:'72px', height:'50px', border:`2px solid ${activeImg===i?'#06b6d4':'rgba(255,255,255,0.08)'}` }}>
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up delay-300">
          <div className="md:col-span-2">
            <h2 className="font-bold text-xl text-white mb-4" style={PJS}>About This Project</h2>
            <p className="leading-relaxed whitespace-pre-line text-[0.96rem]"
               style={{ color: 'rgba(255,255,255,0.55)' }}>
              {project.fullDesc}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="card-dark p-5">
              <p className="font-semibold text-[0.68rem] uppercase mb-3"
                 style={{ ...PJS, letterSpacing:'0.12em', color:'rgba(255,255,255,0.40)' }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
            </div>
            <div className="card-dark p-5 flex flex-col gap-2">
              <p className="font-semibold text-[0.68rem] uppercase mb-1"
                 style={{ ...PJS, letterSpacing:'0.12em', color:'rgba(255,255,255,0.40)' }}>
                Links
              </p>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary justify-center text-sm py-2.5">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline justify-center text-sm py-2.5">
                <Github size={15} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
