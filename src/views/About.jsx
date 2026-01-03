export default function About() {
  const teamMembers = ["Alice Smith", "John Doe", "Mary Johnson"];

  return (
    <>
      <h2>About Us
        
      </h2>

      <section style={{ marginBottom: "30px", lineHeight: "1.7" }}>
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to rescue, rehabilitate, and
          rehome cats in need. We strive to provide every cat with a safe,
          loving environment and to connect them with compassionate families
          for a forever home.
        </p>
      </section>

      <section style={{ marginBottom: "30px", lineHeight: "1.7" }}>
        <h3>Our History</h3>
        <p>
          Purrfect Adoption was founded by a group of passionate animal
          advocates who recognized the growing number of stray and abandoned
          cats. Since our inception, we have rescued countless cats, promoting
          adoption and responsible pet ownership across the community.
        </p>
      </section>

      <section style={{ lineHeight: "1.7" }}>
        <h3>Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((name, i) => (
            <div className="team-card" key={i}>
              <h4>{name}</h4>
              <p>Director</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
