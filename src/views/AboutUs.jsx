export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-heading">Our mission</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>

        <h2 className="about-heading">Our history</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>

        <h2 className="about-heading">Our team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop)' }}></div>
            <div className="team-info">
              <h3>John Smith</h3>
              <p className="team-role">Director</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop)' }}></div>
            <div className="team-info">
              <h3>Sarah Johnson</h3>
              <p className="team-role">Director</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop)' }}></div>
            <div className="team-info">
              <h3>Michael Brown</h3>
              <p className="team-role">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
