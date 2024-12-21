const AboutUs = () => {
    const teamMembers = [
      { name: 'Neuvilette', role: 'Director', image: 'https://upload-os-bbs.hoyolab.com/upload/2024/05/08/238281186/357943075b3e3731ab1d90df0200cd09_3452984893944084843.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70' },
      { name: 'Paimon', role: 'Manager', image: 'https://pbs.twimg.com/media/FBelPsfWUAgVsa0.png:large' },
      { name: 'Hu Tao', role: 'Volunteer Coordinator', image: 'https://i1.sndcdn.com/avatars-1Dy0DdI1N5zhHl1m-h3JkZw-t500x500.jpg' },
    ];
  
    return (
      <div className="container mt-4">
        <h1 style={{ textAlign: 'left', fontSize: '2.5rem' }}>Our Mission</h1>
        <p style={{ fontSize: '1.10rem', textAlign: 'justify' }} className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
  
        <h1 style={{ textAlign: 'left', fontSize: '2.5rem', marginTop: '2rem' }}>Our History</h1>
        <p style={{ fontSize: '1.10rem', textAlign: 'justify' }} className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
  
        <h2 style={{ textAlign: 'left', fontSize: '2rem', marginTop: '2rem' }}>Meet Our Team</h2>
        <div className="row g-4 mt-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid mb-3"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="h5">{member.name}</h3>
                  <p className="text-muted mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  