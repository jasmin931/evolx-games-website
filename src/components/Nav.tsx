
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const isHome = window.location.pathname === '/'

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
    setOpen(false)
  }

  return (
    <header className="nav">
      <a className="brand" href="/" aria-label="EvolX Games home">
        <span className="brand-logo-wrap">
          <img
            src="/assets/evolx-logo.png"
            alt="EvolX Games"
            className="brand-logo"
          />
          <span className="brand-logo-spark">✦</span>
        </span>
      </a>

      <button
        className="nav-toggle"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {isHome ? (
          <>
            <button onClick={() => go('games')}>Games</button>
            <button onClick={() => go('spirits')}>Spirits</button>
            <button onClick={() => go('studio')}>Studio</button>
            <button onClick={() => go('team')}>Team</button>
            <button onClick={() => go('contact')}>Contact</button>

            <a href="/games/ludaro">Ludaro ↗</a>

            <a
              href="https://discord.gg/cXK7jSq4n"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </>
        ) : (
          <>
            <a href="/">Home</a>
            <a href="/games/ludaro">Ludaro</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/terms">Terms</a>
            <a href="/privacy-policy">Privacy</a>
          </>
        )}
      </nav>

      {isHome ? (
        <button
          className="nav-cta"
          onClick={() => go('games')}
        >
          PLAY NOW <span>↗</span>
        </button>
      ) : (
        <a
          className="nav-cta"
          href="https://play.google.com/store/apps/details?id=com.evolxgames.ludaro&hl=en_IN"
          target="_blank"
          rel="noreferrer"
        >
          PLAY NOW <span>↗</span>
        </a>
      )}
    </header>
  )
}
