import ashPhoto from '../assets/ash3.jpg';
import arkoPhoto from '../assets/arko.jpg';
import riantoPhoto from '../assets/Rio.jpg';
import taishaPhoto from '../assets/Taisha3.jpg';

export default function AboutUs() {
  const teamMembers = [
    { name: 'Ash', photo: ashPhoto },
    { name: 'Arko', photo: arkoPhoto },
    { name: 'Rianto', photo: riantoPhoto },
    { name: 'Taisha', photo: taishaPhoto }
  ];

  return (
    <section className="page-section">
      <h2>About Us</h2>
      <p> <h3>Our Mission</h3>
        Welcome to Purrfect Adoption! We are passionate about connecting
        adorable cats with loving homes. Our mission is to make sure every
        cat finds a safe, happy, and forever family.
      </p>
      <p> <h3>Our History</h3>
        Our team works tirelessly to care for cats in need, provide
        information to adopters, and ensure the adoption process is smooth
        and joyful for both pets and humans.
      </p>

      {/* Our Team */}
      <h3 style={{ marginTop: '2rem', textAlign: 'center' }}>Meet Our Team</h3>
      <div className="team-row">
        {teamMembers.map((member, i) => (
          <div key={i} className="team-member">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
