
export default function Supporter() {
  return (
    <section className="krafton-section">
      <div className="krafton-bg-glow" />
      <div className="krafton-grid-pattern" />

      <div className="krafton-container">
        <div className="krafton-main">

          <div className="krafton-message">
            <h2>
              GREAT GAMES.
              <br />
              <span>BIGGER</span>
              <br />
              POSSIBILITIES.
            </h2>

            <p>
              Every ambitious journey needs the right players
              behind it. We're proud to have <strong>KRAFTON India </strong> 
              supporting our journey as we push the boundaries
              of game creation.
            </p>
          </div>

          <div className="krafton-visual">
            <div className="krafton-orbit orbit-one" />
            <div className="krafton-orbit orbit-two" />

            <div className="krafton-card">
              <span className="krafton-card-label">
                BACKED BY
              </span>

              <img
                src="/assets/krafton.png"
                alt="KRAFTON India"
              />

              {/* <div className="krafton-card-divider" />

              <span className="krafton-card-caption">
                KRAFTON INDIA
              </span> */}
            </div>

            <div className="krafton-floating floating-one">
              ✦
            </div>
            <div className="krafton-floating floating-two">
              +
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
