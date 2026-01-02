import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '' });
    };

    return (
        <div className="contact-page">
            <h2>Contact us</h2>
            <p className="contact-description">
                Have questions about adopting a cat? Want to learn more about our adoption process?
                We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}
