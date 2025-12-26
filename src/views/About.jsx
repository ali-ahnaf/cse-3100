export default function About() {
  return (
    <section style={{ padding: '20px' }}>
      <h2 style={{ fontWeight: 'bold' }}>About us</h2>
      
      <br />
      <br />
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Our mission</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <br />
      <br />

      <div style={{ marginBottom: '20px' }}>
        <h4>Our history</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
      </div>

      <br />
      <br />

      <div>
        <h4>Our team</h4>
        
        <br />

        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          gap: '20px' 
        }}>
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              style={{
                flex: '1',
                border: '1px solid #000000ff', 
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#fff'
              }}
            >
              <div 
                style={{
                  height: '150px', 
                  borderRadius: '8px', 
                  border: '1px solid #eee',
                  backgroundColor: '#f8f9fa',
                  marginBottom: '15px'
                }}
              ></div>
              <div style={{ textAlign: 'left' }}>
                <h5 style={{ margin: '0', fontSize: '18px' }}>Bob Doe</h5>
                <small style={{ color: '#070707ff' }}>Director</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}