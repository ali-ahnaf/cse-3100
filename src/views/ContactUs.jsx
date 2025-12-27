import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section className="contact-us-simple py-5">
      <div className="container">
        {}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">Purrfect Adoption</h1>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <span className="badge bg-primary px-3 py-2">Available with</span>
            <button className="btn btn-outline-primary px-3">Donate</button>
            <button className="btn btn-outline-primary px-3">Contact us</button>
          </div>
        </div>

        {}
        <div className="text-center mb-5">
          <h2 className="h1 fw-bold mb-3">Contact us</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Come from above to work somewhere adaptively. We discover we have been here at work everywhere 
            adapting this document to some parts of our own, regardless of how many the documents are.
          </p>
        </div>

        {}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit} className="simple-contact-form">
                  {}
                  <div className="form-box mb-4">
                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  {}
                  <div className="form-box mb-4">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone number"
                    />
                  </div>
                  
                  {}
                  <div className="form-box mb-5">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                    />
                  </div>
                  
                  {}
                  <div className="submit-button">
                    <button type="submit" className="btn btn-primary btn-lg w-100 py-3">
                      Submit
                    </button>
                  </div>
                </form>
                
                {}
                <div className="text-center mt-5 pt-4 border-top">
                  <p className="text-muted mb-0">
                    <small>Prepared by: Ali Ahref</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}