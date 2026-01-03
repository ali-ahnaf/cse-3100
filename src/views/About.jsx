const team = [
  {
    name: 'Maya Chen',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Ravi Patel',
    role: 'Veterinary Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Sofia Rivera',
    role: 'Adoption Coordinator',
    image: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Noah Williams',
    role: 'Volunteer Manager',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
  },
];

export default function About() {
  return (
    <section>
      <h2 className="section-title">About us</h2>

      <div className="content-block">
        <h3 className="section-title">Our mission</h3>
        <p className="subdued">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="content-block">
        <h3 className="section-title">Our history</h3>
        <p className="subdued">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="content-block">
        <h3 className="section-title">Our team</h3>
        <div className="cats-grid">
          {team.map((member, idx) => (
            <div key={idx} className="cat-card">
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  border: '1px solid #d7dce3',
                }}
              />
              <div className="cat-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
