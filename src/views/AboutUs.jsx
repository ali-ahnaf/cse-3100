// ./views/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .about-page {
            max-width: 1100px;
            margin: 2rem auto;
            padding: 2rem;
            background: #fff;
            border-radius: 12px;
          }

          .about-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }

          .about-section {
            margin-bottom: 1.8rem;
          }

          .about-section h3 {
            margin-bottom: 0.5rem;
          }

          .about-section p {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.6;
          }

          .team {
            display: flex;
            gap: 2rem;
            margin-top: 1rem;
          }

          .team-card {
            width: 180px;
            height: 220px;
            border: 1px solid #ccc;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: hidden;
          }

          .team-info {
            border-top: 1px solid #ccc;
            padding: 0.5rem;
            font-size: 0.85rem;
            background: #f9f9f9;
          }
        `}
      </style>

      {/* PAGE CONTENT */}
      <section className="about-page">
        <h2 className="about-title">Our mission</h2>
        <div className="about-section">
          <p>
            At Purrfect Adoption, our mission is simple: to provide every cat with a safe, 
            loving home. We strive to create a welcoming community where adopters and cats 
            can find their perfect match. Through education, advocacy, and compassionate care, 
            we work tirelessly to improve the lives of cats and promote responsible pet ownership. 
            We believe in giving every feline a second chance at happiness and helping families build 
            lifelong bonds with their new furry friends.
          </p>
        </div>

        <h2 className="about-title">Our history</h2>
        <div className="about-section">
          <p>
            Purrfect Adoption was founded in 2018 by a group of passionate cat lovers who saw 
            the need for a dedicated, trustworthy platform to connect cats in need with caring homes. 
            Starting as a small local rescue effort, we have grown into a community-supported organization 
            with hundreds of successful adoptions and ongoing partnerships with shelters and volunteers. 
            Our commitment remains the same: to save lives, spread awareness, and make adoption the first choice for every cat.
          </p>
        </div>

        <h2 className="about-title">Our team</h2>
        <div className="team">
          <div className="team-card">
            <div className="team-info">
              <strong>Bob Doe</strong>
              <br />
              Director
            </div>
          </div>

          <div className="team-card">
            <div className="team-info">
              <strong>Bob Doe</strong>
              <br />
              Director
            </div>
          </div>

          <div className="team-card">
            <div className="team-info">
              <strong>Bob Doe</strong>
              <br />
              Director
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

