const teamInfo = [
  { name: "Sarah Jenkins", desg: "Founder & Director" },
  { name: "Dr. Alex Chen", desg: "Lead Veterinarian" },
  { name: "Maria Garcia", desg: "Adoption Coordinator" },
];

export default function AboutUs() {
  return (
    <div className="about mx-auto" style={{ maxWidth: "70%" }}>
      <section className="m-4 mt-3">
        <h2 className="mb-3 fw-bold">Our Mission</h2>
        <p style={{ textAlign: "justify" }}>
          Our mission at Purrfect Adoption is to provide a safe, caring, and
          transparent platform that helps cats find loving forever homes. We
          believe every cat deserves compassion, proper care, and a chance to
          live a happy life. By connecting adopters with cats in need, we aim to
          promote responsible pet adoption and raise awareness about animal
          welfare within our community.
        </p>
      </section>

      <section className="m-4 mt-3">
        <h2 className="mb-3 fw-bold">Our History</h2>
        <p style={{ textAlign: "justify" }}>
          Purrfect Adoption was created with the goal of making the cat adoption
          rocess simple and accessible for everyone. What started as a small
          initiative has grown into a platform focused on connecting people with
          cats looking for a second chance. Over time, we have continued to
          improve our services to ensure a smoother adoption experience while
          prioritizing the well-being of every cat.
        </p>
      </section>

      <section className="m-4 mt-3">
        <h2 className="mb-2 fw-bold">Our Team</h2>
        <div className="row g-4 mt-2">
          {teamInfo.map((teamMember, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3">
              <div className="team-card card text-center shadow-sm">
                <img
                  className="card-img-top team-img"
                  src="https://media.tenor.com/upgefKqHX0IAAAAM/yapapa.gif"
                  alt={teamMember.name}
                />
                <div className="card-body p-3">
                  <h5
                    className="card-title mb-1 fw-bold"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {teamMember.name}
                  </h5>
                  <p className="card-text text-muted">{teamMember.desg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
