export default function Donate() {
  const options = [10, 25, 50];
  return (
    <div className="container text-center">
      <h2>Support Rescued Cats</h2>
      <p>Your donation helps provide food, medical care, and shelter for rescued cats.</p>
      <div className="donation-buttons">
        {options.map((amt) => (
          <button key={amt} className="btn">{`$${amt}`}</button>
        ))}
      </div>
    </div>
  );
}
