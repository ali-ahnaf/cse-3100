export default function AboutUs() {
  return (
    <section>
      <h2>About Us</h2>

      <div className="section-content">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to find loving homes for every cat
          in need. We believe that every feline deserves a safe, comfortable, and
          caring environment where they can thrive and bring joy to their families.
        </p>

        <h3>Our History</h3>
        <p>
          Founded in 2015, Purrfect Adoption started as a small shelter dedicated
          to rescuing abandoned and stray cats. Over the years, we've grown into a
          thriving organization with a network of volunteers, foster families, and
          adoption partners. We've successfully found homes for over 5,000 cats and
          continue to expand our reach every day.
        </p>

        <h3>Our Team</h3>
        <p>
          Our dedicated team of veterinarians, caregivers, and adoption specialists
          work tirelessly to ensure every cat receives the medical attention and
          love they deserve. From initial rescue to forever home placement, we're
          committed to excellence in every step.
        </p>
      </div>

      <div className="team-grid">
        <div className="team-member">
          <h3>Dr. Sarah Mitchell</h3>
          <p>Veterinarian &amp; Founder</p>
          <p>20+ years of experience in animal care</p>
        </div>
        <div className="team-member">
          <h3>James Chen</h3>
          <p>Adoption Coordinator</p>
          <p>Specializing in perfect cat-family matches</p>
        </div>
        <div className="team-member">
          <h3>Maria Rodriguez</h3>
          <p>Shelter Manager</p>
          <p>Dedicated to cat welfare and care</p>
        </div>
      </div>
    </section>
  );
}
