const staffMembers = [
  {
    fullName: 'S.M. Rashid Sakin',
    position: 'Director',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
  {
    fullName: 'Dipu Dada',
    position: 'Director',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
  {
    fullName: 'Rakey Thouhid',
    position: 'Director',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
];

const About = () => {
  return (
    <section className="about-wrapper">
      {/* Mission Section */}
      <div className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to connect cats with safe, loving homes by making
          the adoption process simple and accessible. From rescue to rehoming,
          we prioritize trust, transparency, and responsible matching to ensure
          the best outcome for both cats and their future families.
        </p>
      </div>

      {/* History Section */}
      <div className="about-section history">
        <h2>Our History</h2>
        <p>
          What began as a small, community-driven initiative has grown into a
          dedicated platform supported by passionate volunteers, foster families,
          and animal lovers from all walks of life. Every cat, regardless of age
          or background, receives care, attention, and love while waiting for their
          forever home. We focus on a transparent, stress-free adoption process,
          creating meaningful connections between cats and adopters. Beyond adoptions,
          we raise awareness about responsible pet ownership and provide ongoing support
          to adopters and foster homes, ensuring every cat has the chance for a happy
          and fulfilling life.
        </p>
      </div>

      {/* Team Section */}
      <div className="about-section team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {staffMembers.map((person, index) => (
            <article key={index} className="team-member">
              <div className="photo-wrapper">
                <img src={person.photo} alt={person.fullName} />
              </div>
              <div className="member-details">
                <span className="member-name">{person.fullName}</span>
                <span className="member-role">{person.position}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
