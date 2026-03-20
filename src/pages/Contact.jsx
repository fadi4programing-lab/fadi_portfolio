import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { INFO } from '../data'

const PJS = { fontFamily: "'Inter', sans-serif" }

// ─────────────────────────────────────────────
// ⚠️  EMAILJS SETUP — replace these 3 values:
//   1. Go to https://emailjs.com and sign up free
//   2. Add a Gmail service → copy the Service ID
//   3. Create an email template → copy the Template ID
//   4. Go to Account → API Keys → copy Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEFghiJKL'

// Template variables needed in EmailJS template:
// {{from_name}}, {{from_email}}, {{message}}

export default function Contact() {
  const formRef             = useRef()
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      setStatus('error')
      setErrMsg('Failed to send. Please email me directly at ' + INFO.email)
    }
  }

  const SOCIALS = [
    { icon: <Github    size={20}/>, label:'GitHub',    handle: 'fadi4programing-lab', href: INFO.github },
    { icon: <Linkedin  size={20}/>, label:'LinkedIn',  handle: 'Fadi Esper',          href: INFO.linkedin },
    { icon: <Instagram size={20}/>, label:'Instagram', handle: '@fadiisb',            href: INFO.instagram },
  ]

  return (
    <main className="pt-[68px] pb-20">
      <div className="max-w-6xl mx-auto px-[6%]">

        <div className="pt-14 pb-10 animate-fade-up delay-100">
          <span className="section-label">Let's talk</span>
          <h1 className="section-title">Contact Me</h1>
          <p className="mt-3 max-w-md text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            Have a project in mind? Send a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fade-up delay-200">
            <div>
              <label className="block text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>Your Name</label>
              <input name="from_name" type="text" required placeholder="Fadi Esper" className="input-field" />
            </div>
            <div>
              <label className="block text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>Email Address</label>
              <input name="from_email" type="email" required placeholder="hello@example.com" className="input-field" />
            </div>
            <div>
              <label className="block text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>Message</label>
              <textarea name="message" required rows={6} placeholder="Tell me about your project..." className="input-field resize-none" />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-4 rounded-xl text-sm"
                   style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.20)', color:'#4ade80' }}>
                <CheckCircle size={17} /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-4 rounded-xl text-sm"
                   style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.20)', color:'#f87171' }}>
                <AlertCircle size={17} /> {errMsg}
              </div>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary justify-center disabled:opacity-50">
              {status === 'loading' ? (
                <><span className="w-4 h-4 rounded-full animate-spin"
                        style={{ border:'2px solid rgba(255,255,255,0.30)', borderTopColor:'#fff' }} />Sending...</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
          </form>

          {/* Socials */}
          <div className="animate-fade-up delay-300">
            <div className="card-dark p-7">
              <h2 className="font-bold text-xl text-white mb-1" style={PJS}>Find me online</h2>
              <p className="text-sm mb-7" style={{ color:'rgba(255,255,255,0.40)' }}>
                Connect with me on social media or check out my work.
              </p>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ icon, label, handle, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                     className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group hover:border-orange-500"
                     style={{ border:'1.5px solid rgba(255,255,255,0.10)', color:'rgba(255,255,255,0.40)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background:'rgba(6,182,212,0.10)' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white" style={PJS}>{label}</p>
                      <p className="text-[0.72rem]" style={{ color:'rgba(255,255,255,0.38)' }}>{handle}</p>
                    </div>
                    <span className="ml-auto text-xs" style={{ color:'rgba(255,255,255,0.20)' }}>→</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2.5 mt-6 pt-5" style={{ borderTop:'1px solid rgba(255,255,255,0.07)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-sm" style={{ color:'rgba(255,255,255,0.40)' }}>Available for freelance & collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
