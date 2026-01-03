import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact submitted", form);
    alert("Thanks! Your message was received.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section style={{ maxWidth: 700, margin: "0 auto", paddingTop: 16 }}>
      <h2>Contact Us</h2>
      <p>If you have questions or want to volunteer, send us a message.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: 12,
          display: "grid",
          gap: 10,
        }}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          style={{
            padding: "0.5rem",
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          style={{
            padding: "0.5rem",
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={6}
          required
          style={{
            padding: "0.5rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            className="btn"
            style={{ cursor: "pointer" }}
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
