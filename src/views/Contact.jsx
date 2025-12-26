export default function Contact() {
  return (
    <div className="container">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Get In Touch</h1>
        <p className="fs-5 text-muted">We'd love to hear from you. Our team is always here to help.</p>
      </div>

      {/* Info Boxes Row */}
      <div className="row g-4 justify-content-center">
        {/* Box 1: Address */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-white rounded-4">
            <div className="mb-3">
              <span style={{ fontSize: '40px' }}>📍</span>
            </div>
            <h3 className="fw-bold h4">Our Office</h3>
            <p className="text-muted">123 Meow Lane, Pet Valley<br />Cat City, CA 90210</p>
          </div>
        </div>

        {/* Box 2: Phone */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-white rounded-4">
            <div className="mb-3">
              <span style={{ fontSize: '40px' }}>📞</span>
            </div>
            <h3 className="fw-bold h4">Phone Number</h3>
            <p className="text-muted">Monday - Friday (9am - 5pm)<br /><strong>+1 (234) 567-890</strong></p>
          </div>
        </div>

        {/* Box 3: Email */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 text-center bg-white rounded-4">
            <div className="mb-3">
              <span style={{ fontSize: '40px' }}>✉️</span>
            </div>
            <h3 className="fw-bold h4">Email Us</h3>
            <p className="text-muted">For general inquiries:<br /><strong>hello@purrfect.com</strong></p>
          </div>
        </div>
      </div>

      {/* Optional: Simple Message Box below */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="bg-primary text-white p-5 rounded-5 text-center shadow-lg">
            <h2 className="fw-bold">Ready to Adopt?</h2>
            <p className="mb-4">Our volunteers are ready to help you find your new best friend.</p>
            <button className="btn btn-light btn-lg rounded-pill fw-bold px-5 text-primary">Message Us on WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}