import { useState } from 'react'
import Dice from './Dice';
import '../styles/team.scss';

type TeamMember = {
  name: string
  role: string
  tagline: string
  number: string
  image: string
  accent: string
}

const team: TeamMember[] = [
  { name: 'THE VISIONARY', role: 'Founder/CEO', tagline: 'Turns wild ideas into worlds worth getting lost in.', number: '01', image: '/assets/team/AmitPicture.png', accent: 'pink' },
  { name: 'THE GAME MAKER', role: 'Creative Director', tagline: 'Builds the rules, loops and “one more turn” moments.', number: '02', image: '/assets/team/EkalavyaPicture.png', accent: 'cyan' },
  { name: 'THE ART ALCHEMIST', role: 'Game Artist', tagline: 'Makes every pixel feel like it has a little bit of magic.', number: '03', image: '/assets/team/altaf.png', accent: 'orange' },
  { name: 'THE CODE WIZARD', role: 'Game Developer', tagline: 'Turns impossible ideas into smooth, playable chaos.', number: '04', image: '/assets/team/deepak.png', accent: 'lime' },
  { name: 'THE PEOPLE PERSON', role: 'Community Lead', tagline: 'Keeps the players close and the party getting louder.', number: '05', image: '/assets/team/vrinda.png', accent: 'violet' },
]

export default function Team() {
  const [active, setActive] = useState(0)

  return (
    <section className="team-section" id="team">
      <div className="team-bg-shape team-bg-shape--one" />
      <div className="team-bg-shape team-bg-shape--two" />
      {/* <div className="">5</div> */}
            <div className="studio-dice team-floating-die"><Dice size="sm" /></div>
      
      <div className="team-stars" aria-hidden="true">✦　✧　✦　✧　✦</div>

      <div className="team-heading">
        <div>
          <span className="kicker">05 / THE CREW</span>
          <h2>OUR<br /><i>TEAM.</i></h2>
        </div>
        <div className="team-intro">
          <p>Dreamers, builders and gamers making worlds where every roll has a story.</p>
          <div className="team-count"><strong>05</strong><span>MINDS<br />BEHIND THE CHAOS</span></div>
        </div>
      </div>

      <div className="team-layout">
        <div className="team-orbit" aria-hidden="true">
          <span className="orbit-dot orbit-dot--one" />
          <span className="orbit-dot orbit-dot--two" />
          <span className="orbit-dot orbit-dot--three" />
          <span className="orbit-ring" />
        </div>

        <div className="team-cards">
          {team.map((member, index) => (
            <button
              className={`team-card team-card--${member.accent} ${active === index ? 'is-active' : ''}`}
              key={member.name}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              {/* <div className="team-card-top"><span>{member.number}</span><span>EVOLX / TEAM</span></div> */}
              <div className="team-photo-wrap">
                <div className="team-photo-glow" />
                <img src={member.image} alt={member.role} className="team-photo" />
                <span className="team-spark">✦</span>
              </div>
              <div className="team-card-info">
                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.tagline}</p>
              </div>
  
            </button>
          ))}
        </div>
      </div>

      <div className="team-bottom">
        <span>BUILT WITH CURIOSITY</span>
        <div className="team-marquee" aria-hidden="true">
          <span>DESIGN</span><b>✦</b><span>ART</span><b>✦</b><span>CODE</span><b>✦</b><span>PLAY</span><b>✦</b><span>CHAOS</span><b>✦</b><span>REPEAT</span>
        </div>
        <span>PLAY. CREATE. REPEAT.</span>
      </div>
    </section>
  )
}
