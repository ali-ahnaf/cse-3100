export default function Contact() {
  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <form className="mt-3">
        <input type="text" placeholder="Name" className="form-control mb-2" />
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <textarea placeholder="Message" className="form-control mb-2" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}
