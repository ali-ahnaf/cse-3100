import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now just log — in real app we'd send to API
        console.log('Contact form submitted', form);
        alert('Thanks for contacting us!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section>
            <h2>Contact Us</h2>
            <p>
                Have a question or want to volunteer? Fill the form below or reach us at
                <br />
                <strong>Email:</strong> info@purrfectadoption.org | <strong>Phone:</strong> (555) 123-4567
            </p>

            <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
                <div>
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required />
                </div>
                <div style={{ marginTop: 8 }}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </section>
    );
}
