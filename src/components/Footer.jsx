import { Github, Linkedin, Instagram, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INFO } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 mt-20"
            style={{ borderTop: '1px solid rgba(6,182,212,0.08)', background: 'rgba(13,17,23,0.5)' }}>
      <div className="max-w-6xl mx-auto px-[6%] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <Terminal size={14} style={{ color: '#06b6d4' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.60)', fontSize: '0.85rem' }}>
            fadi<span style={{ color: '#06b6d4' }}>@dev</span>
          </span>
        </Link>
        <p className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
          // © {new Date().getFullYear()} Fadi Esper
        </p>
        <div className="flex items-center gap-4">
          <a href={INFO.github}    target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.30)' }} className="hover:text-cyan-400 transition-colors"><Github    size={18} /></a>
          <a href={INFO.linkedin}  target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.30)' }} className="hover:text-cyan-400 transition-colors"><Linkedin  size={18} /></a>
          <a href={INFO.instagram} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.30)' }} className="hover:text-cyan-400 transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
