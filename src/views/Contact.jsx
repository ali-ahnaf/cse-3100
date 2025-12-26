export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <main>
      <h1>Contact us</h1>
      <p>
        Have questions about adopting a cat or want to learn more about our organization? We'd love to hear from you! Fill out the form below and our team will respond as soon as possible. You can also visit our shelter during business hours to meet our cats in person.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
