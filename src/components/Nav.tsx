import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="nav">
      <a className="brand" href="#" aria-label="EvolX home">
        <span className="brand-logo-wrap">
          <img src="/assets/evolx-logo.png" alt="EvolX Games" className="brand-logo" />
          <span className="brand-logo-spark">✦</span>
        </span>
      </a>

      <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
        <span /><span /><span />
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        <button onClick={() => go('games')}>Games</button>
        <button onClick={() => go('spirits')}>Spirits</button>
        <button onClick={() => go('studio')}>Studio</button>
        <button onClick={() => go('team')}>Team</button>
        <button onClick={() => go('contact')}>Contact</button>
        <button
          onClick={() => window.open('https://discord.gg/cXK7jSq4n', '_blank')}
        >
          Discord
        </button>     
         </nav>

      <button className="nav-cta" onClick={() => go('games')}>PLAY NOW <span>↗</span></button>
    </header>
  )
}
