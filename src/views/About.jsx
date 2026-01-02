export default function About() {
  const team = [
    { name: "Bob Doe", role: "Director" },
    { name: "Bob Doe", role: "Director" },
    { name: "Bob Doe", role: "Director" }
  ];

  return (
    <div className="about-container">
      
      <section>
        <h3 className="h5 about-section-title">Our Mission</h3>
        <p className="comic-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

      <section>
        <h3 className="h5 about-section-title">Our History</h3>
        <p className="comic-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

      <section>
        <h3 className="h5 about-section-title about-team-title">Our Team</h3>
        
        <div className="team-container">
          {team.map((member, i) => (
            <div key={i} className="card team-card">
              
              <div className="team-member-image"></div>
              <div className="card cat-info">
                <h4 className="team-member-name">{member.name}</h4>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}