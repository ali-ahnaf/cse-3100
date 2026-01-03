export default function AboutUs() {
  return (
    <section
      className="about-section"
      style={{ backgroundColor: '#fffdf7', color: '#333', padding: '3rem 0' }}
    >
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Our Mission */}
        <h2 className="about-heading" style={{ color: '#b66e41', marginBottom: '1rem' }}>
          Our Mission
        </h2>
        <p className="about-text" style={{ lineHeight: '1.8rem', marginBottom: '2rem' }}>
          At Purrfect Adoption, our mission is to connect loving families with cats in need of
          forever homes. We strive to ensure that every cat is treated with care, respect,
          and compassion, and we aim to educate our community about responsible pet ownership
          and animal welfare.
        </p>

        {/* Our History */}
        <h2 className="about-heading" style={{ color: '#b66e41', marginBottom: '1rem' }}>
          Our History
        </h2>
        <p className="about-text" style={{ lineHeight: '1.8rem', marginBottom: '2rem' }}>
          Founded in 2015, Purrfect Adoption began as a small group of volunteers rescuing stray
          and abandoned cats. Over the years, we have expanded into multiple shelters and foster
          programs, successfully rehoming hundreds of cats while building a strong network of
          compassionate caretakers.
        </p>

        {/* Our Team */}
        <h2 className="about-heading" style={{ color: '#b66e41', marginBottom: '1rem' }}>
          Our Team
        </h2>
        <div
          className="team-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {/* John Smith */}
          <div
            className="team-card"
            style={{
              backgroundColor: '#fffefc',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              width: '220px',
            }}
          >
            <div
              className="team-photo"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '220px',
              }}
            ></div>
            <div className="team-info" style={{ padding: '1rem', textAlign: 'center' }}>
              <h3>John Smith</h3>
              <p className="team-role">Director</p>
            </div>
          </div>

          {/* Sarah Johnson - Female */}
          <div
            className="team-card"
            style={{
              backgroundColor: '#fffefc',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              width: '220px',
            }}
          >
            <div
              className="team-photo"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '220px',
              }}
            ></div>
            <div className="team-info" style={{ padding: '1rem', textAlign: 'center' }}>
              <h3>Sarah Johnson</h3>
              <p className="team-role">Director</p>
            </div>
          </div>

          {/* Michael Brown */}
          <div
            className="team-card"
            style={{
              backgroundColor: '#fffefc',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              width: '220px',
            }}
          >
            <div
              className="team-photo"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '220px',
              }}
            ></div>
            <div className="team-info" style={{ padding: '1rem', textAlign: 'center' }}>
              <h3>Michael Brown</h3>
              <p className="team-role">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
