import React from 'react';

export default function AboutUs() {
  // Updated team members with different names and roles
  const teamMembers = [
    { name: 'Sarah Jenkins', role: 'Founder & CEO' },
    { name: 'Dr. Mark Smith', role: 'Head Veterinarian' },
    { name: 'Emily White', role: 'Adoption Manager' },
  ];

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="mb-4">About us</h2>

      <div className="mb-4">
        <h4>Our mission</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <div className="mb-4">
        <h4>Our history</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <div>
        <h4>Our team</h4>
        <div className="row g-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="card h-100" 
                style={{ 
                  border: '1px solid #dee2e6', 
                  borderRadius: '8px', 
                  padding: '10px',
                  minHeight: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                {/* Placeholder for team image as per mockup empty box */}
                <div style={{ flex: 1 }}></div> 
                <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
                  <h5 className="mb-0" style={{ fontSize: '1rem' }}>{member.name}</h5>
                  <small className="text-muted">{member.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}