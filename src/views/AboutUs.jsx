import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { 
      name: 'Bob Doe', 
      role: 'Director', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' 
    },
    { 
      name: 'Bob Doe', 
      role: 'Director', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' 
    },
    { 
      name: 'Bob Doe', 
      role: 'Director', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' 
    }
  ];

  return (
    <div style={styles.container}>
      {/* Our mission */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our mission</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
        </p>
        
      </div>

      {/* Our history */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our history</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
        </p>
              
          
      </div>

      {/* Our team WITH PICTURES */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our team</h2>
        <div style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <div style={styles.imageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={styles.teamImage}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = 'https://via.placeholder.com/80x80/0066cc/ffffff?text=BD'; // Fallback
                  }}
                />
              </div>
              <div style={styles.teamInfo}>
                <div style={styles.teamName}>{member.name}</div>
                <div style={styles.teamRole}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#000',
    textAlign: 'left'
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px',
    color: '#333'
  },
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    marginTop: '20px'
  },
  teamCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    minWidth: '250px'
  },
  imageContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #0066cc',
    backgroundColor: '#f0f8ff'
  },
  teamImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  teamInfo: {
    textAlign: 'left'
  },
  teamName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#000'
  },
  teamRole: {
    fontSize: '14px',
    color: '#666'
  }
};

export default AboutUs;