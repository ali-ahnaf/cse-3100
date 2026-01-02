import React from "react";
import SpoImage from "../assets/Spo.jpeg";

export default function AboutUs() {
  const teamMembers = [
    { name: "Spo", role: "Founder & Director", image: SpoImage },
    {
      name: "Jinan",
      role: "Veterinary Coordinator",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Waliza",
      role: "Adoption Manager",
      image: "https://i.pravatar.cc/150?img=25",
    },
  ];

  return (
    <section className="container mt-4">
      <div className="mb-5">
        <h3>Our mission</h3>
        <p>
          At Purrfect Adoption, our mission is to rescue, rehabilitate, and
          rehome cats in need. We believe every cat deserves a loving family and
          a safe forever home. Through compassionate care and community
          education, we strive to reduce the number of homeless cats.
        </p>
      </div>

      <div className="mb-5">
        <h3>Our history</h3>
        <p>
          Founded in 2015, Purrfect Adoption started as a small volunteer group
          passionate about helping stray cats. Over the years, we have grown
          into a full-fledged rescue organization, successfully placing over
          2,000 cats in loving homes across the country.
        </p>
      </div>

      <div>
        <h3>Our team</h3>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="cat-card" style={{ height: "250px" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    margin: "20px auto",
                    objectFit: "cover",
                  }}
                />
                <div className="cat-info text-start p-2">
                  <h4 className="h6 mb-0">{member.name}</h4>
                  <small>{member.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
