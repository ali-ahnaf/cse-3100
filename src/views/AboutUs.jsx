export default function AboutUs() {
  return (
    <section>
      <h2>Our mission</h2><p>...</p>
      <h2>Our history</h2><p>...</p>
      <h2>Our team</h2>
      <div className="cats-container">
        {[1].map(i => <div key={i} className="cat-card"><h3>Director</h3><p>Mahim Rianto</p></div>)}
      </div>
    </section>
  );
}