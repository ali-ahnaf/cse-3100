import contactImg from '../assets/contact-cat.jpg'; 

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-header-info">
        <div className="info-box">
          <span className="info-icon">📍</span>
          <div className="info-text">
            <strong>Address:</strong><br /> 407/2/c SP Road, Dhaka
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">📞</span>
          <div className="info-text">
            <strong>Phone:</strong><br /> 01991000166
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">✉️</span>
          <div className="info-text">
            <strong>Email:</strong><br /> easteak00987@gmail.com
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">🌐</span>
          <div className="info-text">
            <strong>Website:</strong><br /> PurrfectAdoption.com
          </div>
        </div>
      </div>

      <div className="contact-card-container">
        <div className="contact-form-side">
          <h1>Contact Us</h1>
          <form className="contact-form-ui">
            <div className="form-field">
              <label>FULL NAME</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-field">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-field">
              <label>SUBJECT</label>
              <input type="text" placeholder="What is this regarding?" />
            </div>
            <div className="form-field">
              <label>MESSAGE</label>
              <textarea rows="4" placeholder="Write your message here..."></textarea>
            </div>
            <button type="button" className="contact-submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-img-side">
          {/* এখানে ইমপোর্ট করা ইমেজটি ব্যবহার করা হলো */}
          <img src={contactImg} alt="Cute Cat" />
        </div>
      </div>
    </div>
  );
}