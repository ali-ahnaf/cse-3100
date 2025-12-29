export default function About() {
  const teamMembers = [
    { name: 'Leo Messi', role: 'CEO' },
    { name: 'Auni H', role: 'Director' },
    { name: 'Cristiano R', role: 'Manager' }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Our mission</h2>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas luc
      </p>

      <h2 className="mb-4">Our history</h2>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas luc
      </p>

      <h2 className="mb-4">Our team</h2>
      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="team-card">
              <div className="team-image-placeholder"></div>
              <div className="team-info">
                <h5 className="mb-0">{member.name}</h5>
                <p className="text-muted mb-0">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
