import { useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Bob Doe', role: 'Director' },
  { name: 'Bob Doe', role: 'Director' },
  { name: 'Bob Doe', role: 'Director' },
];

export default function About() {
  const [teamImages, setTeamImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        teamMembers.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      setTeamImages(
        responses.map(res => res[0].url)
      );
    };

    fetchImages();
  }, []);

  return (
    <>
      <h2>Our mission</h2>
      <p>
        We help cats find safe, loving homes by making adoption simple, transparent, and friendly for everyone. From rescue to rehoming, we focus on care, trust, and responsible matching.
      </p>

      <h2 style={{ marginTop: '30px' }}>Our history</h2>
      <p>
        Purrfect Adoption started as a small local effort and grew into a community-driven platform that supports adopters and fosters. We work with volunteers to help cats get the second chance they deserve.
      </p>

      <h2 style={{ marginTop: '30px' }}>Our team</h2>
      
      <div className="cats-grid">
        {teamMembers.map((member, i) => (
          <div key={i} className="cat-card">
            {teamImages[i] && <img src={teamImages[i]} alt={member.name} />}
            <div className="cat-info">
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}