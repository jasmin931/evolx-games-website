
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Spirits from '../components/Spirits'

const playStore =
  'https://www.youtube.com/watch?v=y0q7iWeYqXw'

const trailerId = 'FSyyM3cMs5Y'

const highlights = [
  {
    number: '01',
    title: 'THE DICE ARE YOURS',
    copy: 'Read the possibilities, plan your move and turn every roll into a tactical decision.',
    image: '/assets/Screenshot 2026-08-24 111734.png'
  },
  {
    number: '02',
    title: 'BUILD YOUR EDGE',
    copy: 'Discover Spirit Cards and combine their effects to shape a strategy that feels like your own.',
    image: '/assets/a_highly_detailed_colorful_cartoon_game_ui_scene.png'
  },
  {
    number: '03',
    title: 'THE BOARD FIGHTS BACK',
    copy: 'Face shifting challenges, dangerous encounters and boss modifiers that keep every run on its toes.',
    image: '/assets/a_wide_colorful_cartoon_fantasy_illustration_with.png'
  }
]

const gallery = [
  {
    image: '/assets/a_highly_detailed_colorful_cartoon_game_ui_scene.png',
    alt: 'Ludaro game board and interface'
  },
  {
    image: '/assets/a_clean_poster_like_product_image_a_tablet_devic.png',
    alt: 'Ludaro presented on a device'
  },
  {
    image: '/assets/a_wide_landscape_tablet_screen_mockup_screensho.png',
    alt: 'Ludaro gameplay display'
  },
  {
    image: '/assets/ChatGPT Image Aug 24, 2026, 11_24_54 AM(1).png',
    alt: 'Ludaro game artwork'
  }
]

