export default function Contact() {
    return (
      <div className="container py-5">
        <h1 className="text-center mb-4">Contact Us</h1>
  
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your message"></textarea>
          </div>
  
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  