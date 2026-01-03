function About() {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="mb-4">About Us</h2>

            <section className="mb-4">
                <h4>Our mission</h4>
                <p>
                    At Purrfect Adoption, our mission is to rescue, protect, and rehome
                    cats in need. We believe every cat deserves a safe environment, proper
                    care, and a loving family. Through compassion and dedication, we work
                    to give abandoned and stray cats a second chance at life.
                </p>
            </section>

            <section className="mb-5">
                <h4>Our history</h4>
                <p>
                    Purrfect Adoption began as a small community effort to help local cats
                    find homes. Over time, our love for cats turned into a trusted adoption
                    platform where rescued cats receive medical care, nourishment, and
                    affection before joining their forever families.
                </p>
            </section>

            <section>
                <h4 className="mb-4">Our team</h4>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <img
                                src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
                                alt="Team member cat"
                                className="card-img-top"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h6 className="mb-0">Whiskers</h6>
                                <small className="text-muted">Rescue Coordinator</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <img
                                src="https://cdn2.thecatapi.com/images/bpc.jpg"
                                alt="Team member cat"
                                className="card-img-top"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h6 className="mb-0">Luna</h6>
                                <small className="text-muted">Care Specialist</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <img
                                src="https://cdn2.thecatapi.com/images/6bt.jpg"
                                alt="Team member cat"
                                className="card-img-top"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h6 className="mb-0">Shadow</h6>
                                <small className="text-muted">Adoption Manager</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
