import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const LINKS = [
  { to: '/',         label: 'home'     },
  { to: '/about',    label: 'about'    },
  { to: '/projects', label: 'projects' },
  { to: '/contact',  label: 'contact'  },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 h-[64px] flex items-center justify-between px-[6%] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,12,16,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(6,182,212,0.10)' : 'none',
        }}>

        {/* Logo - terminal style */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded flex items-center justify-center transition-colors"
               style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.30)' }}>
            <Terminal size={14} style={{ color: '#06b6d4' }} />
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
            fadi<span style={{ color: '#06b6d4' }}>@dev</span>
          </span>
        </Link>

        {/* Desktop nav - code style */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {isActive => <>{isActive ? '> ' : ''}{label}</>}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.60)' }}
                onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 flex flex-col p-8 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
             style={{ background: '#0d1117', borderLeft: '1px solid rgba(6,182,212,0.12)' }}>
          <div className="flex items-center justify-between mb-10">
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#06b6d4', fontSize: '0.9rem' }}>
              fadi@dev:~$
            </span>
            <button onClick={() => setOpen(false)} style={{ color: 'rgba(255,255,255,0.40)' }} className="hover:text-white">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded text-base transition-colors font-medium ${
                    isActive ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-6" style={{ borderTop: '1px solid rgba(6,182,212,0.10)' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>
              // backend developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
