import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
    // Clear form
    setName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>Get in touch with us. We'd love to hear from you!</p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card about-card-unique p-4">
              <div className="card-body">
                <h3 className="card-title mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="contactName" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactPhone" className="form-label">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contactPhone"
                      placeholder="e.g., 123-456-7890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactMessage" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      rows="5"
                      placeholder="Your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-pink">
                    Send Message
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
