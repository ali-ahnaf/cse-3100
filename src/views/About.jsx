export default function About() {
  return (
    <main>
      <h1>Purrfect Adoption</h1>

      <section>
        <h2>Our mission</h2>
        <p>
          Our mission is to rescue, rehabilitate, and rehome cats in need. We are dedicated to finding loving, permanent homes for every cat in our care. Through education, advocacy, and community outreach, we strive to improve the lives of cats and promote responsible pet ownership.
        </p>
      </section>

      <section>
        <h2>Our history</h2>
        <p>
          Founded in 2010, Purrfect Adoption started as a small volunteer group passionate about helping stray and abandoned cats. Over the years, we've grown into a recognized organization that has successfully placed over 5,000 cats into loving homes. Our dedicated team works tirelessly to ensure each cat receives proper medical care, socialization, and the attention they need before adoption.
        </p>
      </section>

      <section>
        <h2>Our team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/adnan.jpg" alt="Adnan" />
            <div className="team-name">Adnan</div>
            <div className="team-role">Director</div>
          </div>
          <div className="team-card">
            <img src="/david.jpg" alt="David" />
            <div className="team-name">David</div>
            <div className="team-role">Director</div>
          </div>
          <div className="team-card">
            <img src="/john.jpg" alt="John" />
            <div className="team-name">John</div>
            <div className="team-role">Director</div>
          </div>
        </div>
      </section>
    </main>
  );
}
