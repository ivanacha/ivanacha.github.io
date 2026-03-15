import { useState } from 'react'
import './Sidebar.css'

const navItems = [
  {
    label: 'Home',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7l10-5 10 5-10 5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: 'Blog',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
      </svg>
    ),
  },
]

function Sidebar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <button
        className={`sidebar-toggle${expanded ? ' sidebar-toggle--open' : ''}`}
        onClick={() => setExpanded((e) => !e)}
        aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <span className="bar bar-top" />
        <span className="bar bar-mid" />
        <span className="bar bar-bot" />
      </button>

      <nav className={`sidebar${expanded ? ' sidebar--expanded' : ''}`}>
        <div className="sidebar-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="sidebar-item">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
