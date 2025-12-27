export default function About() {
    return (
      <div className="container py-5">
        <h1 className="text-center mb-4">About Us</h1>
  
        {/* Our Mission */}
        <section className="mb-5">
          <h2>Our Mission</h2>
          <p>
            Our mission is to find loving homes for every cat, providing them with a safe,
            happy environment while connecting cat lovers with their perfect companion.
          </p>
        </section>
  
        {/* Our History */}
        <section className="mb-5">
          <h2>Our History</h2>
          <p>
            Purrfect Adoption was founded in 2023 with a vision to make cat adoption easy and
            accessible. Over the years, we have helped hundreds of cats find their forever homes.
          </p>
        </section>
  
        {/* Our Team */}
        <section>
          <h2 className="mb-3">Our Team</h2>
          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-md-6">
              <div className="card h-100 p-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Alice Johnson</h5>
                  <p className="card-text">Co-Founder & Cat Lover</p>
                </div>
              </div>
            </div>
  
            {/* Team Member 2 */}
            <div className="col-md-6">
              <div className="card h-100 p-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Bob Smith</h5>
                  <p className="card-text">Operations Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  