import { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${name || 'friend'}! We received your message.`);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <section className="mt-4 text-start">
      <h2>Contact us</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <div className="row">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input id="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
