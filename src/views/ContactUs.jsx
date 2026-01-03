import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="container py-5 text-center animate__animated animate__fadeIn">
        <div className="donate-container shadow-sm" style={{ 
          margin: '0 auto', 
          maxWidth: '600px', 
          padding: '60px', 
          border: '1.5px solid #333', 
          borderRadius: '30px' 
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📩</div>
          <h2 className="fw-bold">Message Sent!</h2>
          <p className="text-muted mb-4">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button className="donate-btn" onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-11 col-xl-10">
          
          {/* Main Card Container */}
          <div className="shadow-sm" style={{ 
            border: '1.5px solid #333', 
            borderRadius: '30px',
            backgroundColor: '#fff',
            overflow: 'hidden'
          }}>
            <div className="row g-0">
              
              {/* Left Side: Contact Information (Standard White/Gray) */}
              <div className="col-md-5 p-5 d-flex flex-column justify-content-center" 
                   style={{ backgroundColor: '#fdfdfd', borderRight: '1.5px solid #eee' }}>
                <h2 className="fw-bold mb-5">Contact Info</h2>
                
                <div className="mb-5 d-flex align-items-start gap-3">
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <div>
                    <h6 className="mb-1 fw-bold">Our Shelter</h6>
                    <p className="mb-0 text-muted">123 Kitty Lane, Meowtown, CA 90210</p>
                  </div>
                </div>

                <div className="mb-5 d-flex align-items-start gap-3">
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <h6 className="mb-1 fw-bold">Call Us</h6>
                    <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="mb-5 d-flex align-items-start gap-3">
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <h6 className="mb-1 fw-bold">Email Us</h6>
                    <p className="mb-0 text-muted">hello@purrfect.org</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="small fw-bold text-uppercase tracking-wider text-muted">Adoption Hours</p>
                  <p className="small mb-1">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  <p className="small">Sun: Closed for Cat Naps</p>
                </div>
              </div>

              {/* Right Side: The Form */}
              <div className="col-md-7 p-5">
                <h2 className="fw-bold mb-3">Get in Touch</h2>
                <p className="text-muted mb-5">
                  Have questions? Fill out the form below and we'll be in touch shortly.
                </p>
                
                <form onSubmit={handleSubmit}>
                  {/* Full Name Box */}
                  <div className="mb-4">
                    <label className="form-label fw-bold small">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="John Doe" 
                      required 
                      style={{ borderRadius: '12px', border: '1.5px solid #333', padding: '15px' }} 
                    />
                  </div>

                  {/* Email and Phone Side by Side */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <label className="form-label fw-bold small">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="john@example.com" 
                        required
                        style={{ borderRadius: '12px', border: '1.5px solid #333', padding: '15px' }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="+1 (555) 000-0000" 
                        required
                        style={{ borderRadius: '12px', border: '1.5px solid #333', padding: '15px' }} 
                      />
                    </div>
                  </div>

                  {/* Message Box */}
                  <div className="mb-5">
                    <label className="form-label fw-bold small">Your Message</label>
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="How can we help you and the cats today?" 
                      required
                      style={{ borderRadius: '12px', border: '1.5px solid #333', padding: '15px' }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="donate-btn w-100 py-3 shadow-sm" style={{ fontSize: '1.1rem' }}>
                    Send Message 🐾
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}