import { useEffect, useState } from 'react';

function About() {
  const [teamCats, setTeamCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const teamMembers = [
    { name: 'Milo', role: 'Founder' },
    { name: 'Luna', role: 'Adoption Manager' },
    { name: 'Simba', role: 'Care Specialist' },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
              res.json()
            )
          )
        );

        const catsWithImages = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index][0]?.url || '',
        }));

        setTeamCats(catsWithImages);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="about-page" style={{ padding: '40px' }}>
      {/* Our Mission */}
      <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Our Mission</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Our mission is simple — to help loving cats find safe and happy homes.
        We believe every cat deserves care, comfort, and a family that truly
        loves them.
      </p>

      {/* Our History */}
      <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Our History</h2>
      <p style={{ textAlign: 'center', marginBottom: '50px' }}>
        Purrfect Adoption started as a small initiative by cat lovers. Over time, we have
        helped many cats get adopted and begin new lives with caring families.
      </p>

      {/* Our Team */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading team photos...</p>
      ) : (
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // 👈 exactly home page style
            gap: '20px',
            padding: '0 40px',
          }}
        >
          {teamCats.map((member, index) => (
            <div
              key={index}
              className="team-card"
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div
                className="team-info"
                style={{
                  textAlign: 'center',
                  marginTop: '6px',
                  fontSize: '14px',
                }}
              >
                <strong style={{ fontSize: '14px' }}>{member.name}</strong>
                <p style={{ fontSize: '13px', margin: 0 }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
