// About.jsx
export default function About() {
  return (
    <section className="text-center">
      <h1>About Purrfect Adoption</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.6' }}>
        <p>
          At Purrfect Adoption, we believe every cat deserves a loving home. Our mission is to connect wonderful cats 
          with wonderful people, creating purrfect matches that last a lifetime.
        </p>
        
        <h3>Our Story</h3>
        <p>
          Founded in 2020, Purrfect Adoption started as a small community initiative and has grown into a 
          comprehensive adoption center. We've helped over 500 cats find their forever homes!
        </p>
        
        <h3>Our Values</h3>
        <ul style={{ textAlign: 'left', marginLeft: '20px' }}>
          <li>Compassionate care for every cat</li>
          <li>Transparent adoption process</li>
          <li>Lifetime support for adopters</li>
          <li>Community education and outreach</li>
        </ul>
        
        <h3>Meet Our Team</h3>
        <p>
          Our dedicated team of volunteers and professionals work tirelessly to ensure every cat receives 
          the best care possible while waiting for their forever home.
        </p>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>We help lovely cats find loving forever homes 💛</h3>
        <p>Join us in making a difference, one purr at a time!</p>
      </div>
    </section>
  );
}