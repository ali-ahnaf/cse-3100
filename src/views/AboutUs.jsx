export default function AboutUs() {
  const team = [
    { name: 'Bob Doe', role: 'Director', img: 'https://via.placeholder.com/150' },
    { name: 'Alice Smith', role: 'Coordinator', img: 'https://via.placeholder.com/150' },
    { name: 'Charlie Brown', role: 'Volunteer', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container">
      <h2>About Us</h2>

      <section>
        <h3>Our Mission</h3>
        <p>We help cats find loving homes and ensure they are well cared for.</p>
      </section>

      <section>
        <h3>Our History</h3>
        <p>Purrfect Adoption was founded to rescue stray and abandoned cats and place them in safe homes.</p>
      </section>

      <section>
        <h3>Our Team</h3>
    
      </section>
    </div>
  );
}
