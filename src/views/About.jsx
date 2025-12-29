export default function About() {
  return (
    <>
      {/* Mission */}
      <section>
        <h4>Our Mission</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet.
        </p>
      </section>

      {/* History */}
      <section>
        <h4>Our History</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet.
        </p>
      </section>

      {/* Team */}
      <section>
        <h4>Our Team</h4>

        <div className="team-grid">
          <div className="team-card">
            <div className="avatar"></div>
            <p>Bob Doe</p>
            <small>Director</small>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <p>Bob Doe</p>
            <small>Manager</small>
          </div>

          <div className="team-card">
            <div className="avatar"></div>
            <p>Bob Doe</p>
            <small>Volunteer</small>
          </div>
        </div>
      </section>
    </>
  );
}
