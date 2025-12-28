export default function About() {
  const team = [
    { name: "Abid Khan", role: "Director" },
    { name: "Partha Sharma", role: "Manager" },
    { name: "Gias Uddin", role: "Caretaker" },
    { name: "Jony Kumar", role: "Adoption Counselor" }
  ];

  // We need to override the global 'section p' styles from index.css
  const paragraphStyle = {
    textAlign: 'left',
    maxWidth: '100%', 
    margin: '10px 0 30px 0',
    color: '#333' // Darker text to match drawing
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
      
      {/* SECTION 1: MISSION */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our mission</h3>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

      {/* SECTION 2: HISTORY */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our history</h3>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas luc.
        </p>
      </section>

      {/* SECTION 3: TEAM */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', marginBottom: '20px' }}>Our team</h3>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {team.map((member, i) => (
            <div key={i} className="cat-card" style={{ height: '200px', width: '200px', position: 'relative' }}>
              
              <div style={{ width: '100%', height: '100%', backgroundImage: 'url(https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D)', backgroundSize: 'cover' }}></div>
              
              {/* Overlay info box using the same style as cat cards */}
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