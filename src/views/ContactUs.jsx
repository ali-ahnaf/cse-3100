import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      form.name.trim() === "" ||
      form.phone.trim() === "" ||
      form.email.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    
    alert("Form submitted!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.field}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  form: {
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontWeight: "600",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#87cefa",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ContactUs;
