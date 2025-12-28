export default function About() {
  return (
    <section className="mt-4">
      <h2>About Us</h2>

      {/* Mission */}
      <section className="mt-4">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to connect loving families with
          cats in need of a safe and caring home. We believe every cat deserves
          compassion, comfort, and a chance at a happy life.
        </p>
      </section>

      {/* History */}
      <section className="mt-4">
        <h3>Our History</h3>
        <p>
          Founded in 2021, Purrfect Adoption began as a small community effort to
          rescue stray and abandoned cats. Over the years, we have partnered
          with local shelters and volunteers to help hundreds of cats find their
          forever homes.
        </p>
      </section>

      {/* Team */}
      <section className="mt-5">
        <h3>Our Team</h3>

        <div className="cats-container mt-3">
          {[
            { name: 'Bob Doe', role: 'Director' },
            { name: 'Jane Smith', role: 'Adoption Manager' },
            { name: 'Alex Brown', role: 'Volunteer Coordinator' },
          ].map((member, i) => (
            <div key={i} className="cat-card">
              <div
                style={{
                  height: '200px',
                  background: '#e9ecef',
                  borderBottom: '1px solid #ddd',
                }}
              ></div>

              <div className="cat-info">
                <h5 className="mb-1">{member.name}</h5>
                <p className="mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
