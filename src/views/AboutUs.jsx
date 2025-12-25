export default function AboutUs() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Director', bio: 'Cat enthusiast with 10+ years experience' },
    { name: 'Bob Smith', role: 'Veterinarian', bio: 'Specialized in feline health and wellness' },
    { name: 'Carol Davis', role: 'Adoption Specialist', bio: 'Helped 500+ cats find forever homes' },
  ];

  return (
    <section>
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum 
          dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit. Maecenas lue
        </p>
      </div>

      <div className="about-section">
        <h3>Our History</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum 
          dolor sit amet, consectetur adipiscing elit. Maecenas lue Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit. Maecenas lue
        </p>
      </div>

      <div className="about-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}