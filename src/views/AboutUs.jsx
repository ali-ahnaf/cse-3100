export default function AboutUs() {
  const team = Array(3).fill({ name: 'Bob Doe', role: 'Director' });

  return (
    <div className="mt-4">
      <section className="mb-4">
        <h5>Our mission</h5>
        <p className="small text-muted">i dont know actually...</p>
      </section>
      <section className="mb-4">
        <h5>Our history</h5>
        <p className="small text-muted">i mean they are CATS so there history is just meow...</p>
      </section>
      <section>
        <h5>Our team</h5>
        <div className="cats-container mt-3">
          {team.map((m, i) => (
            <div key={i} className="cat-card" style={{maxWidth: '220px'}}>
              <div style={{height: '140px', background: '#fff'}}></div>
              <div className="cat-info border-top border-dark">
                <strong>{m.name}</strong><br/>
                <span className="small">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}