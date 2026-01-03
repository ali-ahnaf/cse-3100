export default function About() {
  return (
    <section className="text-center mt-4">
      <div className="container">
        <h2 style={{ maxWidth: '70ch', margin: '0.75rem auto', color: '#444' }}>Our Mission</h2>
        <title>Our Mission</title>
        <p style={{ maxWidth: '70ch', margin: '0.75rem auto', color: '#444' }}>
          Purrfect Adoption is a small rescue dedicated to finding loving homes for
          cats and kittens. We carefully screen adopters, provide medical care,
          and give every animal a chance to thrive. Browse our featured and
          available cats — and contact us if you'd like to adopt or volunteer.
        </p>
         <h2 style={{ maxWidth: '70ch', margin: '0.75rem auto', color: '#444' }}>Our History</h2>
        <p style={{ maxWidth: '70ch', margin: '0.75rem auto', color: '#444' }}>
          Purrfect Adoption is a small rescue dedicated to finding loving homes for
          cats and kittens. We carefully screen adopters, provide medical care,
          and give every animal a chance to thrive. Browse our featured and
          available cats — and contact us if you'd like to adopt or volunteer.
        </p>
         <h2 style={{ maxWidth: '70ch', margin: '0.75rem auto', color: '#444' }}>Team Members</h2>
        
        <div className="row g-4" style={{ marginTop: '1rem' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
               
                <div className="cat-img" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#bbb' }}>No photo</span>
                </div>
                <div className="cat-info">
                  <h3 className="h5 mb-1">Team Member {i}</h3>
                  <p className="mb-0">Role: </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
