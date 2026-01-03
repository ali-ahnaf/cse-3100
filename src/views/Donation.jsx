import { useState } from 'react';

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    console.log('Donation submitted:', {
      amount,
      donationType,
      ...formData,
    });
    alert(`Thank you for your ${donationType} donation of ৳${amount}! Your support helps cats across Bangladesh.`);
    
    // Reset form
    setSelectedAmount('');
    setCustomAmount('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mt-4">
      <h1 className="text-center">Support Our Mission</h1>
      <p className="text-center" style={{ maxWidth: '800px', margin: '1rem auto' }}>
        Your generous donation helps us rescue, care for, and find loving homes for stray and abandoned cats across Bangladesh. 
        Every contribution makes a real difference in the lives of our feline friends.
      </p>

      <div className="donation-container">
        <div className="donation-impact">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h3>৳500</h3>
              <p>Provides food for one cat for a month</p>
            </div>
            <div className="impact-item">
              <h3>৳1,000</h3>
              <p>Covers basic veterinary checkup</p>
            </div>
            <div className="impact-item">
              <h3>৳2,500</h3>
              <p>Funds spay/neuter surgery</p>
            </div>
            <div className="impact-item">
              <h3>৳5,000</h3>
              <p>Provides emergency medical care</p>
            </div>
            <div className="impact-item">
              <h3>৳10,000</h3>
              <p>Supports a cat for their entire journey</p>
            </div>
          </div>
        </div>

        <form className="donation-form" onSubmit={handleSubmit}>
          <h2>Make a Donation</h2>
          
          <div className="form-group">
            <label>Donation Type</label>
            <div className="donation-type-selector">
              <button
                type="button"
                className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                onClick={() => setDonationType('one-time')}
              >
                One-Time
              </button>
              <button
                type="button"
                className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                onClick={() => setDonationType('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Select Amount</label>
            <div className="amount-selector">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                  onClick={() => handleAmountClick(amount)}
                >
                  ৳{amount}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="custom-amount">Or Enter Custom Amount</label>
            <input
              type="number"
              id="custom-amount"
              placeholder="Enter amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="donor-name">Name *</label>
            <input
              type="text"
              id="donor-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="donor-email">Email *</label>
            <input
              type="email"
              id="donor-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="donor-message">Message (Optional)</label>
            <textarea
              id="donor-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a message of support..."
              rows="4"
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary btn-donate"
            disabled={!selectedAmount && !customAmount}
          >
            Donate ৳{customAmount || selectedAmount || '0'} {donationType === 'monthly' ? '/month' : ''}
          </button>

          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            🔒 Your donation is secure. All funds support cats in Bangladesh.
          </p>
        </form>

        <div className="other-ways-to-help">
          <h2>Other Ways to Help</h2>
          <div className="help-options">
            <div className="help-option">
              <h3>🏠 Become a Foster</h3>
              <p>Provide temporary care for rescued cats in Dhaka until they find their forever homes</p>
            </div>
            <div className="help-option">
              <h3>🎁 Donate Supplies</h3>
              <p>We accept cat food, toys, litter boxes, beds, and other supplies at our Dhanmondi center</p>
            </div>
            <div className="help-option">
              <h3>⏰ Volunteer</h3>
              <p>Join our team in Dhaka to help with rescue operations, adoption events, and awareness programs</p>
            </div>
            <div className="help-option">
              <h3>🐱 Sponsor a Cat</h3>
              <p>Support a specific rescued cat's care and medical needs until they're adopted by a loving family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
