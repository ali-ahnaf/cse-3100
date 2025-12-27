import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div style={styles.layout}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          {/* Left side - Title */}
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>
              <Link to="/" style={styles.titleLink}>
                Purrfect Adoption
              </Link>
            </h1>
          </div>
          
          {/* Right side - Navbars */}
          <nav style={styles.nav}>
            <span style={styles.navItem}>
              <Link to="/available-cats" style={styles.navLink}>
                Available cats
              </Link>
            </span>
            <span style={styles.navSpace}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            
            <span style={styles.navItem}>
              <Link to="/contact-us" style={styles.navLink}>
                Contact us
              </Link>
            </span>
            <span style={styles.navSpace}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            
            <span style={styles.navItem}>
              <Link to="/about-us" style={styles.navLink}>
                About us
              </Link>
            </span>
            <span style={styles.navSpace}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            
            <span style={styles.navItem}>
              <Link to="/donate" style={styles.navLink}>
                Donate
              </Link>
            </span>
          </nav>
        </div>
      </header>
      
      <main style={styles.main}>
        <Outlet />
      </main>
      
      <footer style={styles.footer}>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

// Inline styles - Swapped positions
const styles = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'white',
    padding: '20px',
    borderBottom: '2px solid #eee',
    display: 'flex',
    alignItems: 'center'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  titleContainer: {
    flex: 1,
    textAlign: 'left' // Changed to left
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold'
  },
  titleLink: {
    textDecoration: 'none',
    color: '#2c3e50'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end' // Align nav to right
  },
  navItem: {
    display: 'inline-block'
  },
  navSpace: {
    fontSize: '18px',
    color: 'transparent'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: '500',
    padding: '10px 15px',
    display: 'inline-block',
    borderRadius: '4px',
    transition: 'all 0.3s'
  },
  main: {
    flex: 1,
    padding: '30px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    color: '#666',
    borderTop: '1px solid #eee'
  }
};

export default BaseLayout;