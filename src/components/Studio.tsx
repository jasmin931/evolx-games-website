import Dice from './Dice'

export default function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="studio-bg" />
      <div className="studio-dice"><Dice size="lg" /></div>
      <div className="studio-content">
        <span className="kicker">04 / ABOUT EVOLX</span>
        <h2>WE BUILD<br /><i>PLAYFUL<br />CHAOS.</i></h2>
        <p>
          EvolX is a game studio obsessed with the tiny moment when a player says:
          “okay… one more turn.” We build colorful, system-rich experiences designed
          to surprise, reward and keep the story moving.
        </p>
        <div className="manifesto">
          <span>01</span><b>MAKE IT FEEL ALIVE.</b>
          <span>02</span><b>MAKE EVERY RUN DIFFERENT.</b>
          <span>03</span><b>NEVER BE BORING.</b>
        </div>
      </div>
      <img className="studio-character" src="/assets/Pathfire Jester.png" alt="EvolX spirit character" />
    </section>
  )
}
