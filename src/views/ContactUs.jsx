const ContactUs = () => {
  return (
    <div className="container mt-4">
      <h2>Contact us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        luc
      </p>
      <form className="d-flex flex-column gap-2" style={{ maxWidth: '400px' }}>
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Name" />
        <label>Phone</label>
        <input type="text" className="form-control" placeholder="Phone" />
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email" />
        <button type="button" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
