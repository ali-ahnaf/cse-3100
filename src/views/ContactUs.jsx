const ContactUs = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .contact-page {
            max-width: 500px;
            margin-top: 2rem;
          }

          .contact-title {
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
          }

          .contact-text {
            font-size: 0.9rem;
            color: #555;
            margin-bottom: 1.5rem;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-form label {
            display: flex;
            flex-direction: column;
            font-size: 0.9rem;
          }

          .contact-form input {
            margin-top: 0.3rem;
            padding: 0.5rem;
            border-radius: 6px;
            border: 1px solid #ccc;
          }

          .btn-submit {
            width: 100px;
            padding: 0.5rem;
            border-radius: 6px;
            border: none;
            background-color: #9fd3ff;
            cursor: pointer;
          }

          .btn-submit:hover {
            background-color: #7fc0ff;
          }
        `}
      </style>

      {/* PAGE CONTENT */}
      <section className="contact-page">
        <h2 className="contact-title">Contact us</h2>

        <p className="contact-text">
          We’d love to hear from fellow cat lovers! 
          Whether you have questions about adopting, want to share a heartwarming story, or simply want to say hello, 
          feel free to reach out. Our team at Purrfect Adoption is here to help you find your purr-fect feline friend 
          and support you every step of the way. Drop us a message, and let’s make the world a better place for cats together!
        </p>

        <form className="contact-form">
          <label>
            Name
            <input type="text" />
          </label>

          <label>
            Phone
            <input type="text" />
          </label>

          <label>
            Email
            <input type="email" />
          </label>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
