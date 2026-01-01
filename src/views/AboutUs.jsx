import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

export default function AboutUs() {
  const teamMembers = [
    { name: 'Bob Doe', role: 'Director', image: image1 },
    { name: 'Bob Doe', role: 'Director', image: image2 },
    { name: 'Bob Doe', role: 'Director', image: image3 },
  ];

  return (
    <div className="about-us-page">
      <section className="about-section">
        <h2>Our mission</h2>
        <p>
          To help rescued pets find safe, loving, and forever homes while promoting responsible pet adoption and care.
        </p>
      </section>

      <section className="about-section">
        <h2>Our history</h2>
        <p>
          Founded with a love for animals, we started by helping rescued pets find homes and have grown into a trusted adoption platform connecting pets with caring families.
        </p>
      </section>

      <section className="about-section">
        <h2>Our team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-photo" />
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
