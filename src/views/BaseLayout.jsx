import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div style={styles.pageBg}>
      <div style={styles.outerBox}>
        {/* Header */}
        <header style={styles.header}>
          <h2 style={styles.title}>
            <Link to="/" style={styles.titleLink}>
              Purrfect Adoption
            </Link>
          </h2>

          <nav style={styles.nav}>
            <Link to="/available-cats" style={styles.navLink}>
              Available cats
            </Link>

            <Link to="/contact-us" style={styles.navLink}>
              Contact us
            </Link>

            <Link to="/about-us" style={styles.navLink}>
              About us
            </Link>

            <Link to="/donate" style={styles.navLink}>
              Donate
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={styles.main}>
          <Outlet />
        </main>

        {/* Footer */}
        <footer style={styles.footer}>© Copyright 2024</footer>
      </div>
    </div>
  );
};

const styles = {
  pageBg: {
    minHeight: "100vh",
    backgroundColor: "#eee",
    padding: "40px 0",
  },

  outerBox: {
    backgroundColor: "#fff",
    width: "85%",
    maxWidth: "1100px",
    margin: "0 auto",
    border: "2px solid #bbb",
    borderRadius: "12px",
    padding: "30px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },

  title: {
    margin: 0,
    fontWeight: "600",
  },

  titleLink: {
    textDecoration: "none",
    color: "#000",
  },

  nav: {
    display: "flex",
    gap: "30px",
  },

  navLink: {
    textDecoration: "none",
    color: "#000",
    fontSize: "14px",
  },

  main: {
    minHeight: "400px",
  },

  footer: {
    marginTop: "40px",
    fontSize: "14px",
  },
};

export default BaseLayout;
