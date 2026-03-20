import { GraduationCap, Code2, Layers, Database, Server, Wrench } from 'lucide-react'
import { INFO, EDUCATION, SKILL_CATEGORIES } from '../data'

const PJS = { fontFamily: "'Inter', sans-serif" }

const CAT_ICONS  = { backend: <Code2 size={13}/>, frontend: <Layers size={13}/>, database: <Database size={13}/>, devops: <Server size={13}/>, tools: <Wrench size={13}/> }
const CAT_LABELS = { backend: 'Backend', frontend: 'Frontend', database: 'Database', devops: 'DevOps', tools: 'Tools' }

export default function About() {
  return (
    <main className="pt-[68px] pb-20">
      <div className="max-w-6xl mx-auto px-[6%]">

        <div className="pt-14 pb-10 animate-fade-up delay-100">
          <span className="section-label">Get to know me</span>
          <h1 className="section-title">About Me</h1>
        </div>

        {/* Photo + Bio side by side */}
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-14 items-start mb-16">

          {/* Photo */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative w-full rounded-2xl overflow-hidden"
                 style={{ height: '380px', border: '1px solid #1e293b' }}>
              {/* Styled background behind photo */}
              <div className="absolute inset-0"
                   style={{ background: 'linear-gradient(145deg,#0f141c,#141b24)' }} />
              {/* Dot grid overlay */}
              <div className="absolute inset-0 dot-grid opacity-30" />
              {/* Orange top accent */}
              <div className="absolute top-0 inset-x-0 h-[3px]"
                   style={{ background: 'linear-gradient(90deg,#06b6d4,#818cf8)' }} />
              {/* Orange glow blob behind photo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[60px]"
                   style={{ background: 'rgba(6,182,212,0.15)' }} />
              {/* Photo */}
              <img
                src={INFO.photo}
                alt="Fadi Esper"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom"
                style={{ height: '95%', width: 'auto', maxWidth: '100%' }}
              />
            </div>
            <div className="absolute -top-2.5 -right-2.5 w-full h-full rounded-2xl -z-10"
                 style={{ border: '2px solid rgba(6,182,212,0.12)' }} />
          </div>

          {/* Bio + Education */}
          <div className="flex flex-col gap-7 animate-fade-up delay-300 pt-1">
            <div>
              <h2 className="font-bold text-2xl text-white mb-4 leading-snug" style={PJS}>
                Hey, I'm <span className="gradient-text">Fadi Esper</span>
              </h2>
              <p className="leading-relaxed text-[0.97rem] mb-3" style={{ color: 'rgba(255,255,255,0.58)' }}>
                {INFO.bio}
              </p>
              <p className="leading-relaxed text-[0.95rem]" style={{ color: 'rgba(255,255,255,0.46)' }}>
                {INFO.bioLong}
              </p>
            </div>

            {/* Education */}
            <div>
              <span className="section-label flex items-center gap-1.5">
                <GraduationCap size={12} /> Education
              </span>
              <div className="flex items-center gap-4 rounded-xl px-5 py-4"
                   style={{ background: '#141b24', border: '1px solid #1e293b', borderLeft: '3px solid #06b6d4' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0"
                     style={{ background: 'rgba(6,182,212,0.10)' }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="font-semibold text-[0.9rem] text-white mb-0.5" style={PJS}>{EDUCATION.degree}</p>
                  <p className="text-[0.82rem]" style={{ color: 'rgba(255,255,255,0.55)' }}>{EDUCATION.school} — {EDUCATION.location}</p>
                  <span className="text-[0.77rem]" style={{ color: 'rgba(255,255,255,0.40)' }}>{EDUCATION.note}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="animate-fade-up delay-400">
          <span className="section-label">What I work with</span>
          <h2 className="font-bold text-[1.7rem] text-white mb-6" style={PJS}>Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(SKILL_CATEGORIES).map(([cat, items]) => (
              <div key={cat} className="card-dark p-5 hover:border-orange-500/30 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: '#06b6d4' }}>{CAT_ICONS[cat]}</span>
                  <span className="font-semibold text-[0.68rem] uppercase"
                        style={{ ...PJS, letterSpacing: '0.10em', color: 'rgba(255,255,255,0.40)' }}>
                    {CAT_LABELS[cat]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(s => <span key={s} className="tech-badge">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
