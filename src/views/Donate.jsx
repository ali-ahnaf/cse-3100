// src/pages/Donate.jsx
export default function Donate() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        minHeight: '60vh',
        backgroundColor: '#fff8f0',
        color: '#8B5E3C',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Donate</h2>
      <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '2rem' }}>
        Your donations help us rescue and care for cats in need. Thank you for supporting Purrfect Adoption!
      </p>

      {/* Optional: Donation button / form */}
      <button
        style={{
          padding: '0.8rem 2rem',
          backgroundColor: '#8B5E3C',
          color: '#fff',
          fontWeight: '700',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Donate Now
      </button>
    </section>
  );
}
