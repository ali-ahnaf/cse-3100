import { useEffect, useState } from 'react';

const directors = [
  {
    name: 'Alan Becker',
    title: 'Founder & Director',
    bio: 'Alan leads rescue operations and coordinates adoptions.',
  },
  {
    name: 'Ked Shiron',
    title: 'Operations Director',
    bio: 'Ked manages the day-to-day shelter operations and logistics.',
  },
  {
    name: 'Justin Lieber',
    title: 'Volunteer Coordinator',
    bio: 'Justin organizes volunteer activities and community outreach.',
  },
];

export default function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchPortraits = async () => {
      try {
        const results = await Promise.all(
          directors.map(() =>
            fetch('https://randomuser.me/api/').then((r) => r.json())
          )
        );

        const withImages = directors.map((d, i) => ({
          ...d,
          image: results[i]?.results?.[0]?.picture?.large || '',
        }));

        setTeam(withImages);
      } catch (err) {
        console.error('Error fetching director portraits:', err);
        setTeam(directors);
      }
    };

    fetchPortraits();
  }, []);

  return (
    <section className="mt-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
      <h3>Our mission</h3>
      <p>
        Purrfect Adoption is a small non-profit focused on finding loving
        homes for cats. We rescue, rehabilitate and rehome cats of all ages
        and breeds. 
      </p>

      <h3>Our history</h3>
      <p>
        We believe every cat deserves a safe and loving home. Our volunteers
        provide care, vetting and adoption support to ensure every adoption is
        a great match.
      </p>

      <h3 className="mt-4">Our team</h3>
      <div className="directors-container mt-2">
        {team.map((d, i) => (
          <div key={i} className="director-card">
            <img
              src={d.image}
              alt={d.name}
              className="director-photo"
              loading="lazy"
            />
            <div className="director-info">
              <h4 className="mb-1">{d.name}</h4>
              <p className="muted mb-1">{d.title}</p>
              <p className="small">{d.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
