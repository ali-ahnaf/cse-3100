import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact us</h1>

      <div style={styles.textSection}>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        </p>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.formSection}>
        <FormField
          label="Name:"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <FormField
          label="Phone:"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <FormField
          label="Email:"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <div style={styles.formField}>
          <div style={{ ...styles.label, visibility: "hidden" }}>Submit:</div>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const FormField = ({ label, id, name, value, onChange, placeholder }) => (
  <div style={styles.formField}>
    <label style={styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={styles.inputBox}
      placeholder={placeholder}
      required
    />
  </div>
);

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
    textAlign: "left",
  },
  textSection: {
    marginBottom: "30px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333",
    margin: "0 0 15px 0",
  },
  formSection: {
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
  },
  formField: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
    width: "80px",
  },
  inputBox: {
    flex: 1,
    height: "35px",
    padding: "0 10px",
    fontSize: "16px",
    border: "1px solid #0066cc",
    backgroundColor: "#fff",
    borderRadius: "3px",
    outline: "none",
  },
  submitButton: {
    backgroundColor: "#0066cc",
    color: "white",
    border: "none",
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "3px",
    cursor: "pointer",
    marginLeft: "80px",
  },
};

export default ContactUs;
