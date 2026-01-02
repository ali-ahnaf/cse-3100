const teamMembers = [
    { name: 'Sarah Johnson', role: 'Director' },
    { name: 'Michael Chen', role: 'Director' },
    { name: 'Emily Rodriguez', role: 'Director' },
];

export default function About() {
    return (
        <div className="about-page">
            <section className="about-section">
                <h2>Our mission</h2>
                <p>
                    At Purrfect Adoption, our mission is to rescue, rehabilitate, and rehome cats in need.
                    We believe every cat deserves a loving family and a safe environment. Through our dedicated
                    adoption program, we match cats with families who will cherish them for life.
                </p>
            </section>

            <section className="about-section">
                <h2>Our history</h2>
                <p>
                    Founded in 2020, Purrfect Adoption started as a small community initiative to help stray cats
                    find homes. Over the years, we've grown into a trusted organization, successfully placing hundreds
                    of cats with loving families. Our commitment to animal welfare drives everything we do.
                </p>
            </section>

            <section className="about-section">
                <h2>Our team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-photo"></div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
