export default function AboutUs() {
  const teamMembers = [
    { name: 'Bob Doe', position: 'Director' },
    { name: 'Alice', position: 'Manager' },
    { name: 'Sofia', position: 'Volunteer Coordinator' },
  ];

  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>

      <div className="about-section mt-4">
        <h3>Our Mission</h3>
        <p>
          Purrfect Adoption is dedicated to finding loving homes for cats in need.
          Our mission is to ensure every cat receives the care, love, and forever
          home they deserve.
        </p>

        <h3>Our History</h3>
        <p>
          Since 2015, we have worked with shelters and volunteers across Bangladesh
          to rescue, rehabilitate, and rehome cats. Over the years, we have helped
          hundreds of cats find their forever families.
        </p>

        <h3>Our Team</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              style={{
                width: '180px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h5>{member.name}</h5>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
