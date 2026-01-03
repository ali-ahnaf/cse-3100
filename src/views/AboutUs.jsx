import { useEffect, useState } from "react";

export default function AboutUs() {
  const [teamPhotos, setTeamPhotos] = useState([]);
  
  const teamMembers = [
    { name: "Sarah Johnson", title: "Director" },
    { name: "Mike Chen", title: "Veterinarian" },
    { name: "Emma Wilson", title: "Adoption Coordinator" },
  ];

  useEffect(() => {
    const avatarUrls = teamMembers.map((member, index) => {
      const randomSeed = Math.floor(Math.random() * 1000); 
      return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}_${randomSeed}&backgroundColor=ffdfbf`;
    });
    setTeamPhotos(avatarUrls);
  }, []);

  return (
    <div className="p-4">
      <div style={{ marginTop: "0rem", marginBottom: "4rem" }}>
        <h3>Our Mission</h3>
        <p style={{ maxWidth: "600px", marginTop: "1.5rem" }}>
          At Purrfect Adoption, our mission is to find loving forever homes for
          every cat in our care. We believe every cat deserves a chance at
          happiness.
        </p>
      </div>

      <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <h3>Our History</h3>
        <p style={{ maxWidth: "600px", marginTop: "1.5rem" }}>
          Founded in 2020, we've successfully adopted over 5,000 cats into
          loving families. What started as a small shelter has grown into a
          community-focused adoption center.
        </p>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h3>Our Team</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '2rem',
          maxWidth: '900px' 
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="cat-card h-100">
              <div 
                style={{
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {teamPhotos[index] ? (
                  <img 
                    src={teamPhotos[index]} 
                    alt={member.name}
                    style={{
                      width: '80%',
                      height: '80%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <span style={{ color: '#666', fontStyle: 'italic' }}>
                    Loading...
                  </span>
                )}
              </div>
              <div className="cat-info">
                <h4 className="h5 mb-2">{member.name}</h4>
                <p className="mb-0">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}