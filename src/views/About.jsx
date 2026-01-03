import React from 'react';

const About = () => (
  <section className="mt-4 text-center about-section">
    <h2>About Us</h2>
    <p>
      Purrfect Adoption is dedicated to helping cats find loving homes. Our mission is to connect caring families with wonderful cats in need of adoption.
    </p>

    <div className="about-info">
      <h4>Our Mission</h4>
      <p>
        At Purrfect Adoption, we strive to rescue and rehome cats, providing them with a second chance at a loving and caring home. Our goal is to bring awareness to the importance of pet adoption.
      </p>
    </div>

    <div className="team">
      <h4>Meet Our Team</h4>
      <div className="team-member">
        <h5>John Doe</h5>
        <p>Founder & CEO</p>
        <p>John started Purrfect Adoption with the vision of giving every cat a loving home.</p>
      </div>
      <div className="team-member">
        <h5>Jane Smith</h5>
        <p>Adoption Coordinator</p>
        <p>Jane works with potential adopters to ensure the best matches for cats and families.</p>
      </div>
    </div>
  </section>
);

export default About;
