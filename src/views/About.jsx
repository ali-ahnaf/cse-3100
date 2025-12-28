import React from 'react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Purrfect Adoption — About Us</h2>
            <p className="lead">
              We connect loving homes with adorable cats. Our team cares deeply
              about animal welfare and finds the best matches for every family.
            </p>

            <div className="card-flashy">
              <h3>Our Mission</h3>
              <p>
                Provide safe shelter, thoughtful care, and loving forever homes
                for cats of all backgrounds. We run adoption drives, vet care,
                and community outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2019, Purrfect Adoption started as a small initiative
              to help rescue cats find loving homes. What began with just a few
              volunteers and a handful of cats has grown into a thriving
              organization serving hundreds of families every year.
            </p>
            <p>
              Today, we partner with local shelters and rescue organizations to
              give every cat a second chance at happiness.
            </p>
          </div>
          <div
            className="story-image"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/?networking,technology,community')",
            }}
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h4>Compassion</h4>
            <p>We care deeply for every cat's wellbeing and happiness.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Community</h4>
            <p>Building strong bonds between cats and their families.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h4>Excellence</h4>
            <p>Providing top-notch care and support at every step.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌟</div>
            <h4>Trust</h4>
            <p>Earning your confidence through transparency and dedication.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="about-impact">
        <h3>Our Impact</h3>
        <div className="impact-stats">
          <div className="stat-card">
            <h4>500+</h4>
            <p>Cats Adopted</p>
          </div>
          <div className="stat-card">
            <h4>200+</h4>
            <p>Happy Families</p>
          </div>
          <div className="stat-card">
            <h4>1000+</h4>
            <p>Hours of Care</p>
          </div>
          <div className="stat-card">
            <h4>24/7</h4>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="about-gallery">
        <h3>Meet Our Community</h3>
        <div className="gallery-grid">
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/?cats,cute')",
            }}
          />
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/?kitten,play')",
            }}
          />
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/?cats,home')",
            }}
          />
          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/featured/?pet,family')",
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h3>Ready to Adopt?</h3>
        <p>
          Browse our available cats and find your perfect companion today!
        </p>
        <a href="/available-cats" className="btn-cta">
          View Available Cats
        </a>
      </section>
    </>
  );
}