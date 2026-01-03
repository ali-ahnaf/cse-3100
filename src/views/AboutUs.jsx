import member1 from '../assets/team/member1.jpg';
import member2 from '../assets/team/member2.jpg';
import member3 from '../assets/team/member3.jpg';

const team = [
  {
    name: 'Bob Doe',
    role: 'Director',
    image: member1
  },
  {
    name: 'Jane Smith',
    role: 'Director',
    image: member2
  },
  {
    name: 'John Wilson',
    role: 'Director',
    image: member3
  }
];

export default function AboutUs() {
  return (
    <div className="page-container">
      <h2 className="page-title text-center">About Us</h2>

      <div className="about-content">
        {/* Our Story */}
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Purrfect Adoption was founded in 2020 with a simple mission: to find loving homes 
            for cats in need. What started as a small foster network has grown into a 
            comprehensive adoption center serving our entire community.
          </p>
          <p>
            We believe that every cat deserves a second chance at a happy, healthy life. 
            Through dedication, compassion, and hard work, we've created a safe haven where 
            cats can thrive while waiting for their forever families.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement">
          Our mission is to rescue, rehabilitate, and rehome cats while educating the 
          community about responsible pet ownership and the importance of adoption over 
          purchasing from breeders.
        </div>

        {/* Stats */}
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Cats Adopted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Volunteers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Years Serving</span>
          </div>
        </div>

        {/* What We Do */}
        <div className="about-section">
          <h3>What We Do</h3>
          <p>
            Our dedicated team of volunteers provides comprehensive care for every cat that 
            comes through our doors. This includes:  
          </p>
          <ul style={{ color: '#555', lineHeight: '2', marginLeft: '2rem' }}>
            <li>Medical examinations and vaccinations</li>
            <li>Spaying and neutering services</li>
            <li>Behavioral assessment and socialization</li>
            <li>Proper nutrition and daily care</li>
            <li>Adoption counseling and support</li>
          </ul>
        </div>

        {/* Why Adopt */}
        <div className="about-section">
          <h3>Why Adopt? </h3>
          <p>
            Adopting a cat from Purrfect Adoption means giving a deserving animal a second 
            chance at life. All our cats are health-checked, vaccinated, and ready to become 
            part of your family.  Plus, you'll have our ongoing support throughout your cat's life.  
          </p>
          <p>
            By choosing adoption, you're not just saving one life—you're making room for us 
            to rescue another cat in need. 
          </p>
        </div>

        {/* Meet Our Team */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-container">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-member-name">{member.name}</div>
                <div className="team-member-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}