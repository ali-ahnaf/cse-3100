import React from "react";

export default function AboutUs() {
  return (
    <section
      className="text-center mt-4"
      style={{ maxWidth: 900, margin: "0 auto" }}
    >
      <h2>About Purrfect Adoption</h2>
      <p style={{ marginTop: "0.5rem", color: "#333" }}>
        We rescue, rehabilitate and rehome cats. Our mission is to match every
        cat with a loving home and provide community education about responsible
        pet ownership.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>Our History</h3>
      <p style={{ color: "#555" }}>
        Founded by volunteers, we have been operating since 2026 and have helped
        hundreds of cats find forever homes.
      </p>

      <h3 style={{ marginTop: "1.25rem" }}>Our Team</h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "0.75rem",
        }}
      >
        <div className="cat-card" style={{ width: 180 }}>
          <div
            style={{
              height: 110,
              background: "#f3f3f3",
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
          <div className="cat-info">
            <strong>Masrafi</strong>
            <div style={{ fontSize: "0.85rem" }}>Director</div>
          </div>
        </div>

        <div className="cat-card" style={{ width: 180 }}>
          <div
            style={{
              height: 110,
              background: "#f3f3f3",
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
          <div className="cat-info">
            <strong>Mashrafee</strong>
            <div style={{ fontSize: "0.85rem" }}>Volunteer Lead</div>
          </div>
        </div>

        <div className="cat-card" style={{ width: 180 }}>
          <div
            style={{
              height: 110,
              background: "#f3f3f3",
              borderRadius: 8,
              marginBottom: 8,
            }}
          />
          <div className="cat-info">
            <strong>Masragfee</strong>
            <div style={{ fontSize: "0.85rem" }}>Vet Coordinator</div>
          </div>
        </div>
      </div>
    </section>
  );
}
