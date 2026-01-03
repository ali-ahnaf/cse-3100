export default function About() {
  return (
    <section className="section">
      <h2>Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>
      <h2 style={{ marginTop: 20 }}>Our history</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>
      <h2 style={{ marginTop: 20 }}>Our team</h2>
      <div className="cats-grid" style={{ marginTop: 12 }}>
        {[
          { name: 'Bob Doe', role: 'Director' },
          { name: 'Bob Doe', role: 'Director' },
          { name: 'Bob Doe', role: 'Director' },
        ].map((p, i) => (
          <div key={i} className="cat-card">
            <div className="cat-img placeholder" />
            <div className="cat-info">
              <div className="cat-name">{p.name}</div>
              <div className="cat-meta">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
