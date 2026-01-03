function About() {
  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Purrfect Adoption</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nisi sed elit lacinia, at fermentum justo tincidunt. Nulla facilisi. Vivamus euismod, nisi vel consectetur interdum, nisi nunc egestas nunc.</p>
      </div>
      
      <hr style={{margin: '30px 0', border: 'none', borderTop: '1px solid #ddd'}} />
      
      <div style={{marginBottom: '30px'}}>
        <h2>Our History</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus nisi sed elit lacinia, at fermentum justo tincidunt. Nulla facilisi. Vivamus euismod, nisi vel consectetur interdum, nisi nunc egestas nunc.</p>
      </div>
      
      <hr style={{margin: '30px 0', border: 'none', borderTop: '1px solid #ddd'}} />
      
      <div>
        <h2>Our Team</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px'}}>
          <div style={{textAlign: 'center', padding: '15px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <h3>John Doe</h3>
            <p>Founder & Director</p>
          </div>
          <div style={{textAlign: 'center', padding: '15px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <h3>Jane Smith</h3>
            <p>Adoption Coordinator</p>
          </div>
          <div style={{textAlign: 'center', padding: '15px', border: '1px solid #ddd', borderRadius: '5px'}}>
            <h3>Robert Johnson</h3>
            <p>Veterinary Specialist</p>
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '50px', paddingTop: '20px', borderTop: '2px solid #333', textAlign: 'center'}}>
        
      </div>
    </div>
  );
}

export default About;