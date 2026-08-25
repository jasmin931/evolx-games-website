export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div>
             <a className="brand footer-brand" href="#" aria-label="EvolX home">
        <span className="brand-logo-wrap">
          <img src="/assets/evolx-logo.png" alt="EvolX Games" className="brand-logo" />
          <span className="brand-logo-spark">✦</span>
        </span>
      </a>
          <h2>GET READY<br /><i>TO PLAY.</i></h2>
        </div>
        <div className="footer-links">
          <div><span>EXPLORE</span><a href="#games">Games</a><a href="#spirits">Spirit Deck</a><a href="#studio">About</a></div>
          <div><span>CONNECT</span><a href="mailto:hello@evolxgames.com">Email</a><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="https://discord.gg/cXK7jSq4n">Discord</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 EVOLX GAMES</span>
        <span>MADE FOR PLAYERS WHO LIKE TO ROLL THE DICE.</span>
      </div>
    </footer>
  )
}
