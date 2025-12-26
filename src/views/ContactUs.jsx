import { useState } from "react";

export default function ContactUs() {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });

  const handleFormText = (event) => {
    setFormText({
      ...formText,
      [event.target.name]: event.target.value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    const fd = new FormData();
    for (const [key, val] of Object.entries(formText)) {
      fd.append(key, val);
    }
    setFormText({ name: "", phone: "", email: "" });
  };
  
  return (
    <section className="mt-4">
      <div className="fs-5 fw-bold mb-2">Contact us</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>
      <form onSubmit={submit}>
        <label className="pb-1" htmlFor="name">Name</label>
        <input type="text" className="form-control" autoComplete="true" style={{ width: "90%" }}
        onChange={handleFormText} id="name" name="name" placeholder="Nafis Fuad" value={formText.name} />

        <label className="pt-2 pb-1" htmlFor="phone">Phone</label>
        <input type="tel" className="form-control" autoComplete="true" pattern="\+880 1\d{3}-\d{6}" style={{ width: "90%" }}
        onChange={handleFormText} id="phone" name="phone" placeholder="+880 1604-3XXXXX" value={formText.phone} />

        <label className="pt-2 pb-1" htmlFor="email">Email</label>
        <input type="text" className="form-control" autoComplete="true" style={{ width: "90%" }}
        onChange={handleFormText} id="email" name="email" placeholder="nafis.ceo@purrfect.com" value={formText.email} />

        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </section>
  );
}
