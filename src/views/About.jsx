import React from 'react';

export default function About() {
  return (
    <section className="about-page mt-4">
      <h2><strong>Our Mission</strong></h2>
      <p>
        We strive to connect loving families with cats in need of a home. Our mission is to
        provide safe shelter, proper medical care, and adoption support for every animal.
      </p>

      <h3><strong>Our History</strong></h3>
      <p>
        Founded by volunteers in 2015, our organization has grown from a small foster network
        to a community-supported shelter with dozens of successful adoptions each year.
      </p>

      <h3><strong>Our Team</strong></h3>
      <p>Meet a few of the people who make our work possible.</p>

      <div className="team-grid">
        <div className="person-card">
          <img src="https://via.placeholder.com/220x220.png?text=Photo+1" alt="Person 1" />
          <h4>Alex Morgan</h4>
          <p className="muted">Founder & Director</p>
        </div>

        <div className="person-card">
          <img src="https://via.placeholder.com/220x220.png?text=Photo+2" alt="Person 2" />
          <h4>Sana Lee</h4>
          <p className="muted">Operations Manager</p>
        </div>

        <div className="person-card">
          <img src="https://via.placeholder.com/220x220.png?text=Photo+3" alt="Person 3" />
          <h4>Devin Grant</h4>
          <p className="muted">Volunteer Coordinator</p>
        </div>
      </div>
    </section>
  );
}
