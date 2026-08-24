import { games } from '../data/games'

export default function GameShowcase() {
  return (
    <section className="section games-section" id="games">
      <div className="section-heading">
        <div>
          <span className="kicker">01 / OUR PLAYGROUND</span>
          <h2>GAMES WITH<br /><i>TEETH.</i></h2>
        </div>
        <p>We mix accessible mechanics with surprising systems, expressive characters and a little bit of beautiful chaos.</p>
      </div>

      <div className="game-grid">
        {games.map((game, index) => (
          <article className={`game-card game-card--${game.accent}`} key={game.title}>
            <div className="game-image-wrap">
              <img src={game.image} alt={game.title} />
              <div className="game-image-glow" />
              <span className="game-number">0{index + 1}</span>
            </div>
            <div className="game-card-body">
              <span className="game-tag">{game.tag}</span>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <button>VIEW GAME <span>↗</span></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
