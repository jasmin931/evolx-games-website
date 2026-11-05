
const awardPhotos = [
  {
    src: '/assets/gdai-award-1.jpeg',
    alt: 'EvolX Games receiving the GDAI India Game Award',
    className: 'award-photo-landscape',
  },
  {
    src: '/assets/gdai-award-2.jpeg',
    alt: 'EvolX Games team celebrating the award',
    className: 'award-photo-portrait',
  },
  {
    src: '/assets/gdai-award-3.jpeg',
    alt: 'GDAI India Game Awards celebration',
    className: 'award-photo-landscape',
  },
]

export default function Awards() {
  return (
    <section className="awards-section" id="awards">
      <div className="awards-glow" />

      <div className="awards-container">

        <div className="awards-heading">
          <span className="kicker">A MOMENT TO CELEBRATE</span>
          <span className="award-year">2026</span>
        </div>

        <div className="awards-content">

          <div className="awards-copy">
            <div className="winner-label">
              <span>✦</span> AWARD WINNER <span>✦</span>
            </div>

            <h2>
              WE DID<br />
              <i>IT.</i>
            </h2>

            <p className="award-intro">
              A proud milestone for everyone at EvolX Games.
              Our passion, creativity and hard work have been
              recognised on a bigger stage.
            </p>

            <div className="award-name">
              <span className="award-trophy">🏆</span>
              <div>
                <strong>GDAI INDIA</strong>
                <span>GAME AWARDS</span>
              </div>
            </div>

            <p className="award-description">
              We're proud to be recognised as a winner at the
              GDAI India Game Awards. This achievement belongs
              to our entire team and everyone who has been
              part of our journey.
            </p>

            <div className="award-bottom-line">
              <span>BUILT WITH PASSION.</span>
              <span>CELEBRATED WITH PRIDE.</span>
            </div>
          </div>

          <div className="awards-gallery">
            {awardPhotos.map((photo, index) => (
              <div
                className={`award-photo ${photo.className}`}
                key={photo.src}
              >
                <img src={photo.src} alt={photo.alt} />
                {index === 0 && (
                  <div className="photo-caption">
                    <span>✦</span> THE WINNING MOMENT
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
