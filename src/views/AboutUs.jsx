export default function AboutUs() {
  return (
    <>
      <section className="about-section">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="about-section">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="about-section">
        <h2>Our team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Sarah Johnson"
            />
            <h3>Sarah Johnson</h3>
            <p>Executive Director</p>
          </div>
          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=33"
              alt="Michael Chen"
            />
            <h3>Michael Chen</h3>
            <p>Adoption Coordinator</p>
          </div>
          <div className="team-card">
            <img
              src="https://i.pravatar.cc/200?img=47"
              alt="Emily Rodriguez"
            />
            <h3>Emily Rodriguez</h3>
            <p>Veterinary Care Specialist</p>
          </div>
        </div>
      </section>
    </>
  );
}

