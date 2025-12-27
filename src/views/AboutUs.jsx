import React from 'react';

export default function AboutUs() {
  const teamMembers = [
    { name: 'Bob Doe', role: 'Director' },
    { name: 'Bob Doe', role: 'Director' },
    { name: 'Bob Doe', role: 'Director' },
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
        
        {/* Using your global .row class, but adding inline style to force 
           3 columns instead of 4, exactly matching the About Us mockup.
        */}
        <div className="row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* Reusing existing .cat-card class for consistent styling */}
              <div className="cat-card" style={{ height: '200px', justifyContent: 'space-between' }}>
                
                {/* Empty box for image placeholder as seen in mockup */}
                <div style={{ 
                  flex: 1, 
                  border: '1px solid #eee', 
                  borderRadius: '4px', 
                  marginBottom: '10px' 
                }}></div>
                
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