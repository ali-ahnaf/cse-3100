import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Adnan",
      role: "Director",
      image: "/adnan.jpg"  
    },
    {
      name: "John Wick",
      role: "Director",
      image: "/john.jpg"
    },
    {
      name: "David J Malan",
      role: "Director",
      image: "/david.jpg"
    }
  ];

  return (
    <div className="container page-content">
      <h1 className="page-title">About Purrfect Adoption</h1>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, we believe every cat deserves a loving home. Our mission is to 
          connect wonderful cats with caring families who will provide them with the love, care, 
          and attention they deserve. We work tirelessly to rescue, rehabilitate, and rehome cats 
          in need.
        </p>
      </div>

      <div className="about-section">
        <h3>Our History</h3>
        <p>
          We rescue cats from shelters, streets, and difficult situations. Each cat receives 
          complete veterinary care, including vaccinations, spaying/neutering, and any necessary 
          medical treatment. Our experienced team carefully assesses each cat's personality and 
          needs to help match them with the perfect family.
        </p>
      </div>

      <div className="about-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200x200?text=Team+Member";
                  }}
                />
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
