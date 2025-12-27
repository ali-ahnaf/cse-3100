import React from 'react';

export default function AboutUs() {
  // 1. Updated team data with distinct names, roles, and images
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
        
        {/* Using global .row class with inline override for 3 columns */}
        <div className="row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* Reusing existing .cat-card class for consistent styling */}
              <div className="cat-card" style={{ height: '250px', justifyContent: 'space-between' }}>
                
                {/* 2. Replaced placeholder DIV with IMG tag */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    flex: 1,       // Takes available space, similar to the previous placeholder div
                    width: '100%', // Ensures it fills the card width
                    objectFit: 'cover', // Prevents image distortion
                    borderRadius: '4px', 
                    marginBottom: '10px' 
                  }} 
                />
                
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>{member.name}</h5>
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