export default function About() {
  const team = [
    { id: 1, name: 'Ava Thompson', role: 'Founder & Director', bio: 'Cat enthusiast and adoption advocate.' },
    { id: 2, name: 'Ava Thompson', role: 'Founder & Director', bio: 'Cat enthusiast and adoption advocate.' },
    { id: 3, name: 'Ava Thompson', role: 'Founder & Director', bio: 'Cat enthusiast and adoption advocate.' },
  ];

  return (
    <section className="mt-4">
      <h2>About Us</h2>

      <h3>Our Mission</h3>
      <p>We connect loving families with adoptable cats.</p>

      <h3>Our History</h3>
      <p>Founded by cat lovers to make adoption easier and more joyful.</p>

      <h3>Our Team</h3>
      <div className="team" style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {team.map((m) => (
          <div key={m.id} className="team-member" style={{ border: '1px solid #e0e0e0', padding: 12, borderRadius: 6 }}>
            <h4 style={{ margin: '0 0 6px' }}>{m.name}</h4>
            <strong style={{ display: 'block', marginBottom: 6 }}>{m.role}</strong>
            <p style={{ margin: 0 }}>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
