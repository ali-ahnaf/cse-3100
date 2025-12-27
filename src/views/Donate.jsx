export default function Donate() {
  return (
    <section className="container mt-4">
      <h2>Donate to Purrfect Adoption</h2>
      <p>
        Your generous donations help us rescue, care for, and rehome cats in need. Every contribution makes a difference!
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3>Why Donate?</h3>
          <ul>
            <li>Support veterinary care for rescued cats</li>
            <li>Provide food, shelter, and toys</li>
            <li>Fund adoption events and community outreach</li>
            <li>Help us expand our rescue efforts</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Donation Options</h3>
          <div className="mb-3">
            <button className="btn btn-primary me-2">$10 - One-time</button>
            <button className="btn btn-secondary me-2">$25 - Monthly</button>
            <button className="btn btn-success">$50 - Annual</button>
          </div>
          <p>Or enter a custom amount:</p>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="number" className="form-control" placeholder="Amount" />
            <button className="btn btn-outline-primary">Donate Now</button>
          </div>
          <p><small>All donations are tax-deductible. Thank you for your support!</small></p>
        </div>
      </div>
    </section>
  );
}