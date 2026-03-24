import { useEffect, useRef } from 'react'
import heroImg from './assets/headshot_small.jpg'
import Sidebar from './Sidebar'
import './App.css'

const skills = [
  {
    color: 'var(--accent)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Software Engineering',
    desc: 'Building robust backend systems, APIs, and infrastructure. Proficient in Python, Java, and distributed system design.',
  },
  {
    color: 'rgb(34, 197, 94)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Crafting responsive, accessible UIs with React, TypeScript, and modern CSS. Focused on performance and clean design.',
  },
  {
    color: 'rgb(249, 115, 22)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'iOS Development',
    desc: 'Developing native iOS applications with Swift and SwiftUI. Building intuitive mobile experiences for Apple platforms.',
  },
]

export default function App() {
  const skillsRef = useRef(null)
  const scrollHintRef = useRef(null)

  useEffect(() => {
    const el = scrollHintRef.current
    if (!el) return
    const onScroll = () => {
      el.classList.toggle('is-hidden', window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const section = skillsRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <section className="hero-section">
          <div className="hero-left">
            <h1 className="hero-headline">
              Hi, I'm <mark className="hero-mark">Ivan!</mark>
            </h1>
            <p className="hero-bio">
              I'm a software developer focused on building robust, scalable systems
              and applications. My work revolves around creating reliable solutions
              that solve real problems.
            </p>
            <div className="hero-socials">
              <a href="https://github.com/ivanacha/" className="social-btn social-btn--github" aria-label="GitHub" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/ivan-acha-cs/" className="social-btn social-btn--linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-open">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Resume
            </a>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="Ivan Acha" className="hero-photo" />
          </div>

          <button
            className="scroll-hint"
            ref={scrollHintRef}
            aria-label="Scroll to expertise"
            onClick={() => skillsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section className="skills-section" ref={skillsRef}>
          <h2 className="skills-title">My Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name" style={{ '--skill-color': skill.color }}>
                  {skill.title}
                </h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
