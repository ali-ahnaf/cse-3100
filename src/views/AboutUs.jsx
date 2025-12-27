export default function AboutUs() {
  return (
    <section className="container mt-4">
      <h2>About Us</h2>
      <p>
        Welcome to Purrfect Adoption! We are dedicated to finding loving homes for cats in need.
        Our mission is to connect adorable cats with caring families, ensuring every cat gets a second chance at happiness.
      </p>
      <p>
        Founded in 2023, we have helped hundreds of cats find their forever homes.
        All our cats are vetted, vaccinated, and ready for adoption.
      </p>

      <h3>Our Mission</h3>
      <p>
        At Purrfect Adoption, we believe every cat deserves a loving home. Our mission is to rescue, rehabilitate, and rehome cats while educating the community on responsible pet ownership.
      </p>

      <h3>Meet Our Team</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">Founder & CEO</p>
              <p>Alice started Purrfect Adoption with a passion for animal welfare. She oversees all operations and ensures our mission is fulfilled.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Bob Smith</h5>
              <p className="card-text">Adoption Coordinator</p>
              <p>Bob manages the adoption process, matching cats with the perfect families and providing support throughout the journey.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Dr. Carol Lee</h5>
              <p className="card-text">Veterinarian</p>
              <p>Dr. Lee ensures all our cats are healthy and vaccinated. She provides medical care and advice to adopters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}