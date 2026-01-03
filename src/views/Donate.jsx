
import'./Donate.css';

export default function Donate() {
   
  return (
    <main>
      <div className="container">
        <h2 className="page-title">Donate</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Your generosity helps us provide food, shelter, and medical care for cats waiting for their forever homes. 
          Every contribution makes a difference.
        </p>

        <form className="donate-form" style={{ marginTop: '2rem', maxWidth: '400px', marginInline: 'auto' }}>
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            <span>Amount</span>
            <input type="number" name="amount" placeholder="Enter amount (USD)" required />
          </label>

          <button type="submit" className="btn">Donate Now</button>
        </form>

      
      </div>
    </main>
  );
}
