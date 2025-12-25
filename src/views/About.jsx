export default function About() {
  return (
    <section className="about">
      <h2>Our Mission</h2>
      <p>
        We aim to connect loving homes with cats in need.
        Our mission is centered around care, responsibility, and compassion.
      </p>

      <h2>Our History</h2>
      <p>
        Purrfect Adoption began as a small rescue initiative and has grown
        into a trusted adoption platform.
      </p>

      <h2>Our Team</h2>

      <div className="team-grid">
        {['Bob Doe', 'Jane Doe', 'Alex Smith'].map((name, i) => (
          <div key={i} className="team-card">
            <div className="team-footer">
              <strong>{name}</strong>
              <span>Director</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
