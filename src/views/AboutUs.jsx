export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            
            {/* Our Mission Section */}
            <section className="mission-section mb-5">
              <h2 className="section-title mb-4">Our Mission</h2>
              <div className="mission-content">
                <p>
                  At Purrfect Adoption, our mission is to connect loving families with cats in need of forever homes. 
                  We believe every cat deserves a safe, caring environment where they can thrive and bring joy to their human companions.
                </p>
                <p>
                  We work tirelessly to rescue, rehabilitate, and rehome cats of all breeds and ages. 
                  Our team is dedicated to ensuring each adoption is a perfect match, providing lifetime support to both cats and their new families.
                </p>
                <p>
                  Through education and community outreach, we aim to reduce the number of homeless cats and promote responsible pet ownership.
                </p>
              </div>
            </section>

            {/* Our History Section */}
            <section className="history-section mb-5">
              <h2 className="section-title mb-4">Our History</h2>
              <div className="history-content">
                <p>
                  Founded in 2010 by cat lover Sarah Johnson, Purrfect Adoption started as a small foster home with just three rescued cats. 
                  What began as a personal passion project quickly grew into a community-wide movement.
                </p>
                <p>
                  Over the years, we've expanded our facilities, partnered with local veterinarians, and established a network of foster families. 
                  To date, we've successfully placed over 5,000 cats in loving homes across the region.
                </p>
                <p>
                  Our commitment to feline welfare has earned us recognition from several animal welfare organizations, 
                  but our greatest reward remains the happy purrs of each adopted cat.
                </p>
              </div>
            </section>

            {/* Our Team Section */}
            <section className="team-section">
              <h2 className="section-title mb-5 text-center">Our Team</h2>
              <div className="team-grid">
                
                <div className="team-member">
                  <div className="team-photo">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="Alex Chen" 
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Alex Chen</h3>
                    <p className="team-position">Executive Director</p>
                    <p className="team-bio">
                      With over 15 years in animal welfare, Alex leads our organization with passion and dedication.
                    </p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-photo">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="Maria Rodriguez" 
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Maria Rodriguez</h3>
                    <p className="team-position">Adoption Director</p>
                    <p className="team-bio">
                      Maria ensures every cat finds their perfect match through careful screening and follow-up support.
                    </p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-photo">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="David Wilson" 
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">David Wilson</h3>
                    <p className="team-position">Medical Director</p>
                    <p className="team-bio">
                      David oversees all veterinary care, ensuring our cats receive the best medical attention possible.
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}