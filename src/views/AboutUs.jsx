import { useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Bob Doe', title: 'Director' },
  { name: 'Bob Doe', title: 'Director' },
  { name: 'Bob Doe', title: 'Director' },
];

export default function AboutUs() {
  const [teamWithImages, setTeamWithImages] = useState([]);

  useEffect(() => {
    const fetchTeamImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const team = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index][0].url,
        }));

        setTeamWithImages(team);
      } catch (error) {
        console.error('Error fetching team images:', error);
      }
    };

    fetchTeamImages();
  }, []);

  return (
    <section className="mt-4">
      <h2>About Us</h2>

      {/* Our Mission */}
      <div className="mt-4">
        <h3>Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, lorem nec
          tincidunt tincidunt, sapien justo fermentum nulla.
        </p>
      </div>

      {/* Our History */}
      <div className="mt-4">
        <h3>Our History</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, lorem nec
          tincidunt tincidunt, sapien justo fermentum nulla.
        </p>
      </div>

      {/* Our Team */}
      <div className="mt-4">
        <h3>Our Team</h3>
        <div className="row g-4 mt-2">
          {teamWithImages.map((member, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{member.name}</h3>
                  <p className="mb-0">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}