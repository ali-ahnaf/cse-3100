import React from "react";

const teamMembers = [
  {
    name: "Bob Doe",
    role: "Director",

    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Bob Doe",
    role: "Director",

    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Bob Doe",
    role: "Director",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
];

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <Section title="Our mission">
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
        </p>
      </Section>

      <Section title="Our history">
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
        </p>
      </Section>

      <Section title="Our team">
        <div style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img
                src={member.image}
                alt={member.name}
                style={styles.teamImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/120x120/0066cc/ffffff?text=Team";
                }}
              />
              <div style={styles.teamInfo}>
                <div style={styles.teamName}>{member.name}</div>
                <div style={styles.teamRole}>{member.role}</div>
                <div style={styles.teamDescription}>{member.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#000",
    textAlign: "left",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "10px",
    color: "#333",
  },
  teamContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    overflowX: "auto", // allows horizontal scroll on small screens
    gap: "20px",
  },
  teamCard: {
    flex: "0 0 30%", // fixed width so all 3 fit in a row
    textAlign: "center",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  teamImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "3px solid #0066cc",
  },
  teamInfo: {
    textAlign: "center",
  },
  teamName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "5px",
  },
  teamRole: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  teamDescription: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.4",
  },
};

export default AboutUs;
