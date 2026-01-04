export default function AboutUs() {
  return (
    <section className="mt-4">
      <div className="container">
        <h2 className="mb-4 text-center">About Us</h2>

        <div className="mb-4">
          <h4>Our Mission</h4>
          <p>
           We believe every cat deserves love and a home.
Our mission is to bring caring families and homeless cats together, creating a future filled with warmth, safety, and happiness.
          </p>
        </div>

        <div className="mb-4">
          <h4>Our History</h4>
          <p>
            Founded by dedicated animal lovers, Purrfect Adoption has grown from a small initiative into a trusted platform that has helped hundreds of cats find loving homes and encouraged responsible pet adoption.
          </p>
        </div>

        <div className="mb-4">
          <h4>Our Team</h4>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="cat-card">
                <h3>Dola</h3>
                <p>Founder</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <h3>Tanzier</h3>
                <p>Adoption Coordinator</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <h3>Doreo</h3>
                <p>Volunteer Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}