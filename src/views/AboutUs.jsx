export default function AboutUs() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Us</h1>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Adoption, our mission is to connect loving cats with caring families.
          We believe every cat deserves a warm, safe home where they can thrive and bring
          joy to their human companions. We work tirelessly to rescue, rehabilitate, and
          rehome cats in need, ensuring they receive the medical care, nutrition, and love
          they deserve while waiting for their forever homes.
        </p>
        <p>
          We are committed to promoting responsible pet ownership through education,
          support, and advocacy. Our goal is to reduce the number of homeless cats in
          our community and create lasting bonds between cats and their adoptive families.
        </p>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Founded in 2015, Purrfect Adoption started as a small volunteer-run organization
          with a passion for helping cats in need. What began in a single foster home has
          grown into a thriving adoption center that has successfully placed over 2,000 cats
          into loving homes.
        </p>
        <p>
          Over the years, we&apos;ve expanded our services to include community outreach programs,
          low-cost spay/neuter clinics, and educational workshops on cat care and behavior.
          Our dedicated team of volunteers, foster families, and staff work around the clock
          to ensure every cat receives individual attention and care.
        </p>
        <p>
          Today, we&apos;re proud to be one of the region&apos;s most trusted cat adoption organizations,
          known for our compassionate approach and commitment to finding the perfect match
          between cats and families.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Sarah Johnson</h3>
            <p><strong>Founder & Director</strong></p>
            <p>
              Sarah has dedicated her life to cat welfare and brings over 15 years
              of experience in animal rescue and rehabilitation.
            </p>
          </div>
          
          <div className="team-member">
            <h3>Dr. Michael Chen</h3>
            <p><strong>Veterinary Director</strong></p>
            <p>
              Dr. Chen ensures all our cats receive top-quality medical care and
              oversees our health and wellness programs.
            </p>
          </div>
          
          <div className="team-member">
            <h3>Emily Rodriguez</h3>
            <p><strong>Adoption Coordinator</strong></p>
            <p>
              Emily works closely with potential adopters to find the perfect
              feline match for their family and lifestyle.
            </p>
          </div>
          
          <div className="team-member">
            <h3>James Williams</h3>
            <p><strong>Volunteer Coordinator</strong></p>
            <p>
              James manages our amazing team of volunteers and organizes
              community outreach and fundraising events.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
