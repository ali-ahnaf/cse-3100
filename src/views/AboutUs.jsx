import React from 'react';
import teamImage from '../assets/images.jpg';
import teamImaged from '../assets/imagesjb.jpg';
import teamImagedd from '../assets/imageskb.jpg';
const teamMembers = [
  {
    id: 1,
    name: 'Fatima Rahman',
    role: 'Founder & Director',
    image: teamImage,
  },
  {
    id: 2,
    name: 'Dr. Karim Hassan',
    role: 'Veterinarian',
    image: teamImaged,
  },
  {
    id: 3,
    name: 'Ayesha Khan',
    role: 'Operations Manager',
    image: teamImagedd,
  },
];

export default function AboutUs() {
  return (
    <div className="about-us-section">
      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Adoption, our mission is to rescue, rehabilitate, and rehome abandoned and 
          stray cats throughout Bangladesh. We work tirelessly to provide medical care, nutrition, 
          and shelter to cats in need, while helping families in Dhaka, Chittagong, and beyond find 
          their perfect feline companion. We believe in creating a compassionate society where every 
          cat is valued and cared for.
        </p>
      </section>

      {/* History Section */}
      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Founded in 2018 in Dhaka, Bangladesh, Purrfect Adoption began as a small community initiative 
          to help homeless cats. Over the years, we've grown into a leading animal welfare organization 
          with partnerships across major cities including Chittagong, Khulna, and Sylhet. Our dedicated 
          team has successfully rehomed over 500 cats, vaccinated and neutered 1000+ animals, and provided 
          emergency shelter to countless cats. Today, we continue our work with the support of local 
          volunteers and animal lovers throughout the country.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
