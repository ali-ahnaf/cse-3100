export default function About() {
  return (
    <section className="text-center mt-4">
      <h2 className="about-heading">About Us</h2>
      <p className="welcome-paragraph">
        Purrfect Adoption is a small rescue focused on rehoming cats with loving
        families. We provide medical care, socialization, and foster-to-adopt
        support. Our volunteers work hard to match personalities and lifestyles
        so every adoption is a lasting one.
      </p>

      <div className="mt-4" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
        <h3>🐾 Our Mission</h3>
        <p>
          We believe every cat deserves a safe, loving, and permanent home. Our mission is to rescue, care for, and rehome cats in need while promoting responsible pet ownership and compassion for all animals.
Through community partnerships, education, and dedicated volunteers, we work to give abandoned and vulnerable cats a second chance at life. We focus not only on adoption but also on raising awareness about spaying, neutering, and proper animal care to reduce homelessness.
Every adoption is a promise — a promise to provide love, safety, and a forever family.
        </p>

        <h3>🐱 Our History</h3>
        <p>
         Our journey began with a small group of animal lovers who saw too many cats living without care or shelter. What started as a few rescued cats in temporary homes quickly grew into a community-driven adoption initiative.
Over the years, we have helped hundreds of cats find loving families, expanded our foster network, and built strong relationships with local veterinarians and volunteers. Each success story strengthened our commitment to creating a kinder future for cats.
Today, we continue to grow with the same passion that started it all — one rescue, one adoption, and one happy ending at a time.
        </p>
        <h3>👥 Our Team</h3>
        <p>
          Behind Purrfect Adoption is a dedicated team of directors who share a deep
  love for animals and a commitment to giving every cat a better future.
  Together, they guide our mission, support our volunteers, and ensure every
  adoption is handled with care and responsibility.
        </p>
        <div className="team-grid mt-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem',}}>
  <div className="team-card">
    <h4>Abesh</h4>
    <p>Founder & Director</p>
  </div>

  <div className="team-card">
    <h4>Abesh</h4>
    <p>Operations Director</p>
  </div>

  <div className="team-card">
    <h4>Abesh</h4>
    <p>Adoption & Care Director</p>
  </div>

  <div className="team-card" >
    <h4>Abesh</h4>
    <p>Community Outreach Director</p>
  </div>
</div>
      </div>
    </section>
  );
}
