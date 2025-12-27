import React from 'react';

const Donate = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Support Purrfect Adoption</h1>

        <p className="lead mb-5">
          Your donation helps us care for cats in need, cover veterinary bills, 
          provide food and shelter, and find them loving forever homes.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-5 text-center">
                <h3 className="mb-4">Choose a Donation Amount</h3>

                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                  <button className="btn btn-outline-primary btn-lg px-4">100 BDT</button>
                  <button className="btn btn-outline-primary btn-lg px-4">500 BDT</button>
                  <button className="btn btn-outline-primary btn-lg px-4">1000 BDT</button>
                  <button className="btn btn-outline-primary btn-lg px-4">2000 BD</button>
                </div>

                <div className="mb-4">
                  <label htmlFor="customAmount" className="form-label">
                    Or enter a custom amount:
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">BDT </span>
                    <input
                      type="number"
                      id="customAmount"
                      className="form-control form-control-lg text-center"
                      placeholder="0.00"
                      min="1"
                    />
                  </div>
                </div>

                <button className="btn btn-primary btn-lg w-100">
                  Donate Now
                </button>

                <p className="mt-4 text-muted small">
                  You can also come to our office and see how we help cats in need and donate 
                  after seeing how we operate 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;