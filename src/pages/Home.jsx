import { Link } from 'react-router-dom'
import { ArrowRight, Download, Cpu } from 'lucide-react'
import { INFO, SKILLS } from '../data'

const MONO  = { fontFamily: "'JetBrains Mono', monospace" }
const INTER = { fontFamily: "'Inter', sans-serif" }

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-[64px]">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
           style={{ background: 'rgba(6,182,212,0.04)' }} />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
           style={{ background: 'rgba(129,140,248,0.04)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-[6%] py-16 lg:py-24">

        {/* Terminal bar */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up delay-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(255,255,255,0.30)' }}>
            ~/portfolio — fadi@dev
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="mb-4 animate-fade-up delay-100"
               style={{ ...MONO, fontSize: '0.8rem', color: 'rgba(6,182,212,0.60)' }}>
              // hello, world 👋
            </p>

            <h1 style={{ ...INTER, fontSize: 'clamp(2.5rem,6vw,4.2rem)', letterSpacing: '-0.03em', fontWeight: 900 }}
                className="text-white leading-tight mb-2 animate-fade-up delay-200">
              Fadi Esper
            </h1>

            <p className="font-bold shimmer-text mb-6 animate-fade-up delay-200 leading-tight"
               style={{ ...INTER, fontSize: 'clamp(1.2rem,3vw,2rem)', letterSpacing: '-0.02em' }}>
              Backend Developer<br />&amp; Software Engineer
            </p>

            {/* Code block bio */}
            <div className="rounded-lg p-4 mb-8 animate-fade-up delay-300"
                 style={{ background: 'rgba(15,20,28,0.80)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(6,182,212,0.60)', marginBottom: '4px' }}>const developer = {'{'}</p>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1rem', marginBottom: '2px' }}>
                focus: <span style={{ color: '#67e8f9' }}>"backend"</span>,
              </p>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1rem', marginBottom: '2px' }}>
                stack: <span style={{ color: '#67e8f9' }}>"Django + React"</span>,
              </p>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1rem', marginBottom: '2px' }}>
                location: <span style={{ color: '#67e8f9' }}>"Tartus, Syria"</span>,
              </p>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1rem', marginBottom: '4px' }}>
                available: <span style={{ color: '#4ade80' }}>true</span>
              </p>
              <p style={{ ...MONO, fontSize: '0.78rem', color: 'rgba(6,182,212,0.60)' }}>{'}'}</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8 animate-fade-up delay-400">
              <Link to="/projects" className="btn-primary">
                <ArrowRight size={16} /> View Projects
              </Link>
              <a href={INFO.cv} download target="_blank" rel="noreferrer" className="btn-outline">
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="animate-fade-up delay-500">
              <p style={{ ...MONO, fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.5rem' }}>
                // tech_stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['Django','REST APIs','PostgreSQL','Docker','Git','React.js'].map(b => (
                  <span key={b} className="tech-badge">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - about card + skills */}
          <div className="flex flex-col gap-5 animate-fade-up delay-300">

            {/* About card — no photo */}
            <div className="relative rounded-xl overflow-hidden p-6"
                 style={{ background: 'rgba(15,20,28,0.80)', border: '1px solid rgba(6,182,212,0.15)' }}>
              <div className="absolute top-0 inset-x-0 h-[2px]"
                   style={{ background: 'linear-gradient(90deg,transparent,#06b6d4,#818cf8,transparent)' }} />
              <p style={{ ...MONO, fontSize: '0.70rem', color: 'rgba(6,182,212,0.60)', marginBottom: '0.75rem' }}>
                // about_me.txt
              </p>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.75 }}>
                {INFO.bio} {INFO.bioLong}
              </p>
              <div className="flex flex-wrap gap-6 mt-5 pt-4"
                   style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  { label: 'location', value: 'Tartus, Syria'  },
                  { label: 'status',   value: 'Open to work'   },
                  { label: 'degree',   value: 'IT Engineering'  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ ...MONO, fontSize: '0.60rem', color: 'rgba(6,182,212,0.45)', marginBottom: '3px' }}>{label}</p>
                    <p style={{ ...MONO, fontSize: '0.72rem', color: 'rgba(255,255,255,0.72)' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl p-5"
                 style={{ background: 'rgba(15,20,28,0.80)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={13} style={{ color: '#06b6d4' }} />
                <span style={{ ...MONO, fontSize: '0.72rem', color: 'rgba(6,182,212,0.70)', letterSpacing: '0.10em' }}>
                  SKILL_LEVELS
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {SKILLS.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span style={{ ...MONO, fontSize: '0.72rem', color: 'rgba(255,255,255,0.60)' }}>{skill.name}</span>
                      <span style={{ ...MONO, fontSize: '0.70rem', color: '#06b6d4' }}>{skill.percentage}%</span>
                    </div>
                    <div className="h-[4px] rounded-full overflow-hidden"
                         style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="skill-bar-fill" style={{ '--pct': `${skill.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
