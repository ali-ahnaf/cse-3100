function Contact() {
    return (
        <div className="container mt-5 pt-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Contact Us</h2>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        pattern="[0-9]+"
                                        inputMode="numeric"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Submit
                                </button>
                            </form>

                            <div className="mt-4 pt-3 border-top">
                                <h5 className="mb-3">Our Information</h5>
                                <p className="mb-2"><strong>Address:</strong> 123 Cat Street, Meowington</p>
                                <p className="mb-2"><strong>Email:</strong> info@purrfectadoption.com</p>
                                <p className="mb-0"><strong>Phone:</strong> (123) 456-7890</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
