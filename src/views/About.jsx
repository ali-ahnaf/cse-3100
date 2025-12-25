export default function About() {
  const team = [
    { 
      name: "David Miller", 
      role: "Director", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop" 
    },
    { 
      name: "Alice Smith", 
      role: "Manager", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop" 
    },
    { 
      name: "Charlie Brown", 
      role: "Caretaker", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop" 
    }
  ];

  const paragraphStyle = {
    textAlign: 'left',
    maxWidth: '100%', 
    margin: '10px 0 30px 0',
    color: '#333'
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', padding: '20px' }}>
      
      {/* SECTION 1: MISSION */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our mission</h3>
        <p style={paragraphStyle}>
          Our mission is to provide dedicated care and support through innovation and compassion. 
          We strive to create an environment where excellence is the standard and every individual 
          is treated with respect and dignity.
        </p>
      </section>

      {/* SECTION 2: HISTORY */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Our history</h3>
        <p style={paragraphStyle}>
          Founded in 2010, we began as a small community project and have grown into a leading 
          organization. Over the years, we have expanded our services while maintaining the core 
          values that started our journey.
        </p>
      </section>

      {/* SECTION 3: TEAM */}
      <section>
        <h3 className="h5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', marginBottom: '20px' }}>Our team</h3>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {team.map((member, i) => (
            <div key={i} className="cat-card" style={{ 
              height: '200px', 
              width: '200px', 
              position: 'relative', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
            }}>
              
              {/* Profile Image - using member.image from the array */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                backgroundImage: `url(${member.image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              
              {/* Overlay info box */}
              <div className="cat-info" style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '10px'
              }}>
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