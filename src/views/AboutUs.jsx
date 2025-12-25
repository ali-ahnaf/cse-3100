const teamInfo = [
  { name: "Bob Doe", desg: "Director" },
  { name: "Bob Doe", desg: "Director" },
  { name: "Bob Doe", desg: "Director" },
];

export default function AboutUs() {
  return (
    <>
      <section className="m-4 mt-4">
        <h2 className="mb-3">Our Mission</h2>
        <p className="text-justify me-4">
          Our mission at Purrfect Adoption is to provide a safe, caring, and
          transparent platform that helps cats find loving forever homes. We
          believe every cat deserves compassion, proper care, and a chance to
          live a happy life. By connecting adopters with cats in need, we aim to
          promote responsible pet adoption and raise awareness about animal
          welfare within our community.
        </p>
      </section>
      <section className="m-4 mt-5">
        <h2 className="mb-3">Our History</h2>
        <p className="text-justify me-4">
          Purrfect Adoption was created with the goal of making the cat adoption
          process simple and accessible for everyone. What started as a small
          initiative has grown into a platform focused on connecting people with
          cats looking for a second chance. Over time, we have continued to
          improve our services to ensure a smoother adoption experience while
          prioritizing the well-being of every cat.
        </p>
      </section>
      <section className="m-4 mt-5">
        <h2 className="mb-2">Our Team</h2>
        <div className="row g-4 mt-2">
          {teamInfo.map((teamMember, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="team-card card text-center me-2">
                <img
                  className="card-img-top team-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  alt={teamMember.name}
                />
                <div className="card-body p-2">
                  <h5 className="card-title mb-1">{teamMember.name}</h5>
                  <p className="card-text text-muted fw-bolder">
                    {teamMember.desg}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
