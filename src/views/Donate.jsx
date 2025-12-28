import './Donate.css';

export default function Donate() {
  return (
    <div className="donate-page">
      <h3 className="donate-title">Donate</h3>

      <p className="donate-text">
        Your donation helps us provide food, medical care, and safe shelter for
        cats while they wait for a loving home.
      </p>

      <div className="donate-card">
        <h4 className="donate-card-title">Support a cat today</h4>

        <ul className="donate-list">
          <li>Medical care & vaccines</li>
          <li>Food & daily supplies</li>
          <li>Rescue & temporary shelter</li>
        </ul>

        <div className="donate-actions">
          <button className="btn" type="button">Donate ৳200</button>
          <button className="btn" type="button">Donate ৳500</button>
          <button className="btn" type="button">Donate ৳1000</button>
        </div>

      </div>
    </div>
  );
}
