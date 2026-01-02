export default function AboutUs() {
  const teamMembers = [
    { name: 'Tahmid', role: 'CEO', },
    { name: 'Mubashira', role: 'Director' },
    { name: 'Obonti', role: 'Manager' },
  ];

  return (
    <div className="about-page">
      <section className="about-section">
        <h2>Our mission</h2>
        <p>
          Our mission is to connect loving cats with their forever homes, ensuring every feline friend finds the care and affection they deserve.
        </p>
      </section>

      <section className="about-section">
        <h2>Our history</h2>
        <p>
          Our organization was founded in 2020 by a group of passionate cat lovers dedicated to rescuing and rehoming cats in need. Since then, we have successfully placed hundreds of cats into loving families.
        </p>
      </section>

      <section className="about-section">
        <h2>Our team</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo"></div>
              <div className="team-info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
