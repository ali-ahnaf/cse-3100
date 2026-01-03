// src/views/About.jsx
import asmitaPhoto from '../assets/asmita.png';
import arijitPhoto from '../assets/arijit.png';
import utsaPhoto from '../assets/utsa.png';

export default function About() {
  const team = [
    { name: 'Asmita Esha', role: 'Director', photo: asmitaPhoto },
    { name: 'Arijit Paul', role: 'Coordinator', photo: arijitPhoto },
    { name: 'Utsa Ananya', role: 'Volunteer Lead', photo: utsaPhoto },
  ];

  return (
    <section className="about-page">

      <h2>About us</h2>

 <div className="info-section">
     <h3>Our mission</h3>
     <p style={{ maxWidth: 760 }}>
    Purrfect Adoption rescues and rehabilitates cats and finds them loving,
    permanent homes. Our mission is to provide veterinary care, behavioral
    support, and adoption counseling so both the cat and adopter thrive.
     </p>
</div>

<div className="info-section">
  <h3>Our history</h3>
  <p style={{ maxWidth: 760 }}>
    Established by local volunteers, we partner with shelters and clinics to
    rescue cats from high-kill situations and support community-driven
    adoption efforts.
  </p>
</div>


      <div className="team-section">
  <h3>Our team</h3>
    </div>
      <div className="team-grid">
        {team.map((t, i) => (
          <div key={i} className="team-card">
            <img src={t.photo} alt={t.name} className="team-photo" />
            <div className="team-info">
              <strong>{t.name}</strong>
              <div className="muted">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
