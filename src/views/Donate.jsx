export default function Donate() {
  return (
    <>
      <h2>Donate</h2>
      <p>
        Your donation helps us provide food, medical care, and safe shelter for cats while they wait for a loving home.
      </p>

      <h3 style={{ marginTop: '30px' }}>Support a cat today</h3>
      <ul style={{ marginTop: '15px', marginLeft: '20px' }}>
        <li>Medical care & vaccines</li>
        <li>Food & daily supplies</li>
        <li>Rescue & temporary shelter</li>
      </ul>

      <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
        <button style={{ padding: '10px 20px' }}>Donate $200</button>
        <button style={{ padding: '10px 20px' }}>Donate $500</button>
        <button style={{ padding: '10px 20px' }}>Donate $1000</button>
      </div>
    </>
  );
}