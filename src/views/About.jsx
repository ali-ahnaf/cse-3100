import React from 'react';

export default function About() {
  const team = [
    { name: "Bob Doe", role: "Director" },
    { name: "Bob Doe", role: "Manager" },
    { name: "Bob Doe", role: "Caretaker" }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>About us</h2>

      <section className="mb-5" style={{ marginBottom: '30px' }}>
        <h3 className="h5">Our mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet.
        </p>
      </section>

      <section className="mb-5" style={{ marginBottom: '30px' }}>
        <h3 className="h5">Our history</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet.
        </p>
      </section>

      <section>
        <h3 className="h5">Our team</h3>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          {team.map((member, i) => (
            <div key={i} className="cat-card" style={{ height: '200px', width: '150px' }}>
              <div style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: '8px' }}></div>
              <div className="cat-info text-start">
                <h4 style={{ margin: '5px 0 0', fontSize: '1rem' }}>{member.name}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}