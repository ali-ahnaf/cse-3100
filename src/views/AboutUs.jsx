export default function AboutUs() {
  return (
    <main>
      <div className="container">
        <h2 className="page-title">About Us</h2>

        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lorem ut sapien
            tincidunt, vel fermentum justo facilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas luctus lorem ut sapien tincidunt, vel fermentum justo facilisis.
          </p>
        </section>

        <section className="about-section">
          <h3>Our History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lorem ut sapien
            tincidunt, vel fermentum justo facilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas luctus lorem ut sapien tincidunt, vel fermentum justo facilisis.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Team</h3>
          <div className="team-grid">
            {[
              { name: 'Bob Doe', role: 'Director', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Alice Smith', role: 'Coordinator', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'John Lee', role: 'Volunteer', photo: 'https://randomuser.me/api/portraits/men/65.jpg' },
            ].map((member, i) => (
              <div key={i} className="team-card">
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
