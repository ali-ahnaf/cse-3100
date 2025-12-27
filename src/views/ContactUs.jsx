export default function ContactUs() {
  return (
    <section className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact us</h2>
      <p>Provide your information...</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
        <label>Name <input type="text" className="form-control" /></label>
        <label>Phone <input type="text" className="form-control" /></label>
        <label>Email <input type="email" className="form-control" /></label>
        <button type="button" className="btn-search" style={{ width: '100px' }}>Submit</button>
      </form>
    </section>
  );
}