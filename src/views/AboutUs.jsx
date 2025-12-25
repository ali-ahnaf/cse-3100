export default function AboutUs() {
  const teamMembers = [
    { name: 'John Smith', role: 'Director', image: 'https://i.pravatar.cc/300?img=11' },
    { name: 'Sarah Johnson', role: 'Director', image: 'https://i.pravatar.cc/300?img=12' },
    { name: 'Michael Brown', role: 'Director', image: 'https://i.pravatar.cc/300?img=13' },
  ];

  return (
    <section className="about-section">
      <div className="about-block">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="about-block">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="about-block">
        <h2>Our team</h2>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
