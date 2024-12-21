
const ContactUs = () => {
    return (
      <section className="container mt-4">
        <h2 className="mb-3">Contact us</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
        </p>
  
        <form className="d-flex flex-column gap-3" style={{ maxWidth: '400px' }}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input required type="text" id="name" className="form-control" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input required type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input required type="email" id="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default ContactUs;