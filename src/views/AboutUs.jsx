export default function AboutUs() {
  return (
    <section
      className="about-section"
      style={{ backgroundColor: '#fffdf7', color: '#333', padding: '3rem 1rem' }}
    >
      <div
        className="container"
        style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}
      >
        {/* Our Mission */}
        <h2
          className="about-heading"
          style={{
            color: '#b66e41',
            marginBottom: '0.5rem', // reduced gap
            fontSize: '2rem',
            fontWeight: '700',
            fontStyle: 'normal', // ensure not italic
            borderBottom: '2px solid #f28c28',
            display: 'inline-block',
            paddingBottom: '0.3rem',
          }}
        >
          Our Mission
        </h2>
        <p
          className="about-text"
          style={{
            lineHeight: '1.5rem',
            marginBottom: '2rem',
            fontSize: '1.05rem',
            fontWeight: '600',
            fontStyle: 'normal', // ensure not italic
          }}
        >
          At Purrfect Adoption, our mission is to connect loving families with cats in need of
          forever homes. We ensure that every cat is treated with care, respect, and compassion,
          while educating our community about responsible pet ownership and animal welfare.
        </p>

        {/* Our History */}
        <h2
          className="about-heading"
          style={{
            color: '#b66e41',
            marginBottom: '0.5rem', // reduced gap
            fontSize: '2rem',
            fontWeight: '700',
            fontStyle: 'normal',
            borderBottom: '2px solid #f28c28',
            display: 'inline-block',
            paddingBottom: '0.3rem',
          }}
        >
          Our History
        </h2>
        <p
          className="about-text"
          style={{
            lineHeight: '1.5rem',
            marginBottom: '2rem',
            fontSize: '1.05rem',
            fontWeight: '600',
            fontStyle: 'normal',
          }}
        >
          Founded in 2015, Purrfect Adoption began as a small volunteer group rescuing stray and
          abandoned cats. Over the years, we have expanded into multiple shelters and foster
          programs, successfully rehoming hundreds of cats while building a strong network of
          compassionate caretakers.
        </p>

        {/* Our Team */}
        <h2
          className="about-heading"
          style={{
            color: '#b66e41',
            marginBottom: '0.5rem', // reduced gap
            fontSize: '2rem',
            fontWeight: '700',
            fontStyle: 'normal',
            borderBottom: '2px solid #f28c28',
            display: 'inline-block',
            paddingBottom: '0.3rem',
          }}
        >
          Our Team
        </h2>

        <div
          className="team-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem', // slightly reduced
            justifyContent: 'center',
            marginTop: '1.5rem',
          }}
        >
          {[
            {
              name: 'Abdullah Al-Mansour',
              role: 'Director',
              photo:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
            },
            {
              name: 'Sarah Khan',
              role: 'Operations Manager',
              photo:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop',
            },
            {
              name: 'Jafor Iqbal',
              role: 'Volunteer Coordinator',
              photo:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
            },
          ].map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                backgroundColor: '#fffefc',
                borderRadius: '12px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '220px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
              }}
            >
              <div
                className="team-photo"
                style={{
                  backgroundImage: `url(${member.photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '220px',
                }}
              ></div>
              <div
                className="team-info"
                style={{
                  padding: '1rem',
                  textAlign: 'center',
                  backgroundColor: '#fffefc',
                }}
              >
                <h3
                  style={{
                    marginBottom: '0.3rem',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    fontStyle: 'normal',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: '#b66e41',
                    fontWeight: '600',
                    margin: 0,
                    fontStyle: 'normal',
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
