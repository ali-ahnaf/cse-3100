export default function AboutUs() {

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Founder & Director', image: 'https://play-lh.googleusercontent.com/aikcFU98JDbgQLxoKSOXJ7kC4qNFf2fFSo9di7S2y8qccKbB3ceAmwQaAjIli34HbA' },
    { name: 'Michael Chen', role: 'Lead Veterinarian', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Emma Rodriguez', role: 'Adoption Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { name: 'David Wilson', role: 'Animal Behaviorist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' }
  ];

  return (
    <section className="about-us-container py-5">
      <div className="container">
        {}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">About Purrfect Adoption</h1>
          <p className="lead">Dedicated to finding loving homes for every cat in need.</p>
        </div>

        {}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow-lg rounded-4 h-100">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold mb-3 text-primary">Our Mission</h2>
                <p className="card-text fs-5">
                  At Purrfect Adoption, we believe every cat deserves a loving home. 
                  Our mission is to connect adorable felines with caring families, 
                  ensuring each cat finds their perfect forever home. We work tirelessly 
                  to rescue, rehabilitate, and rehome cats while promoting responsible 
                  pet ownership in our community.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=400&fit=crop" 
              alt="Cat with loving family" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <div className="card border-0 shadow-lg rounded-4 h-100">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold mb-3 text-primary">Our History</h2>
                <p className="card-text fs-5">
                  Founded in 2020 by Sarah Johnson, Purrfect Adoption began as a small 
                  volunteer-run initiative operating out of a garage. Today, we've helped 
                  over 500 cats find loving homes across the country. What started as a 
                  passion project has grown into a respected organization with a dedicated 
                  team of professionals and volunteers who work tirelessly to care for 
                  our feline friends.
                </p>
                <div className="mt-4">
                  <h4 className="h5 fw-bold">Our Milestones</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🏠 <strong>500+</strong> successful adoptions</li>
                    <li className="mb-2">🐱 <strong>300+</strong> cats rescued annually</li>
                    <li className="mb-2">❤️ <strong>50+</strong> active volunteers</li>
                    <li>🤝 <strong>20+</strong> partner veterinary clinics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img 
              src="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/Cat-born-with-a-mustache-mark-will-steal-your-heart-61c07bc625e84__700.jpg" 
              alt="Cat adoption center" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {}
        <div className="team-section mb-5">
          <div className="text-center mb-5">
            <h2 className="h1 fw-bold mb-3">Meet Our Team</h2>
            <p className="lead text-muted">The passionate individuals who make it all possible</p>
          </div>
          
          <div className="row justify-content-center g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-card card border-0 shadow rounded-4 h-100">
                  <div className="card-body p-4 text-center">
                    <div className="team-img-container mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="rounded-circle img-fluid"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="h4 fw-bold mb-2">{member.name}</h3>
                    <p className="text-primary fw-semibold mb-3">{member.role}</p>
                    <p className="text-muted">
                      Dedicated to providing the best care and finding loving homes for our feline friends.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="text-center mt-5">
          <div className="card border-0 bg-primary text-white rounded-4 p-5">
            <h2 className="h2 mb-3">Join Our Mission</h2>
            <p className="lead mb-4">
              Whether you want to adopt, volunteer, or support our cause, there's a place for you at Purrfect Adoption.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-light btn-lg px-4">Adopt a Cat</button>
              <button className="btn btn-outline-light btn-lg px-4">Volunteer</button>
              <button className="btn btn-light btn-lg px-4">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}