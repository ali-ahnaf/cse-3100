import { useState } from 'react';

export default function Donate() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const presetAmounts = [10, 25, 50, 100, 250];

  const handleAmountClick = (amt) => {
    setAmount(amt.toString());
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData(prev => ({
      ...prev,
      cardNumber: value.slice(0, 19)
    }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({
      ...prev,
      expiry: value.slice(0, 5)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = customAmount || amount;
    
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      alert('Please select or enter a donation amount.');
      return;
    }

    alert(`Thank you for your $${donationAmount} ${donationType} donation! We appreciate your support.`);
    
    // Reset form
    setAmount('');
    setCustomAmount('');
    setFormData({
      name: '',
      email: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
  };

  const donationStats = [
    { value: "$25", label: "Feeds a cat for one week" },
    { value: "$50", label: "Provides veterinary check-up" },
    { value: "$100", label: "Covers vaccination costs" },
    { value: "$250", label: "Sponsors a cat's entire care" }
  ];

  return (
    <div className="donate-page">
      <div className="container py-5">
        
        {/* Hero Section */}
        <div className="donate-hero text-center mb-5">
          <h1 className="donate-title">Support Our Mission</h1>
          <p className="donate-subtitle">
            Your donation helps us rescue, care for, and find loving homes for cats in need.
          </p>
        </div>

        <div className="row">
          
          {/* Left Column - Donation Info & Stats */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="donation-info">
              
              <div className="impact-section mb-5">
                <h3 className="impact-title">Your Impact</h3>
                <div className="impact-stats">
                  {donationStats.map((stat, index) => (
                    <div key={index} className="impact-item">
                      <div className="impact-value">{stat.value}</div>
                      <div className="impact-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="donation-types mb-5">
                <h3 className="types-title">Ways to Give</h3>
                <div className="type-options">
                  <button
                    className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-Time Donation
                  </button>
                  <button
                    className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly Donation
                  </button>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-text">
                  "Thanks to generous donors, we've rescued over 5,000 cats and found them loving homes."
                </div>
                <div className="testimonial-author">- Sarah Johnson, Founder</div>
              </div>

            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="col-lg-7">
            <div className="donation-form-container">
              
              <div className="donation-header mb-4">
                <h2 className="form-title">
                  {donationType === 'monthly' ? 'Monthly Donation' : 'One-Time Donation'}
                </h2>
                <div className="donation-badge">
                  {donationType === 'monthly' ? 'Recurring' : 'Single'}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="donation-form">
                
                {/* Amount Selection */}
                <div className="form-section mb-5">
                  <label className="section-label">Select Amount (USD)</label>
                  <div className="amount-options">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-btn ${amount === amt.toString() ? 'selected' : ''}`}
                        onClick={() => handleAmountClick(amt)}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-amount mt-3">
                    <label className="custom-label">Or enter custom amount:</label>
                    <div className="input-group">
                      <span className="input-icon">$</span>
                      <input
                        type="number"
                        className="custom-input"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="form-section mb-5">
                  <label className="section-label">Your Information</label>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="form-section mb-5">
                  <label className="section-label">Payment Details</label>
                  
                  <div className="mb-3">
                    <label className="input-label">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="form-input"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      required
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="input-label">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        className="form-input"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleExpiryChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="input-label">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        className="form-input"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Security & Submit */}
                <div className="security-info mb-4">
                  <div className="security-icon">🔒</div>
                  <div className="security-text">
                    Your donation is secure and encrypted. We never store your card details.
                  </div>
                </div>

                <button type="submit" className="donate-btn">
                  {donationType === 'monthly' ? (
                    <>
                      Donate ${customAmount || amount || '0'} Monthly
                      <span className="btn-note">Recurring payment</span>
                    </>
                  ) : (
                    `Donate $${customAmount || amount || '0'} Now`
                  )}
                </button>

                <div className="payment-methods mt-3">
                  <div className="method-icons">
                    <span className="method-icon">💳</span>
                    <span className="method-icon">🏦</span>
                    <span className="method-icon">📱</span>
                  </div>
                  <div className="methods-text">
                    We accept all major credit cards and secure payment methods
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* Alternative Donation Methods */}
        <div className="alternative-methods mt-5 pt-5">
          <h3 className="alt-title text-center mb-4">Other Ways to Support</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="alt-card">
                <div className="alt-icon">📦</div>
                <h4 className="alt-card-title">Donate Supplies</h4>
                <p className="alt-card-text">
                  Food, litter, toys, and other supplies are always needed.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="alt-card">
                <div className="alt-icon">🤝</div>
                <h4 className="alt-card-title">Become a Sponsor</h4>
                <p className="alt-card-text">
                  Sponsor a specific cat or become a corporate partner.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="alt-card">
                <div className="alt-icon">📝</div>
                <h4 className="alt-card-title">Leave a Legacy</h4>
                <p className="alt-card-text">
                  Include Purrfect Adoption in your will or estate plans.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}