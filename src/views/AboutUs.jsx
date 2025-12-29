function AboutUs() {
  return (
    <section className="mt-4">
      <h2>Our mission</h2>
      <p>
        Our mission is to rescue homeless cats and provide them with care and protection.
        We aim to find safe, loving homes through responsible adoption.
        By promoting awareness, we work to reduce stray cat suffering and overpopulation.
      </p>

      <h2 className="mt-5">Our history</h2>
      <p>
        This page was created to help homeless and abandoned cats find loving homes.
        It started as a small effort to share rescue stories and adoption posts.
        Over time, it grew into a trusted space connecting cats with caring adopters.
      </p>

      <h2 className="mt-5">Our team</h2>
      <div className="mt-3 row g-4">
        <div className="col-md-4">
          <div className="cat-card" style={{ height: 'auto', padding: '20px' }}>
            <div className="cat-info">
              <h3 className="h5 mb-1">Naima</h3>
              <p className="mb-0">Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cat-card" style={{ height: 'auto', padding: '20px' }}>
            <div className="cat-info">
              <h3 className="h5 mb-1">Nadia</h3>
              <p className="mb-0">Assistant Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cat-card" style={{ height: 'auto', padding: '20px' }}>
            <div className="cat-info">
              <h3 className="h5 mb-1">Nabila</h3>
              <p className="mb-0">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;