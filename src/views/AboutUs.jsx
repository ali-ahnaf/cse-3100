export default function AboutUs() {
  return (

    <section className="about-page">

      <section className="about-section">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section className="about-section">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section className="about-section">
        <h2>Our team</h2>

        <div className="team-grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="team-card">
              <div className="team-photo"></div>
              <div className="team-info">
                <h4>Bob Doe</h4>
                <p>Director</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
