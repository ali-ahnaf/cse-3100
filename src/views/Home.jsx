export default function Home() {
  return (
    <>
      {/* Welcome Section */}
      <section className="welcome">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Featured Cats */}
      <section>
        <h3>Featured cats</h3>

        <div className="featured-grid">
          <div className="featured-card">
            <div className="card-box"></div>
            <div className="card-info">
              <strong>Bob Doe</strong>
              <small>Age: 3</small>
            </div>
          </div>

          <div className="featured-card">
            <div className="card-box"></div>
            <div className="card-info">
              <strong>Bob Doe</strong>
              <small>Age: 4</small>
            </div>
          </div>

          <div className="featured-card">
            <div className="card-box"></div>
            <div className="card-info">
              <strong>Bob Doe</strong>
              <small>Age: 2 months</small>
            </div>
          </div>

          <div className="featured-card">
            <div className="card-box"></div>
            <div className="card-info">
              <strong>Bob Doe</strong>
              <small>Age: 2 months</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
