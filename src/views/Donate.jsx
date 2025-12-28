export default function Donate() {
  const handleDonate = () => {
    alert('Thank you for your interest in donating! You will be redirected to our donation portal.');
  };

  return (
    <section className="container mt-4">
      <div className="simple-donate-container">
        <h2>Support Purrfect Adoption</h2>
        <p className="donate-message">
          Your generous donation helps us rescue, care for, and find loving homes
          for cats in need. Every contribution, big or small, makes a real
          difference in the lives of these wonderful animals. Thank you for
          supporting our mission!
        </p>
        <button className="btn btn-primary btn-lg donate-button" onClick={handleDonate}>
          Donate Now 
        </button>
      </div>
    </section>
  );
}
