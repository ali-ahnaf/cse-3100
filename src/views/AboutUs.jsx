const AboutUs = () => {
  return (
    <div className="container my-4">
      <h2>Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2>Our history</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2>Our team</h2>
      <div className="d-flex gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border p-2 text-center" style={{ width: "150px" }}>
            <div style={{ height: "100px", backgroundColor: "#eee" }}></div>
            <div className="mt-2">
              <strong>Bob Doe</strong>
              <br />
              Director
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
