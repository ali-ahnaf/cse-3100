export default function About() {
  
  return (
    <div className="container py-5">
      <section className="about-hero mb-5">
        <div className="d-flex align-items-start justify-content-between">
          <div style={{ maxWidth: 620 }}>
            <h1 className="display-5 fw-bold mb-3">About Purrfect Adoption</h1>
            <p className="lead text-muted">We are passionate about connecting cats with loving families and creating lifelong bonds built on care and compassion.</p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="info-card p-4">
              <h4 className="fw-bold mb-2">Our History</h4>
              <p className="text-muted mb-0">Founded by passionate animal lovers, Purrfect Adoption has helped hundreds of cats find safe, loving homes since its beginning. We grew steadily through community support, volunteer work, and careful partnerships.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card info-card--accent p-4">
              <h4 className="fw-bold mb-2">Our Mission</h4>
              <p className="text-muted mb-0">To rescue, care for, and rehome cats ethically — ensuring every cat gets the forever home it deserves. We provide medical care, behavioral support, and post-adoption guidance to promote long-lasting matches.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="fw-bold mb-4">Our Team</h2>
        <div className="row g-3 align-items-center">
          <div className="col-sm-6 col-md-4">
            <div className="team-pill p-3">
              <div>
                <div className="fw-semibold">Kazi Ishmamul Haque</div>
                <div className="text-muted">Director</div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-pill p-3">
              <div>
                <div className="fw-semibold">Johaer Mahtab Prodhan</div>
                <div className="text-muted">Volunteer Lead</div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-pill p-3">
              <div>
                <div className="fw-semibold">Abrarul Haque Tonmoy</div>
                <div className="text-muted">Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
