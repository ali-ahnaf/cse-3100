import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <h3 className="contact-title">Contact Us</h3>
            <p className="contact-text">
                Have questions about adoption, volunteering, or donations? 
                Send us a message and we're here to help!
            </p>

            <form className="contact-form">
                <label className="contact-label">
                    Name
                    <input className="contact-input" type="text" placeholder="" />
                </label>

                <label className="contact-label">
                    Phone
                    <input className="contact-input" type="tel" placeholder="" />
                </label>

                <label className="contact-label">
                    Email
                    <input className="contact-input" type="email" placeholder="" />
                </label>

                <button className="btn contact-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}