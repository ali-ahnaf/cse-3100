export default function Donate() {
  return (
    <div className="donate-page">
      <h2>Support Our Mission</h2>
      <p className="donate-intro">
        Your generous donations help us provide food, medical care, and shelter for cats in need. 
        Every contribution, no matter how small, makes a difference in giving these wonderful 
        animals a second chance at finding their forever homes.
      </p>

      <div className="donate-content">
        <div className="donate-section">
          <h3>Why Donate?</h3>
          <ul className="donate-list">
            <li>Help provide medical care and vaccinations</li>
            <li>Support shelter and food costs</li>
            <li>Fund spay/neuter programs</li>
            <li>Enable rescue operations</li>
          </ul>
        </div>

        <div className="donate-section">
          <h3>How to Help</h3>
          <p>
            We accept donations through various methods. Every penny goes directly to caring 
            for our feline friends and finding them loving homes.
          </p>
          <p>
            For donation information, please contact us at <strong>donate@purrfectadoption.org</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
