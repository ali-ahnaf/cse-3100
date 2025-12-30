import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">About Purrfect Adoption</h3>
                    <p>
                        We&apos;re dedicated to rescuing and rehoming cats in need. Our mission is to provide safe shelter,
                        medical care, and love to every cat until they find their forever home.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook" title="Facebook">f</a>
                        <a href="#" aria-label="Instagram" title="Instagram">📷</a>
                        <a href="#" aria-label="Twitter" title="Twitter">𝕏</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/available-cats">Available Cats</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Get Involved</h3>
                    <ul className="footer-links">
                        <li><a href="#volunteering">Volunteer</a></li>
                        <li><a href="#fostering">Foster a Cat</a></li>
                        <li><a href="#sponsor">Sponsor Program</a></li>
                        <li><a href="#wishlist">Amazon Wishlist</a></li>
                        <li><a href="#corporate">Corporate Matching</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact Info</h3>
                    <div className="contact-info">
                        <p>
                            <strong>Address:</strong><br />
                            123 Whisker Lane<br />
                            Pawsville, CA 90210
                        </p>
                        <p>
                            <strong>Phone:</strong><br />
                            <a href="tel:+15551234567">(555) 123-4567</a>
                        </p>
                        <p>
                            <strong>Email:</strong><br />
                            <a href="mailto:info@purrfectadoption.org">info@purrfectadoption.org</a>
                        </p>
                        <p>
                            <strong>Hours:</strong><br />
                            Mon-Fri: 10am - 6pm<br />
                            Sat-Sun: 12pm - 5pm
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Purrfect Adoption. All rights reserved.</p>
                <div className="footer-legal">
                    <Link to="#">Privacy Policy</Link>
                    <span>•</span>
                    <Link to="#">Terms of Service</Link>
                    <span>•</span>
                    <Link to="#">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
