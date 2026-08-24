import Dice from './Dice'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-noise" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <div className="hero-copy">
        <div className="eyebrow"><span /> INDEPENDENT GAME STUDIO <span /></div>
        <h1>PLAY<br /><em>OUTSIDE</em><br />THE LINES.</h1>
        <p>Big characters. Weird worlds. Unpredictable rolls.<br />We make games that refuse to play it safe.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById('games')?.scrollIntoView({behavior:'smooth'})}>
            EXPLORE OUR GAMES <b>→</b>
          </button>
          <button className="btn btn-ghost" onClick={() => document.getElementById('studio')?.scrollIntoView({behavior:'smooth'})}>
            MEET EVOLX
          </button>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-sun" />
        <div className="hero-dice dice-float"><Dice size="lg" /></div>
        <div className="hero-die-small"><Dice size="sm" /></div>
        <img src="/assets/Banana Gremlin.png" alt="" className="hero-character hero-character-left" />
        <img src="/assets/Trihorn Jester.png" alt="" className="hero-character hero-character-right" />
        <div className="spark spark-1">✦</div>
        <div className="spark spark-2">✦</div>
        <div className="spark spark-3">✦</div>
      </div>

      <div className="scroll-cue"><span /> SCROLL TO DISCOVER</div>
    </section>
  )
}
