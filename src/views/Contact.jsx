
export default function Contact() {
  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact us</h2>
      <p style={{ marginBottom: '30px' }}>
        Email- gisankhan299@gmail.com 
        Phone - 014109002003
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input type="text" style={inputStyle} />

        <label>Phone</label>
        <input type="text" style={inputStyle} />

        <label>Email</label>
        <input type="email" style={inputStyle} />

        <button 
          style={{
            backgroundColor: '#87CEFA', 
            border: 'none',
            padding: '10px 30px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}