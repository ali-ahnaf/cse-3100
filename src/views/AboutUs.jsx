export default function About() {
  const teamMembers = [
    { name: 'Bob Doe', role: 'Director' },
    { name: 'Alice Smith', role: 'Manager' },
    { name: 'Charlie Brown', role: 'Designer' },
  ];

  return (
    <div className="about-page">
      <h2 className="about-title">About Us</h2>
      
      <div className="about-content">
        <div className="about-section">
          <h3>Our mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our history</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-placeholder">
                </div>
                <div className="team-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}