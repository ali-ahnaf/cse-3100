import React, { useState } from 'react';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount && donationAmount > 0) {
      alert(`Thank you for your ${donationType === 'one-time' ? 'one-time' : 'monthly'} donation of $${donationAmount}! Your generosity helps us save more cats.`);
      setDonationAmount('');
    }
  };

  return (
    <section className="donate-page">
      <h2>Support Purrfect Adoption</h2>
      <p>
        Your donation helps us provide food, medical care, and shelter to cats in need.
        Every dollar makes a difference in saving lives!
      </p>

      <div className="donate-container">
        <div className="donation-form-section">
          <h3>Make a Donation</h3>
          <form className="donation-form" onSubmit={handleDonate}>
            <div className="form-group">
              <label htmlFor="amount">Donation Amount ($):</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount"
                min="1"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Donation Type:</label>
              <select
                id="type"
                name="type"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
              >
                <option value="one-time">One-Time Donation</option>
                <option value="monthly">Monthly Recurring Donation</option>
              </select>
            </div>

            <div className="quick-amounts">
              <p>Quick amounts:</p>
              <button
                type="button"
                onClick={() => setDonationAmount('25')}
                className="amount-btn"
              >
                $25
              </button>
              <button
                type="button"
                onClick={() => setDonationAmount('50')}
                className="amount-btn"
              >
                $50
              </button>
              <button
                type="button"
                onClick={() => setDonationAmount('100')}
                className="amount-btn"
              >
                $100
              </button>
              <button
                type="button"
                onClick={() => setDonationAmount('250')}
                className="amount-btn"
              >
                $250
              </button>
            </div>

            <button type="submit" className="donate-btn">
              Donate Now
            </button>
          </form>
        </div>

        <div className="impact-section">
          <h3>Your Impact</h3>
          <div className="impact-item">
            <h4>$25</h4>
            <p>Provides food for a cat for a month</p>
          </div>
          <div className="impact-item">
            <h4>$50</h4>
            <p>Covers basic medical checkup and vaccinations</p>
          </div>
          <div className="impact-item">
            <h4>$100</h4>
            <p>Provides shelter and care for a cat for 3 months</p>
          </div>
          <div className="impact-item">
            <h4>$250</h4>
            <p>Helps with emergency medical treatment</p>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h3>Why Your Donation Matters</h3>
        <p>
          At Purrfect Adoption, we rely on generous donations from people like you to continue our mission
          of rescuing, caring for, and rehoming cats. Your contribution directly supports:
        </p>
        <ul>
          <li>Veterinary care and medical treatments</li>
          <li>Food and nutrition for rescue cats</li>
          <li>Safe shelter and comfortable living spaces</li>
          <li>Behavioral training and socialization programs</li>
          <li>Adoption event organization and outreach</li>
        </ul>
      </div>
    </section>
  );
}