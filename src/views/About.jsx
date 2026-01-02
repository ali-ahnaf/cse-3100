export default function About() {
  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>
      <p>Learn more about our mission and our lovely team.</p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card h-100 about-card-unique">
              <div className="card-body">
                <h3 className="card-title">Our History</h3>
                <p className="card-text">
                  Founded in 2024, Purrfect Adoption started with a simple goal:
                  to connect loving homes with cats in need. What began as a small
                  volunteer effort has grown into a community dedicated to feline
                  welfare, finding forever families for hundreds of cats every year.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card h-100 about-card-unique">
              <div className="card-body">
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To rescue, care for, and rehome cats ethically — ensuring every cat gets the forever home it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">Our Team</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 about-card-unique">
              <div className="card-body">
                <h4 className="card-title">Bob Doe</h4>
                <p className="card-text">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 about-card-unique">
              <div className="card-body">
                <h4 className="card-title">John Smith</h4>
                <p className="card-text">Lead Veterinarian</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 about-card-unique">
              <div className="card-body">
                <h4 className="card-title">Jane Doe</h4>
                <p className="card-text">Adoption Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
