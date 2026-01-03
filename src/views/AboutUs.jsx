import React from 'react';

// Team data with high-quality cat images
const teamInfo = [
  { 
    name: "Hosico Cat", 
    desg: "Director", 
    img: "data:image/jpeg;base64,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" 
  },
  { 
    name: "Pisco Cat", 
    desg: "Moral Support", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGLrkOIFbDSOP7kf-vGnAigI_AGAEbK8JbA&s" 
  },
  { 
    name: "Persian Cat", 
    desg: "Yes, Moral Support", 
    img: "https://images.unsplash.com/photo-1716467891152-1b43a96de578?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" 
  },
];

export default function AboutUs() {
  return (
    <div className="about-page py-5">
      {/* Hero Section */}
      <div className="container text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Our Story</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
          Bridging the gap between lonely cats and loving homes since 2024.
        </p>
      </div>

      <div className="container" style={{ maxWidth: "1100px" }}>
        {/* Mission & History Section */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: "#f0f8ff", borderRadius: "20px" }}>
              <h2 className="fw-bold h3 mb-3" style={{ color: "#2c3e50" }}>Our Mission</h2>
              <p className="text-secondary" style={{ lineHeight: "1.7", textAlign: "justify" }}>
                At Purrfect Adoption, our mission is to provide a safe haven for every feline friend and 
                bridge the gap between lonely cats and loving homes. We believe every cat deserves a 
                warm bed, a full bowl, and a family to call their own. Through community outreach 
                and dedicated care, we strive to make the world a better place, one purr at a time.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: "#fff5f5", borderRadius: "20px" }}>
              <h2 className="fw-bold h3 mb-3" style={{ color: "#2c3e50" }}>Our History</h2>
              <p className="text-secondary" style={{ lineHeight: "1.7", textAlign: "justify" }}>
                Founded in 2024, Purrfect Adoption started as a small local shelter with just three 
                rescue cats. Over the years, we have grown into a leading adoption center, thanks to 
                the tireless work of our volunteers and the support of our donors. We have 
                successfully rehomed over 500 cats, ensuring each one found their "purrfect" match.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mt-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Furry Leaders</h2>
            <div className="mx-auto" style={{ height: "4px", width: "60px", backgroundColor: "#add8e6", borderRadius: "2px" }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {teamInfo.map((member, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4">
                <div className="team-member-card text-center">
                  <div className="image-container mb-3 shadow">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img"
                    />
                  </div>
                  <h4 className="fw-bold mb-1">{member.name}</h4>
                  <p className="text-uppercase small tracking-widest text-primary fw-bold" style={{ letterSpacing: "1px" }}>
                    {member.desg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style>{`
        .image-container {
          width: 220px;
          height: 220px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid white;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-member-card:hover .image-container {
          transform: scale(1.08) translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
        }

        .team-member-card h4 {
          color: #2c3e50;
        }

        .tracking-widest {
          letter-spacing: 0.1em;
        }
      `}</style>
    </div>
  );
}