export default function AboutUs() {
  const team = [
    { name: 'Turja', role: 'CatDad' },
    { name: 'Turja', role: 'CatDad' },
    { name: 'Turja', role: 'CatDad' },
  ];

  return (
    <div className="container">
      <h3>Our mission</h3>
      <p className="mb-4 text-muted">Provide you with a companion and cats a safe home...</p>

      <h3>Our history</h3>
      <p className="mb-4 text-muted">Started from 2022 and still trying our best for the welfare of cats...</p>

      <h3>Our team</h3>
      <div className="d-flex gap-4 mt-3">
        {team.map((member, i) => (
          <div key={i} className="sketch-card" style={{ width: '200px' }}>
            <div style={{ height: '140px', background: '#eee' }}></div>
            <div className="p-3 border-top border-dark">
              <strong>{member.name}</strong><br />
              <span className="small">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}