import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section style={{ textAlign: 'center', marginBottom: '3em' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: '300', marginBottom: '1em', color: '#333' }}>
        Contact Us
      </h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', lineHeight: '1.6', color: '#666' }}>
        <p>
          Have questions about adoption, want to volunteer, or need more information? We'd love to hear from you! Reach out to us using the information below.
        </p>
        <div style={{ marginTop: '2em' }}>
          <h3 style={{ color: '#333' }}>Get in Touch</h3>
          <p><strong><MdEmail style={{ verticalAlign: 'middle', marginRight: '8px' }} />Email: </strong>  purrfectadoption@gmail.com</p>
          <p><strong><MdPhone style={{ verticalAlign: 'middle', marginRight: '8px' }} />Phone: </strong>  01712345678</p>
          <p><strong><MdLocationOn style={{ verticalAlign: 'middle', marginRight: '8px' }} />Address: </strong>  Ahsanullah University of Science and Technology, Dhaka, Bangladesh</p>
        </div>

        <div style={{ marginTop: '2em' }}>
          <h3 style={{ color: '#333' }}><FaClock style={{ verticalAlign: 'middle', marginRight: '8px' }} />Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div style={{ marginTop: '2em' }}>
          <h3 style={{ color: '#333' }}>Follow Us</h3>
          <p>Stay connected and see our adorable cats on social media!</p>
          <p><FaFacebook style={{ verticalAlign: 'middle', marginRight: '8px' }} />Facebook: @PurrfectAdoption | <FaInstagram style={{ verticalAlign: 'middle', marginRight: '8px' }} />Instagram: @purrfect_adoption</p>
        </div>
      </div>
    </section>
  );
}