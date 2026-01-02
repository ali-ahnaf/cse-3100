export default function About() {
  return (
    <section className="about-page">
      <h2>About Us</h2>

      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          We are a team of cat enthusiasts dedicated to finding loving homes
          for our feline friends. Our platform connects potential adopters
          with cats in need of a forever home.
        </p>
      </div>

      <div className="about-section">
        <h3>Our History</h3>
        <p>
          Purrfect Adoption started with a simple goal: to give every cat
          a chance at a safe and happy life. Over the years, we’ve helped
          countless cats find caring families.
        </p>
      </div>

      <div className="about-section">
        <h3>Our Team</h3>

        <div className="team">
          <div className="team-card">
            <div className="avatar"></div>
            <p><strong>Bob Doe</strong><br />Director</p>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <p><strong>Bob Doe</strong><br />Director</p>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <p><strong>Bob Doe</strong><br />Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
