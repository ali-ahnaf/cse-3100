export default function AboutUs() {
  const team = [
    { name: 'Bob Doe', role: 'Director' },
    { name: 'Bob Doe', role: 'Director' },
    { name: 'Bob Doe', role: 'Director' },
  ];

  return (
    <section className="container mt-4">
      <div className="mb-5">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div className="mb-5">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </div>

      <div>
        <h2>Our team</h2>
        <div className="row g-4 mt-2">
          {team.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-end" style={{ height: '200px' }}>
                  {/* Placeholder for image if needed, mockup shows empty box */}
                </div>
                <div className="card-footer bg-white">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
