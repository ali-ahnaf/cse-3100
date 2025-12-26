export default function AboutUs() {
  return (
    <section className="mt-4">
      <div className="container">
        <h2>About us</h2>

        <div className="mt-4">
          <h3>Our mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>

        <div className="mt-4">
          <h3>Our history</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>

        <div className="mt-4">
          <h3>Our team</h3>
          <div className="cats-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="cat-card">
                  {/* image placeholder (blank) */}
                  <div
                    style={{
                      borderRadius: '8px',
                      height: '200px',
                      background: '#f2f2f2',
                      border: '1px dashed #ddd',
                    }}
                  />
                  <div className="cat-info">
                    <h5 className="h5">Bob Doe</h5>
                    <p className="mb-0">Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
