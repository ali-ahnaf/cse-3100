import React from 'react';

export default function Donate() {
  const donationOptions = [
    { amount: 20, description: 'Helps with food for one cat for a week' },
    { amount: 50, description: 'Provides medical care or vaccination for one cat' },
    { amount: 100, description: 'Supports rescue operations or shelter facilities for cats' },
  ];

  const impactStats = [
    { label: 'Cats Rescued', value: 120 },
    { label: 'Cats Adopted', value: 95 },
    { label: 'Volunteers', value: 15 },
  ];

  return (
    <section style={{ padding: '40px', textAlign: 'center' }}>
      {/* Headline */}
      <h2 style={{ marginBottom: '12px' }}>Support Our Cats</h2>
      <p style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto' }}>
        Your donation helps us rescue, care for, and rehome cats in need. Every contribution makes a difference in a cat's life.
      </p>

      {/* Donation Options */}
      <h3 style={{ marginBottom: '20px' }}>Donation Options</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {donationOptions.map((option, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <h4 style={{ marginBottom: '10px' }}>${option.amount}</h4>
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>{option.description}</p>
            <button
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#FF6B6B',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Donate
            </button>
          </div>
        ))}
      </div>

      {/* Payment Info */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '12px' }}>Payment Methods</h3>
        <p style={{ marginBottom: '8px' }}>Bank Transfer: 123-456-789</p>
        <p style={{ marginBottom: '8px' }}>bKash / Rocket / Nagad: 017XXXXXXXX</p>
      </div>

      {/* Impact Stats */}
      <div>
        <h3 style={{ marginBottom: '20px' }}>Your Impact</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {impactStats.map((stat, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
              }}
            >
              <h4 style={{ marginBottom: '10px' }}>{stat.value}</h4>
              <p style={{ fontSize: '14px', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
