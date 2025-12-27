
export default function AboutUs() {
  const team = [
    { name: 'Bob Doe', role: 'Director', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
    { name: 'Jane Smith', role: 'Manager', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' },
    { name: 'Alice Wong', role: 'Vet Surgeon', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  ];

  return (
    <div className="container py-4">
      {/* Section 1: Mission */}
      <section className="about-section mb-5">
        <h3 className="fw-bold border-bottom pb-2">Our mission</h3>
        <p className="text-muted lead">
          Helping our feline friends find their forever homes through dedicated care and community support.
        </p>
      </section>

      {/* Section 2: History */}
      <section className="about-section mb-5">
        <h3 className="fw-bold border-bottom pb-2">Our history</h3>
        <p className="text-muted">
          Founded in 2025, Purrfect Adoption started with just two rescued kittens and a dream. 
          Today, we have helped hundreds of cats find loving families.
        </p>
      </section>

      {/* Section 3: Team Grid */}
      <section>
        <h3 className="fw-bold mb-4">Our team</h3>
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="team-card text-center shadow-sm p-4">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="team-img mb-3" 
                />
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className="text-primary small fw-semibold uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}