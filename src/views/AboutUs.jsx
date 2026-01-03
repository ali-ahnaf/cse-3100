export default function AboutUs() {
  const team = [
    { name: 'Alice Thompson', title: 'Director' },
    { name: 'Dr. Robert Chen', title: 'Senior Vet' },
    { name: 'Sarah Jenkins', title: 'Adoption Lead' }
  ];

  return (
    <div>
      <h2 className="section-title">Our mission</h2>
      <p style={{marginBottom: '2rem'}}>
        We are dedicated to providing a safe haven for cats in transition and matching 
        them with loving forever families. Our goal is to ensure every feline 
        receives the care, medical attention, and affection they deserve.
      </p>

      <h2 className="section-title">Our history</h2>
      <p style={{marginBottom: '3rem'}}>
        Founded in 2014, Purrfect Adoption began as a small community initiative. 
        Over the last decade, we have expanded our facilities and network, 
        successfully finding homes for over 10,000 cats across the country.
      </p>

      <h2 className="section-title">Our team</h2>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className="team-card">
            <div style={{height: '180px', background: '#eee', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem'}}>
              {m.name.charAt(0)}
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p className="designation">{m.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}