export default function AboutUs() {
  return (
    <section className="about-section py-4">
      <div className="container">
        <h2 className="mb-4">About Us</h2>

        <div className="row mb-4">
          <div className="col-lg-8">
            <h3 className="mb-2">Our mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lacinia, arcu id vehicula cursus, urna nibh luctus nibh, sit amet
              convallis lacus urna a neque. We rescue, rehabilitate and rehome
              cats while educating the community about responsible pet
              ownership.
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8">
            <h3 className="mb-2">Our history</h3>
            <p>
              Founded by a group of volunteers, Purrfect Adoption started as a
              small foster network and has grown into a community-supported
              non-profit. Over the years we have reunited many cats with loving
              families and helped dozens of shelters improve their care.
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <h3 className="mb-3">Our team</h3>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="team-card">
              <div className="team-photo" aria-hidden="true"></div>
              <div className="team-info">
                <strong>Bob Doe</strong>
                <div className="muted">Director</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="team-card">
              <div className="team-photo" aria-hidden="true"></div>
              <div className="team-info">
                <strong>Jane Roe</strong>
                <div className="muted">Volunteer Coordinator</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="team-card">
              <div className="team-photo" aria-hidden="true"></div>
              <div className="team-info">
                <strong>Ali Khan</strong>
                <div className="muted">Vet Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
