export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      designation: "Lead Veterinarian",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      
    },
    {
      name: "Michael Chen",
      designation: "Animal Behaviorist",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      
    }
   
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">About Purrfect Adoption</h1>
      
      {/* Main Content Card */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-5">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                Purrfect Adoption is dedicated to finding loving forever homes for abandoned 
                and rescued cats. We believe every cat deserves a safe, caring environment.
              </p>
              
              <h3 className="mt-4">Our History</h3>
              <p className="card-text">
                We rescued 100+ abandoned and stray cats, provided medical care and rehabilitation, 
                matched cats with compatible families, and educated about responsible pet ownership.
              </p>
              
              <h3 className="mt-4">Our Team</h3>
              <p className="mb-4">
                Our team consists of veterinary professionals, animal behaviorists, 
                and passionate volunteers who work tirelessly for feline welfare.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Cards Section - OUTSIDE the main card */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h3 className="text-center mb-4">Meet Our Team</h3>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center border-0 shadow-sm">
                  <div className="card-body">
                    <img 
                      src={member.photo} 
                      className="rounded-circle mb-3" 
                      alt={member.name}
                      style={{ 
                        width: '150px', 
                        height: '150px', 
                        objectFit: 'cover',
                        border: '3px solid #f8f9fa'
                      }}
                    />
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-primary fw-bold">{member.designation}</p>
                    <p className="card-text">
                      <small>{member.description}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}