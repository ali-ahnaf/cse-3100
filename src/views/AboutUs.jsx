export default function AboutUs() {
  return (
    <section className="about-page">
      <h2 className="text-center">About Us</h2>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Adoption, our mission is to connect loving cats with
          forever homes. We believe every cat deserves a safe, warm, and caring
          environment where they can thrive. We work tirelessly to rescue,
          rehabilitate, and rehome cats in need, while educating the community
          about responsible pet ownership.
        </p>
        <p>
          Our dedicated team ensures each cat receives proper veterinary care,
          socialization, and love before finding their perfect match. We are
          committed to making the adoption process smooth, supportive, and
          rewarding for both cats and their new families.
        </p>
      </div>

      <div className="about-section">
        <h2>Our History</h2>
        <p>
          Founded in 2015, Purrfect Adoption started as a small grassroots
          organization with a handful of volunteers who were passionate about
          feline welfare. What began in a modest foster home has grown into a
          full-fledged adoption center that has successfully placed over 2,000
          cats into loving homes.
        </p>
        <p>
          Throughout the years, we've expanded our services to include community
          outreach programs, spay/neuter initiatives, and educational workshops.
          Our growth has been possible thanks to the generous support of our
          donors, volunteers, and the community at large.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          Our team is composed of passionate animal lovers, experienced
          veterinarians, and dedicated volunteers who work around the clock to
          ensure the well-being of our feline friends.
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
          <li>
            <strong>Dr. Sarah Johnson</strong> - Veterinary Director with 15
            years of experience in feline medicine
          </li>
          <li>
            <strong>Michael Chen</strong> - Adoption Coordinator who has matched
            over 500 cats with families
          </li>
          <li>
            <strong>Emily Rodriguez</strong> - Volunteer Coordinator managing our
            network of 50+ volunteers
          </li>
          <li>
            <strong>David Thompson</strong> - Operations Manager ensuring smooth
            daily operations
          </li>
        </ul>
        <p>
          Together with our amazing volunteers and foster families, we form a
          compassionate community dedicated to giving every cat a second chance
          at happiness.
        </p>
      </div>
    </section>
  );
}
