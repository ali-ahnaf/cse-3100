import catImage from '../assets/cat.jpg';
import { FaHeart, FaHandshake, FaUsers } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section style={{ textAlign: 'center', marginBottom: '3em' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: '300', marginBottom: '0.5em', color: '#333' }}>
        About Us
      </h2>
      <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '2em' }}>
        Discover our mission to find loving homes for every cat in need
      </p>

      <hr style={{ width: '80%', border: '1px solid #ddd', margin: '2em auto' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', lineHeight: '1.6', color: '#666' }}>
        <h3 style={{ fontSize: '1.8em', color: '#333', marginTop: '1.5em' }}>Our Mission</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2em', marginTop: '1.5em' }}>
          <div style={{ flex: 1 }}>
            <p>
              At Purrfect Adoption, we are dedicated to rescuing, rehabilitating, and rehoming cats in need. Since our founding, we've helped thousands of felines find their forever homes.
            </p>
            <p>
              Our team of passionate volunteers works tirelessly to ensure every cat receives the care, love, and attention they deserve while waiting for their perfect match.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img
              src={catImage}
              alt="Cat"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>

        <h3 style={{ fontSize: '1.8em', color: '#333', marginTop: '2em' }}>Our Core Values</h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5em',
          marginTop: '1.5em',
          justifyItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '1.5em',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#ff6b6b', marginBottom: '0.5em' }}>
              <FaHeart />
            </div>
            <h4 style={{ fontSize: '1.2em', color: '#333', marginBottom: '0.5em' }}>Compassion</h4>
            <p style={{ margin: 0 }}>
              We treat every cat with kindness, patience, and unconditional love, ensuring their physical and emotional well-being.
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '1.5em',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#4ecdc4', marginBottom: '0.5em' }}>
              <FaHandshake />
            </div>
            <h4 style={{ fontSize: '1.2em', color: '#333', marginBottom: '0.5em' }}>Perfect Matches</h4>
            <p style={{ margin: 0 }}>
              We carefully match each cat with the right family, considering personality, lifestyle, and long-term compatibility.
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '1.5em',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5em', color: '#1a936f', marginBottom: '0.5em' }}>
              <FaUsers />
            </div>
            <h4 style={{ fontSize: '1.2em', color: '#333', marginBottom: '0.5em' }}>Community</h4>
            <p style={{ margin: 0 }}>
              We build a supportive community of adopters, volunteers, and cat lovers dedicated to making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}