import React, { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [recurring, setRecurring] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Donate:", { amount, recurring });
    alert(
      `Thank you for your donation of ${amount}${
        recurring ? " (recurring)" : ""
      }!`
    );
    setAmount("");
    setRecurring(false);
  }

  return (
    <section style={{ maxWidth: 700, margin: "0 auto", paddingTop: 16 }}>
      <h2>Support Our Work</h2>
      <p>
        Your donation helps cover medical care, food, and shelter for rescued
        cats.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: 12, display: "grid", gap: 10 }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={() => setAmount("10")}
            className="donate-btn"
          >
            ৳10
          </button>
          <button
            type="button"
            onClick={() => setAmount("25")}
            className="donate-btn"
          >
            ৳25
          </button>
          <button
            type="button"
            onClick={() => setAmount("50")}
            className="donate-btn"
          >
            ৳50
          </button>
          <button
            type="button"
            onClick={() => setAmount("100")}
            className="donate-btn"
          >
            ৳100
          </button>
        </div>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Custom amount"
          style={{
            padding: "0.5rem",
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={recurring}
            onChange={(e) => setRecurring(e.target.checked)}
          />
          Make this a monthly donation
        </label>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn" style={{ cursor: "pointer" }}>
            Donate
          </button>
        </div>
      </form>
    </section>
  );
}