export default function LudaroPage() {
  return (
    <div className="ludaro-page">
      <Nav />

      <main>
        {/* HERO */}
        <section className="ludaro-hero" id="top">
          <div className="ludaro-video" aria-hidden="true">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}&playsinline=1&rel=0&modestbranding=1`}
              title="Ludaro official trailer background"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>

          <div className="ludaro-hero-shade" />

          <div className="ludaro-hero-content">
            <span className="ludaro-eyebrow">
              <i /> EVOLX GAMES PRESENTS <i />
            </span>

            <div className="ludaro-wordmark">
              LUDARO<span>®</span>
            </div>

            <p className="ludaro-subtitle">
              THE BOARD HAS CHANGED.
              <br />
              <em>HAVE YOU?</em>
            </p>

            <p className="ludaro-intro">
              A roguelike deck-building dice game with a twist on
              Ludo. Read the board, shape your strategy and make
              every roll count.
            </p>

            <div className="ludaro-actions">
              <a
                className="ludaro-button ludaro-button--gold"
                href={playStore}
                target="_blank"
                rel="noreferrer"
              >
                DOWNLOAD NOW <span>↗</span>
              </a>

              <a
                className="ludaro-button ludaro-button--outline"
                href={`https://www.youtube.com/watch?v=${trailerId}`}
                target="_blank"
                rel="noreferrer"
              >
                WATCH TRAILER <span>▶</span>
              </a>
            </div>

            <div className="ludaro-scroll">
              SCROLL TO ENTER THE BOARD <span>↓</span>
            </div>
          </div>

          <div className="hero-side-note">
            ROLL
            <br />
            RETHINK
            <br />
            REPEAT
          </div>
        </section>

        {/* ABOUT */}
        <section className="ludaro-intro-section">
          <div className="ludaro-section-index">
            01 / THE GAME
          </div>

          <div className="ludaro-intro-grid">
            <h2>
              NOT THE
              <br />
              <i>LUDO</i>
              <br />
              YOU KNOW.
            </h2>

            <div className="ludaro-intro-copy">
              <p className="ludaro-lead">
                Familiar board. Unfamiliar possibilities.
              </p>

              <p>
                Ludaro takes the race-around-the-board spirit
                of Ludo and gives it a strategic roguelike edge.
                Plan your path, work with deterministic dice
                rolls and use powerful cards to tilt the odds
                in your favour.
              </p>

              <p>
                Every choice can change your run. The question
                isn't just what you roll — it's what you do
                with it.
              </p>

              <a className="text-link" href={playStore}>
                STEP ONTO THE BOARD ↗
              </a>
            </div>
          </div>

          <div className="ludaro-marquee">
            <span>
              THINK AHEAD ✳ ROLL WITH INTENT ✳ BREAK THE PATTERN ✳
            </span>
            <span>
              THINK AHEAD ✳ ROLL WITH INTENT ✳ BREAK THE PATTERN ✳
            </span>
          </div>
        </section>

        {/* GAMEPLAY */}
        <section className="ludaro-highlights">
          <div className="ludaro-section-heading">
            <div>
              <span className="ludaro-section-index">
                02 / PLAY YOUR WAY
              </span>
              <h2>
                EVERY MOVE
                <br />
                <i>MATTERS.</i>
              </h2>
            </div>

            <p>
              Luck gets you moving. Strategy decides how far you go.
            </p>
          </div>

          <div className="ludaro-feature-list">
            {highlights.map(item => (
              <article
                className="ludaro-feature"
                key={item.number}
              >
                <div className="ludaro-feature-copy">
                  <span>{item.number} / GAMEPLAY</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>

                <div className="ludaro-feature-art">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXISTING TRENDING CARDS COMPONENT */}
        <div className="ludaro-cards-wrap">
          <Spirits />
        </div>

        {/* SPIRIT CARDS INTRO */}
        <section className="ludaro-spirits-note">
          <div className="ludaro-spirit-art">
            <img
              src="/assets/Banana Gremlin.png"
              alt="Banana Gremlin spirit"
              loading="lazy"
            />
          </div>

          <div>
            <span className="ludaro-section-index">
              03 / COLLECT. COMBINE. CONQUER.
            </span>

            <h2>
              FIND YOUR
              <br />
              <i>COMBO.</i>
            </h2>

            <p>
              Discover spirits and powerful card effects.
              Build combinations that complement your approach
              and turn an ordinary turn into a game-changing moment.
            </p>

            <a className="text-link" href="#spirits">
              EXPLORE THE CARD VAULT ↓
            </a>
          </div>
        </section>

        {/* GALLERY */}
        <section className="ludaro-gallery">
          <div className="ludaro-section-heading">
            <div>
              <span className="ludaro-section-index">
                04 / A CLOSER LOOK
              </span>

              <h2>
                INSIDE THE
                <br />
                <i>BOARD.</i>
              </h2>
            </div>

            <p>
              A few glimpses of the world, the encounters and
              the chaos waiting around the next corner.
            </p>
          </div>

          <div className="ludaro-gallery-grid">
            {gallery.map((item, i) => (
              <figure
                className={`ludaro-gallery-item ludaro-gallery-item--${i + 1}`}
                key={item.image}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
                <figcaption>
                  FIELD NOTES / 0{i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FINAL DOWNLOAD CTA */}
        <section className="ludaro-final-cta">
          <div className="ludaro-final-art">
            <img
              src="/assets/Trihorn Jester.png"
              alt="Ludaro spirit character"
              loading="lazy"
            />
          </div>

          <div className="ludaro-final-copy">
            <span className="ludaro-section-index">
              YOUR NEXT RUN STARTS HERE
            </span>

            <h2>
              READY TO
              <br />
              <i>ROLL?</i>
            </h2>

            <p>
              The board is waiting. Make your move and see
              where the dice take you.
            </p>

            <a
              className="ludaro-button ludaro-button--gold"
              href={playStore}
              target="_blank"
              rel="noreferrer"
            >
              PLAY LUDARO ON GOOGLE PLAY ↗
            </a>

            <small>Available on Google Play</small>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
