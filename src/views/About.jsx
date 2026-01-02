export default function About() {
  return (
    <section className="mt-4">
      <h2>About us</h2>

      <h4 className="mt-4">Our mission</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h4 className="mt-4">Our history</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h4 className="mt-4">Our team</h4>
      <div className="cats-container mt-3">
        {['Bob Doe', 'Bob Doe', 'Bob Doe'].map((name, i) => (
          <div key={i} className="cat-card">
            <div style={{ height: 200 }} />
            <div className="cat-info">
              <strong>{name}</strong>
              <div>Director</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
