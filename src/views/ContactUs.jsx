import React from "react";

export default function ContactUs() {
  return (
    <section className="container mt-4">
      <h2>Contact us</h2>
      <p>
        Have questions about adopting a cat? Want to volunteer or donate? We
        would love to hear from you! Fill out the form below and our team will
        get back to you within 24-48 hours.
      </p>

      <div className="row">
        <div className="col-md-6">
          <form
            style={{ maxWidth: "500px" }}
            action="https://formspree.io/f/waliza.cse.20230104029@aust.edu"
            method="POST"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h4>Our Location</h4>
          <p>
            <strong>Address:</strong> Elephant Road, Dhaka
          </p>
          <p>
            <strong>Phone:</strong> 01784358650
          </p>
          <p>
            <strong>Email:</strong> waliza.cse.20230104029@aust.edu
          </p>
          <p>
            <strong>Business Hours:</strong> 9 AM to 8 PM
          </p>
        </div>
      </div>
    </section>
  );
}
