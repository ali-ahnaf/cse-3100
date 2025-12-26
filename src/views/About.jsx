export default function About() {
  return (
    <div className="container">
      {/* Top Section: Two Paragraphs and Mission */}
      <div className="row align-items-center mb-5 pb-5">
        <div className="col-md-7">
          <h1 className="display-4 fw-bold mb-4 text-start">Our Mission</h1>
          <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
            At Purrfect Adoption, we believe every cat deserves a warm bed and a loving family. 
            Our journey started with a simple goal: to bridge the gap between abandoned 
            felines and compassionate humans. We work tirelessly to provide medical care, 
            nourishment, and shelter to cats in need.
          </p>
          <p className="fs-5 text-muted" style={{ lineHeight: '1.8' }}>
            We aren't just an adoption agency; we are a community of animal lovers. 
            Through our rigorous vetting process and dedicated volunteer network, 
            we ensure that every adoption is a "purrfect" match for both the cat and the owner. 
            Thank you for helping us change lives, one meow at a time.
          </p>
        </div>
        <div className="col-md-5 text-center">
          {/* A catchy mission image or icon can go here */}
          <div className="p-5 bg-white shadow-sm rounded-5">
             <span style={{fontSize: '100px'}}>🐾</span>
             <h2 className="fw-bold mt-3">100% Love</h2>
          </div>
        </div>
      </div>

      <hr className="my-5 opacity-25" />

      {/* Developer Section: Centered like the 2nd picture */}
      <div className="row justify-content-center text-center mt-5">
        <div className="col-md-6">
          <h2 className="display-6 fw-bold mb-5">Meet the Developer</h2>
          <div className="card border-0 shadow-sm p-4 bg-white rounded-4">
            <div className="d-flex justify-content-center mb-4">
              {/* This uses your 3rd picture placeholder */}
          
<img 
  src="/developer.jpg" 
  alt="Partha" 
  className="rounded-circle border border-4 border-primary shadow"
  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
/>
            </div>
            <h3 className="fw-bold mb-1">Partha</h3>
            <p className="text-primary fw-semibold mb-3">Lead Web Developer</p>
            <p className="text-muted">
              Partha is a passionate developer dedicated to creating technology that 
              makes the world a better place for our furry friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}