export default function AboutUs() {
  const teamMembers = [
    { name: 'Sarah Johnson', title: 'Director' },
    { name: 'Mike Chen', title: 'Veterinarian' },
    { name: 'Emma Wilson', title: 'Adoption Coordinator' },
    { name: 'David Lee', title: 'Volunteer Manager' },
  ];

  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>
      
      <div className="mt-5">
        <h3>Our Mission</h3>
        <p className="mx-auto" style={{ maxWidth: '600px' }}>
          At Purrfect Adoption, our mission is to find loving forever homes for every cat in our care. 
          We believe every cat deserves a chance at happiness.
        </p>
      </div>

      <div className="mt-5">
        <h3>Our History</h3>
        <p className="mx-auto" style={{ maxWidth: '600px' }}>
          Founded in 2010, we've successfully adopted over 5,000 cats into loving families. 
          What started as a small shelter has grown into a community-focused adoption center.
        </p>
      </div>

      <div className="mt-5">
        <h3>Our Team</h3>
        <div className="row g-4 mt-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3">
              <div className="cat-card">
                <div className="cat-info">
                  <h4 className="h5">{member.name}</h4>
                  <p className="mb-0">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}