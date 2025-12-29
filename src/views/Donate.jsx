import { useState } from 'react';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [500, 1500, 3000];

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className="text-center mt-4">
      <h2>Support Our Mission</h2>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
        <p>
          Your generous donation helps us rescue, rehabilitate, and rehome cats in need. 
          Every contribution, no matter the size, makes a real difference in the lives of 
          these wonderful animals. From veterinary care and food to shelter and adoption 
          services, your support enables us to continue our life-saving work.
        </p>

        <div className="donate-section mt-4">
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Choose Your Donation Amount</h3>
          
          <div className="donation-amounts">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                className={`donation-btn ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handlePresetClick(amount)}
              >
                ৳{amount}
              </button>
            ))}
          </div>

          <div className="custom-amount-section">
            <label htmlFor="custom-amount" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Or enter a custom amount (৳):
            </label>
            <input
              id="custom-amount"
              type="number"
              min="1"
              placeholder="Enter amount in Taka"
              value={customAmount}
              onChange={handleCustomChange}
              className="custom-amount-input"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="donate-now-btn">
              Donate Now
            </button>
          </div>

          <div className="donation-info mt-4">
            <h4>Your Impact</h4>
            <ul style={{ lineHeight: '2' }}>
              <li><strong>৳500</strong> - Provides food for a cat for one week</li>
              <li><strong>৳1,500</strong> - Covers basic veterinary check-up</li>
              <li><strong>৳3,000</strong> - Funds vaccinations and deworming</li>
              <li><strong>৳5,000+</strong> - Supports emergency medical care</li>
            </ul>
          </div>

          <div className="donation-note mt-4" style={{ 
            background: 'rgba(230, 126, 34, 0.1)', 
            padding: '1rem', 
            borderRadius: '8px',
            borderLeft: '4px solid var(--color-primary)'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              <strong>Note:</strong> Purrfect Adoption is a registered non-profit organization. 
              Your donation is tax-deductible. You will receive a receipt via email after your donation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
