export default function Donate() {
  return (
    <main>
      <h1>Donate</h1>
      <p>
        Your generous donations help us provide food, medical care, and shelter for cats in need. Every contribution, no matter the size, makes a difference in the lives of these wonderful animals. Thank you for supporting Purrfect Adoption!
      </p>

      <div style={{ 
        maxWidth: '600px', 
        margin: '2rem auto', 
        padding: '2rem', 
        border: '2px solid #333', 
        borderRadius: '8px',
        background: 'white'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Ways to Donate</h2>
        <ul style={{ lineHeight: '2', marginLeft: '1.5rem' }}>
          <li>Bank Transfer: Account #123-456-789</li>
          <li>Mobile Banking: bKash/Nagad - 01712345678</li>
          <li>Visit us: 123 Cat Street, Dhaka</li>
        </ul>
        
        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#666' }}>
          All donations are tax-deductible and go directly to cat care.
        </p>
      </div>
    </main>
  );
}
