const AboutUs = () => {
  return (
    <section className="container mt-4">
      <h2 className="mb-3">Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="mb-3 mt-5">Our history</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="mb-3 mt-5">Our team</h2>
      <div className="row g-4">
        {/* Member 1 */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0', // Placeholder background
                margin: '0 auto',
              }}
            ></div>
            <div>
              <h5 className="mb-1">Jeff the land shark</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
        {/* Member 2 */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0', // Placeholder background
                margin: '0 auto',
              }}
            ></div>
            <div>
              <h5 className="mb-1">Hela goddess of death</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
        {/* Member 3 */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0', // Placeholder background
                margin: '0 auto',
              }}
            ></div>
            <div>
              <h5 className="mb-1">Asap Rocky</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
