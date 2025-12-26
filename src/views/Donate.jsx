export default function Donate() {
  return (
    <section className="mt-4 container">
      <h2>Donate</h2>
      <p>
        Your support helps us rescue, shelter, and find loving homes for cats.
        Any amount makes a difference.
      </p>
      <div className="donate-card">
        <div className="donate-amounts">
          {[20, 40, 60, 80, 100].map((amt) => (
            <div key={amt} className="donation-box">${'{'}amt{'}'}</div>
          ))}
        </div>
        <button className="btn btn-primary" style={{ marginTop: 12 }}>Donate now</button>
      </div>
    </section>
  );
}
