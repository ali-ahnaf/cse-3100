export default function Contact() {
  return (
    <>
      <h3>Contact us</h3>
      <form className="w-50">
        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Phone" />
        <input className="form-control mb-2" placeholder="Email" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
