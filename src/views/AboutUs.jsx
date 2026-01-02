const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>

      <section style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          We connect loving families with cats who need a forever home.
          Every adoption saves a life and makes room for another rescue.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our History</h2>
        <p>
          Purrfect Adoption started as a small rescue effort and grew into
          a trusted adoption platform for cat lovers.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Team</h2>

        <div style={styles.team}>
          <div style={styles.teamMember}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Bob Doe"
              style={styles.avatar}
            />
            <p><strong>Bob Doe</strong></p>
            <p>Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "15px",
  },
  section: {
    marginBottom: "25px",
  },
  team: {
    display: "flex",
    gap: "20px",
  },
  teamMember: {
    textAlign: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

export default AboutUs;
