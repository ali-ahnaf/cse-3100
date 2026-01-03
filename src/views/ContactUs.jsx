import React, { useState } from 'react';

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', phone: '', email: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="contact-section contact-wireframe">
            <h2 className="contact-title">Contact us</h2>
            <p className="contact-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc</p>
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="contact-submit">Submit</button>
            </form>
            {submitted && <div className="contact-success">Thank you for contacting us!</div>}
        </section>
    );
}
