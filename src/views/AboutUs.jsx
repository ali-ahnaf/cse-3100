export default function AboutUs() {
  return (
    <section>
      <h2>About Purrfect Adoption</h2>

      {/* Our Mission */}
      <div style={{ marginTop: '3rem' }}>
        <h3>🎯 Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to provide loving homes for
          cats in need. We believe every cat deserves compassion, care, and a
          family that will cherish them. We work tirelessly to rescue, rehabilitate,
          and rehome cats, ensuring they find the perfect match with their new
          families. Our goal is not just to find homes for cats, but to create
          lasting, loving bonds between cats and their adoptive families.
        </p>
      </div>

      {/* Our History */}
      <div style={{ marginTop: '3rem' }}>
        <h3>📖 Our History</h3>
        <p>
          Purrfect Adoption was founded in 2015 by a group of passionate cat
          lovers who saw a need in the community. What started as a small
          initiative to help rescue cats has grown into a full-fledged adoption
          center serving thousands of families.
        </p>
        <p>
          Over the past 9 years, we have successfully matched over 5,000 cats
          with their forever homes. We've expanded our facilities, increased
          our staff, and developed comprehensive programs to ensure the
          well-being of every cat in our care. Our commitment to excellence and
          animal welfare has made us one of the most trusted adoption centers
          in the region.
        </p>
      </div>

      {/* Our Team */}
      <div style={{ marginTop: '3rem' }}>
        <h3>👥 Our Team</h3>
        <p>
          Our dedicated team consists of experienced veterinarians, cat
          behaviorists, adoption counselors, and volunteers who are passionate
          about cats. Each team member plays a crucial role in ensuring that
          every cat receives the best care and attention.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>🏥 Medical Team</h4>
            <p>
              Our veterinary team ensures all cats receive proper health
              screenings, vaccinations, and necessary medical treatments before
              adoption.
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>🧠 Behavioral Team</h4>
            <p>
              Specializing in cat behavior and psychology, our team helps match
              the right cats with the right families based on personality and
              lifestyle.
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>🤝 Support Team</h4>
            <p>
              Our adoption counselors provide guidance throughout the adoption
              process and continue to support families after bringing their new
              cat home.
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>❤️ Care Team</h4>
            <p>
              Our caregivers provide daily attention, feeding, and socialization
              to ensure all cats are happy and healthy while waiting for their
              forever homes.
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>🎓 Training Team</h4>
            <p>
              We offer educational programs to help potential and current cat
              owners understand feline behavior and provide the best care.
            </p>
          </div>

          <div
            style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <h4>🌟 Volunteer Program</h4>
            <p>
              Dedicated volunteers help with socialization, foster care, and
              administrative tasks, making our mission possible.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div style={{ marginTop: '3rem' }}>
        <h3>💎 Our Core Values</h3>
        <ul style={{ lineHeight: '2' }}>
          <li>
            <strong>Compassion:</strong> We treat every cat with kindness and
            respect
          </li>
          <li>
            <strong>Integrity:</strong> We are honest and transparent in all our
            operations
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest standards in
            cat care
          </li>
          <li>
            <strong>Community:</strong> We work together with families to build
            lasting bonds
          </li>
          <li>
            <strong>Advocacy:</strong> We promote cat welfare and responsible
            ownership
          </li>
        </ul>
      </div>
    </section>
  );
}
