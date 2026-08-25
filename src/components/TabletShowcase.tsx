import Dice from './Dice'

export default function TabletShowcase() {
  return (
    <section className="tablet-section">
      <div className="tablet-copy">
        <span className="kicker">02 / GET IN THE GAME</span>
        <h2> MADE FOR<br /><i><span>THE WAY YOU PLAY.</span></i></h2>
        <p>
  From <strong>PC to mobile, tablet to streaming</strong> —
  EvolX is built to bring the same game, the same chaos, everywhere you play.
</p>
        <div className="stat-row">
          <div><strong>∞</strong><span>WAYS TO PLAY</span></div>
          <div><strong>100%</strong><span>CHAOTIC</span></div>
          <div><strong>1</strong><span>MORE RUN</span></div>
        </div>
      </div>

      <div className="tablet-stage">
        <div className="tablet-halo" />
        <img
              src="/assets/device-experience.png"
              alt="Ludaro game on a landscape tablet"
            />
        {/* <div className="">6</div> */}
                    <div className="studio-dice floating-die die-one "><Dice size="sm" /></div>
                            <div className="floating-die die-two "><Dice size="sm" /></div>

        {/* <div className="">2</div> */}
        <div className="floating-star">✦</div>
      </div>
    </section>
  )
}
