import React from 'react';

export default function About() {
  return (
    <section className="mt-4 container">
      <div className="about-hero">
        <h2>About Purrfect Adoption</h2>
        <p className="lead">
          We're a small team with big hearts — helping cats find their forever
          homes while supporting communities and shelters. We focus on care,
          matching, and education so every adoption is a great fit.
        </p>
      </div>

      <div>
        <h3>What we do</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <h4>Care & Health</h4>
            <p>
              Every cat receives a health check, vaccinations, and grooming when
              necessary. We prioritize medical care before adoption.
            </p>
          </div>

          <div className="feature-card">
            <h4>Responsible Matching</h4>
            <p>
              We spend time understanding adopters' lifestyles to make sure the
              match is long-lasting and happy for both the cat and the family.
            </p>
          </div>

          <div className="feature-card">
            <h4>Community Programs</h4>
            <p>
              We work with local shelters and run education programs on
              responsible ownership, spay/neuter, and volunteer support.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}
