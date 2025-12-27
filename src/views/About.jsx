

export default function About() {
  return (
    <div className="about-container">
      {/* Mission */}
      <section className="about-section">
        <h2>Our mission</h2>
        <p>
          We help cats find safe, loving homes by making adoption simple,
          transparent, and friendly for everyone. From rescue to rehoming,
          we focus on care, trust, and responsible matching.
        </p>
      </section>

      {/* History */}
      <section className="about-section">
        <h2>Our history</h2>
        <p>
          Purrfect Adoption started as a small local effort and grew into a
          community-driven platform that supports adopters and fosters.
          We work with volunteers to help cats get the second chance they deserve.
        </p>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2>Our team</h2>

        <div className="team-grid">
         <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1595433562696-19b9c1f2b7f4"
              alt="Bob Doe"
            />
            <div className="team-info">
              <strong>Bob Doe</strong>
              <span>Director</span>
            </div>
          </div>

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987"
              alt="Bob Doe"
            />
            <div className="team-info">
              <strong>Bob Doe</strong>
              <span>Director</span>
            </div>
          </div>

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              alt="Bob Doe"
            />
            <div className="team-info">
              <strong>Bob Doe</strong>
              <span>Director</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
