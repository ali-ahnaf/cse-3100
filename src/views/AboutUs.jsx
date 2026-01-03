import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';

export default function AboutUs() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4">About Us</h1>

      <section className="mb-5">
        <h2 className="h3 mb-3">Our Mission</h2>
        <p className="lead">We are dedicated to finding loving forever homes for cats in need. Every cat deserves a chance at a happy life.</p>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Our History</h2>
        <p className="lead">Founded in 2010, Purrfect Adoption has helped over 2,000 cats find their perfect families.</p>
      </section>

      <section>
        <h2 className="h3 mb-4 text-center">Our Team</h2>
        <div className="row g-4">
          <div className="col-md-4 text-center">
            <img src={team1} alt="Team Member" className="rounded-circle mb-3" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
            <h5>Jane Doe</h5>
            <p className="text-muted">Director</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={team2} alt="Team Member" className="rounded-circle mb-3" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
            <h5>John Smith</h5>
            <p className="text-muted">Veterinarian</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={team3} alt="Team Member" className="rounded-circle mb-3" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
            <h5>Sarah Lee</h5>
            <p className="text-muted">Adoption Coordinator</p>
          </div>
        </div>
      </section>
    </div>
  );
}