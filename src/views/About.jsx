export default function About() {
  const team = [
    { name: "Bob Doe", role: "Director" },
    { name: "Bob Doe", role: "Manager" },
    { name: "Bob Doe", role: "Caretaker" }
  ];

  
  const paragraphStyle = {
    textAlign: 'left',
    maxWidth: '100%', 
    margin: '10px 0 30px 0',
    color: '#333' 
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
      
      
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our mission</h3>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

      
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our history</h3>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

 
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', marginBottom: '20px' }}>Our team</h3>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {team.map((member, i) => (
            <div key={i} className="cat-card" style={{ height: '200px', width: '200px', position: 'relative' }}>
              
              <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}></div>
              
              
              <div className="cat-info">
                <h4 style={{ margin: '0', fontSize: '1rem', color: '#333' }}>{member.name}</h4>
                <p style={{ margin: '0', fontSize: '0.8rem', color: '#666', textAlign: 'left' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}