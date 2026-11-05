import { useEffect, useState } from 'react'
import { spirits } from '../data/games'

export default function Spirits() {
  const [index, setIndex] = useState(0)
  const looped = [...spirits, ...spirits]

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => value + 1), 3200)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (index >= spirits.length) {
      const reset = window.setTimeout(() => setIndex(0), 650)
      return () => window.clearTimeout(reset)
    }
  }, [index])

  const move = (direction: number) => {
    setIndex((value) => (value + direction + spirits.length) % spirits.length)
  }

  return (
    <section className="section spirits-section" id="spirits">
      <div className="section-heading">
        <div>
          <span className="kicker">01 / THE CARD VAULT</span>
          <h2>TRENDING<br /><i>CARDS.</i></h2>
        </div>
        <p>Meet the cards that change the game. Discover rare abilities, legendary characters and powerful spirits from across the EvolX universe. Collect your favourites. Build your strategy.</p>
      </div>

      <div className="spirit-carousel">
        <button className="carousel-arrow carousel-arrow--prev" onClick={() => move(-1)} aria-label="Previous spirit">←</button>
        <div className="spirit-window">
          <div
            className="spirit-track"
            style={{ transform: `translate3d(calc(-${index} * (var(--spirit-card-width) + 14px)), 0, 0)` }}
          >
            {looped.map((spirit, i) => (
              <article className={`spirit-card spirit-card--${spirit.color}`} key={`${spirit.name}-${i}`}>
                <div className="spirit-art">
                  <img src={spirit.image} alt={spirit.name} />
                  <span className="rarity">{spirit.rarity}</span>
                  <span className="spirit-shine" />
                </div>
                <div className="spirit-meta">
                  <span>SPIRIT {String((i % spirits.length) + 1).padStart(2, '0')}</span>
                  <h3>{spirit.name}</h3>
                  <span className="plus">+</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button className="carousel-arrow carousel-arrow--next" onClick={() => move(1)} aria-label="Next spirit">→</button>
      </div>

      <div className="carousel-dots" aria-label="Spirit carousel position">
        {spirits.map((spirit, i) => (
          <button key={spirit.name} className={i === index % spirits.length ? 'is-active' : ''} onClick={() => setIndex(i)} aria-label={`Show ${spirit.name}`} />
        ))}
      </div>
    </section>
  )
}
