export default function AboutUs() {
  return (
    <section className="mt-4">
      <div className="container">
        <h2 className="mb-4 text-center">About Us</h2>

        <div className="mb-4">
          <h4>Our Mission</h4>
          <p>
            Our mission is to connect loving families with cats who need a
            forever home. We believe every cat deserves care, respect, and a
            safe place to live.
          </p>
        </div>

        <div className="mb-4">
          <h4>Our History</h4>
          <p>
            Purrfect Adoption started as a small initiative by animal lovers.
            Over the years, we have helped hundreds of cats find caring homes
            and raise awareness about responsible pet adoption.
          </p>
        </div>

        <div className="mb-4">
          <h4>Our Team</h4>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="cat-card">
                <h5>Shafin</h5>
                <p>Founder</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <h5>Ismat</h5>
                <p>Adoption Coordinator</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <h5>Turjo</h5>
                <p>Volunteer Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
