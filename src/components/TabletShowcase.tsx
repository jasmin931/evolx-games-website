export default function TabletShowcase() {
  return (
    <section className="tablet-section">
      <div className="tablet-copy">
        <span className="kicker">02 / GET IN THE GAME</span>
        <h2>ONE BOARD.<br /><i>ENDLESS</i><br />MAYHEM.</h2>
        <p>
          Ludaro turns the familiar board-game roll into a tactical adventure.
          Stack cards, hit special tiles, dodge enemies and chase the perfect run.
        </p>
        <div className="stat-row">
          <div><strong>∞</strong><span>WAYS TO PLAY</span></div>
          <div><strong>100%</strong><span>CHAOTIC</span></div>
          <div><strong>1</strong><span>MORE RUN</span></div>
        </div>
      </div>

      <div className="tablet-stage">
        <div className="tablet-halo" />
        <div className="tablet-device">
          <div className="tablet-camera" />
          <div className="tablet-screen">
            <img
              src="/assets/a_wide_landscape_tablet_screen_mockup_screensho.png"
              alt="Ludaro game on a landscape tablet"
            />
          </div>
        </div>
        <div className="floating-die die-one">6</div>
        <div className="floating-die die-two">2</div>
        <div className="floating-star">✦</div>
      </div>
    </section>
  )
}
