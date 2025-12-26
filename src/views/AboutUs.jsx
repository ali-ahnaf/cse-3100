import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Bob Doe', role: 'Director', image: '' },
    { name: 'Jao Rob', role: 'Director', image: '' },
    { name: 'Lieonel Messi', role: 'Director', image: '' },
  ]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() =>
            fetch('https://randomuser.me/api/').then((res) => res.json())
          )
        );
        const membersWithImages = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index].results[0].picture.large,
        }));
        setTeamMembers(membersWithImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="about-us-page">
      <div className="about-section">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="about-section">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="about-section">
        <h2>Our team</h2>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-image">
                {member.image && <img src={member.image} alt={member.name} />}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
