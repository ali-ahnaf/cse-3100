export default function ContactUs() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Visit Us</h3>
              <p className="card-text">
                <strong>Address:</strong><br />
                123 Cat Street<br />
                Meowington, CT 12345<br />
                United States
              </p>
              <p className="card-text">
                <strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Get in Touch</h4>
              <p className="card-text">
                <strong>Email:</strong><br />
                purrfectadopt@gmail.com
              </p>
              <p className="card-text">
                <strong>Phone:</strong><br />
                +880 1356789345
              </p>
              <p className="card-text">
                <strong>Emergency:</strong><br />
                +880 1534234534 (24/7)
              </p>
              <p className="card-text">
                <strong>Adoption Inquiries:</strong><br />
                applications@purrfectadoption.org
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body text-center">
              <h5>Follow Us</h5>
              <p className="mb-0">
                📷 Instagram: @purrfect_adoption<br />
                👍 Facebook: /PurrfectAdoption<br />
                🐦 Twitter: @PurrfectAdopt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}