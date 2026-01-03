import { useState } from 'react';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('$25');
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const amounts = [
    { label: '$10', impact: 'Feeds a cat for a week' },
    { label: '$25', impact: 'Vaccinations for one kitten' },
    { label: '$50', impact: 'Spay/Neuter surgery' },
    { label: '$100', impact: 'Emergency medical care' },
    { label: 'Custom', impact: 'Any amount helps!' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-5 text-center">
        <div className="donate-container shadow-sm" style={{ margin: '0 auto', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '4rem' }}>😻</h1>
          <h2 className="mb-3">You're a Life-Saver!</h2>
          <p className="mb-4">Your gift of {selectedAmount === 'Custom' ? `$${customAmount}` : selectedAmount} is making a real difference. We've sent a tax receipt to your email.</p>
          <button className="donate-btn" onClick={() => setSubmitted(false)}>Make Another Gift</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="donate-container shadow-sm" style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '40px', 
        border: '1.5px solid #333', 
        borderRadius: '25px',
        backgroundColor: '#fff'
      }}>
        <div className="text-center mb-5">
          <h1 className="display-6 fw-bold">Support Our Mission 🐾</h1>
          <p className="text-muted">Help us provide a second chance for cats in need.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Amount Selection with Impact Labels */}
          <div className="mb-5">
            <label className="fw-bold mb-3 d-block text-center">Select Donation Amount</label>
            <div className="row g-2 justify-content-center">
              {amounts.map(amt => (
                <div key={amt.label} className="col-6 col-md-4">
                  <button
                    type="button"
                    onClick={() => setSelectedAmount(amt.label)}
                    className="btn w-100 h-100 py-3 d-flex flex-column align-items-center"
                    style={{
                      borderRadius: '15px',
                      border: '1.5px solid #333',
                      backgroundColor: selectedAmount === amt.label ? '#add8e6' : 'white',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span className="fw-bold fs-5">{amt.label}</span>
                    <span className="small opacity-75 text-center" style={{ fontSize: '0.7rem' }}>{amt.impact}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {selectedAmount === 'Custom' && (
            <div className="mb-4 animate__animated animate__fadeIn">
              <div className="input-group">
                <span className="input-group-text" style={{ border: '1.5px solid #333', borderRadius: '10px 0 0 10px', background: '#f8f9fa' }}>$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="form-control"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{ border: '1.5px solid #333', borderRadius: '0 10px 10px 0', padding: '12px' }}
                  required
                />
              </div>
            </div>
          )}

          {/* Secure Donor Form */}
          <div className="bg-light p-4 mb-4" style={{ borderRadius: '20px', border: '1px solid #eee' }}>
            <h5 className="mb-4 border-bottom pb-2">Donor Information</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First Name" required style={{ borderRadius: '8px' }} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last Name" required style={{ borderRadius: '8px' }} />
              </div>
              <div className="col-12">
                <input type="email" className="form-control" placeholder="Email for Receipt" required style={{ borderRadius: '8px' }} />
              </div>
            </div>
          </div>

          {/* Payment Accessories */}
          <div className="p-4 mb-4" style={{ backgroundColor: '#fff', borderRadius: '20px', border: '2px dashed #add8e6' }}>
            <h5 className="mb-3">Payment Details</h5>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Card Number" required style={{ borderRadius: '8px' }} />
            </div>
            <div className="row g-2">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="MM/YY" required style={{ borderRadius: '8px' }} />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="CVC" required style={{ borderRadius: '8px' }} />
              </div>
            </div>
          </div>

          <button type="submit" className="donate-btn w-100 py-3 shadow" style={{ fontSize: '1.25rem' }}>
            Complete Donation {selectedAmount === 'Custom' ? (customAmount && `$${customAmount}`) : selectedAmount}
          </button>
        </form>

        <div className="d-flex justify-content-center align-items-center mt-4 gap-3 text-muted small">
          <span>🔒 Secure Checkout</span>
          <span>•</span>
          <span>💖 100% Goes to Cats</span>
        </div>
      </div>
    </div>
  );
}