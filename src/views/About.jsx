const team = [
  { name: 'Ava Johnson', role: 'Adoption Coordinator' },
  { name: 'Liam Carter', role: 'Volunteer Lead' },
  { name: 'Mia Chen', role: 'Cat Care Specialist' },
];

export default function About() {
  return (
    <section className="mt-4">
      <h2 className="text-center">About us</h2>

      <div className="row mt-4 g-4">
        <div className="col-md-6">
          <h3 className="h5">Our mission</h3>
          <p>
            We connect loving families with cats in need, while providing
            education and support throughout the adoption journey.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="h5">Our history</h3>
          <p>
            Purrfect Adoption started as a small community effort and grew into
            a trusted local network of fosters, volunteers, and adopters.
          </p>
        </div>
      </div>

      <h3 className="h5 mt-5 text-center">Our team</h3>

      <div className="row mt-3 g-4 justify-content-center">
        {team.map((m) => (
          <div className="col-md-3" key={m.name}>
            <div className="border rounded-4 p-4 text-center">
              <div className="fw-semibold">{m.name}</div>
              <div className="text-muted">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
