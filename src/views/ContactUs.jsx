export default function ContactUs() {
  return (
    <div className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to our team!</p>
      <form style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'left' }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="your@email.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}