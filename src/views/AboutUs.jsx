import { useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Bob Doe', role: 'Director' },
  { name: 'Jane Smith', role: 'Adoption Coordinator' },
  { name: 'Mike Johnson', role: 'Veterinarian' },
];

export default function AboutUs() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeamImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        const teamWithImages = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index][0].url,
        }));

        setTeam(teamWithImages);
      } catch (error) {
        console.error('Error fetching team images:', error);
      }
    };

    fetchTeamImages();
  }, []);

  return (
    <section className="container mt-4">
      <h2>About Purrfect Adoption</h2>
      
      <div className="mt-4">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, we are dedicated to connecting loving cats with
          caring families. Our mission is to ensure every feline finds their
          forever home where they will be cherished and cared for.
        </p>
      </div>

      <div className="mt-4">
        <h3>Who We Are</h3>
        <p>
          Founded in 2020, Purrfect Adoption has helped over 500 cats find their
          perfect match. We work with local shelters and rescue organizations to
          provide a safe haven for cats in need and facilitate successful
          adoptions.
        </p>
        <p>
          Our team of dedicated volunteers and staff members are passionate about
          animal welfare and work tirelessly to ensure each cat receives proper
          care, medical attention, and love while waiting for their new family.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="mt-5">
        <h3>Our Team</h3>
        <div className="row g-4 mt-2">
          {team.map((member, i) => (
            <div key={i} className="col-md-4">
              <div className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid"
                  style={{
                    borderRadius: '8px',
                    height: '250px',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <div className="team-info">
                  <h4 className="h5 mb-1">{member.name}</h4>
                  <p className="mb-0 text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3>Our Services</h3>
        <ul>
          <li>Cat adoption services with thorough screening process</li>
          <li>Pre-adoption counseling and support</li>
          <li>Post-adoption follow-up care</li>
          <li>Educational resources for new cat owners</li>
          <li>Spay/neuter programs</li>
          <li>Vaccination and health check services</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3>Why Choose Us?</h3>
        <p>
          We believe in responsible pet ownership and take great care in matching
          cats with the right families. Each cat in our care is:
        </p>
        <ul>
          <li>Fully vaccinated and health-checked</li>
          <li>Spayed or neutered</li>
          <li>Assessed for temperament and behavior</li>
          <li>Given lots of love and socialization</li>
        </ul>
      </div>

      <div className="mt-4 mb-4">
        <h3>Get Involved</h3>
        <p>
          Whether you're looking to adopt, volunteer, or support our cause
          through donations, we'd love to hear from you. Together, we can make a
          difference in the lives of cats in need.
        </p>
      </div>
    </section>
  );
}