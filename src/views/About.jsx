export default function About() {
  return (
    <section className="about">
      <h2>Our Mission</h2>
      <p>
        At Purrfect Adoption, we believe every cat deserves a loving home. 
        Our mission is to create a safe, compassionate, and responsible adoption 
        environment where cats and people can find their perfect match. 
        We strive to educate adopters, support animal welfare, and make the 
        adoption process joyful and meaningful for all.
      </p>

      <h2>Our History</h2>
      <p>
        Founded as a small community rescue initiative, Purrfect Adoption has 
        grown into a trusted platform for cat adoption. Over the years, we 
        have helped hundreds of cats find their forever homes, partnering with 
        shelters, volunteers, and advocates who share our passion for feline 
        welfare.
      </p>

      <h2>Our Team</h2>
      <div className="team-grid">
        {['Bob Doe', 'Jane Doe', 'Alex Smith'].map((name, i) => (
          <div key={i} className="team-card">
            <div className="team-footer">
              <strong>{name}</strong>
              <span>Director</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
