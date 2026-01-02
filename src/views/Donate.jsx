import React, { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend for processing
    alert(`Thank you for your donation of $${amount} from ${name}! A confirmation has been sent to ${email}.`);
    // Clear form
    setAmount('');
    setName('');
    setEmail('');
    setShowModal(false); // Close modal after submission
  };

  return (
    <section className="text-center mt-4 mb-5">
      <h2>Donate</h2>
      <p>Your generous donation helps us care for our cats and find them loving homes.</p>

      <button
        className="btn mt-2 btn-pink"
        onClick={() => setShowModal(true)}
      >
        Donate Now
      </button>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', transition: 'background-color 0.3s ease' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content about-card-unique p-4">
              <div className="modal-header">
                <h5 className="modal-title">Make a Donation</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="donationAmount" className="form-label">Donation Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="donationAmount"
                      placeholder="e.g., 25"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="donorName" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="donorName"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="donorEmail" className="form-label">Your Email (Optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      id="donorEmail"
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-pink">
                    Submit Donation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
