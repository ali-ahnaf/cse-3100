export default function AboutUs() {
  const teamMembers = [
    { name: 'Bob Doe', role: 'Founder' },
    { name: 'Buster', role: 'Veterinarian' },
    { name: 'Alice Smith', role: 'Adoption Specialist' },
    { name: 'Charlie Brown', role: 'Care Manager' },
    { name: 'Diana Prince', role: 'Volunteer Coordinator' },
    { name: 'Edward Jones', role: 'Facility Manager' },
  ];

  return (
    <section className="text-center">
      <h2>About us</h2>
      <div className="card">
        <h3>Our mission</h3>
              <p>
                  To rescue, rehabilitate, and rehome cats in need while promoting responsible pet ownership
                  through education and community outreach. We believe every cat deserves a safe, loving home
                  and work tirelessly to make that a reality.
              </p>

        <h3>Our history</h3>
              <p>
                  Purrfect Adoption started as a small foster-based rescue. Over the years, we've grown into a full-service adoption center,
                  successfully placing over 1,000 cats into forever homes and becoming a trusted
                  resource for cat adoption in our community.
              </p>

        <h3>Our team</h3>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-member-box">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}