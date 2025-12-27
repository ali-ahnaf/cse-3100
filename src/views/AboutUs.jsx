import React from 'react';

export default function AboutUs() {
  const teamMembers = [
    { 
      name: 'Sarah Jenkins', 
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
    },
    { 
      name: 'Dr. Mark Smith', 
      role: 'Head Veterinarian',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    { 
      name: 'Emily White', 
      role: 'Adoption Manager',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww'
    },
  ];

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2>About us</h2>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Our mission</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Our history</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <div>
        <h4 style={{ marginBottom: '1rem' }}>Our team</h4>
        
        <div className="row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* Increased card height slightly to fit both boxes comfortably */}
              <div className="cat-card" style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* 1. Image Layout Box */}
                <div style={{ 
                  border: '2px solid #555', 
                  borderRadius: '4px', 
                  padding: '3px',
                  height: '180px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      borderRadius: '2px' 
                    }} 
                  />
                </div>
                
                {/* 2. Text Layout Box (Applied here as requested) */}
                <div style={{ 
                  border: '2px solid #555',  // Same dark border
                  borderRadius: '4px',       // Same rounded corners
                  padding: '10px',           // Padding inside the text box
                  textAlign: 'left',
                  flex: 1,                   // Fills remaining vertical space
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box'
                }}>
                  <h5 style={{ margin: '0 0 4px 0', fontSize: '1rem', fontWeight: 'bold' }}>{member.name}</h5>
                  <small style={{ color: '#6c757d' }}>{member.role}</small>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}