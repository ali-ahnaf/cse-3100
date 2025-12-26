export default function ContactUs() {
    return (
        <section className="contact-us">
            <h2>Contact Us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa possimus ad animi expedita nulla. Ducimus illo cum, eligendi saepe porro reprehenderit repellat tenetur, alias quia numquam rem ut corrupti eum harum? Rerum possimus odit placeat laboriosam eos vitae laborum recusandae totam quos at, sequi in temporibus, corrupti beatae dignissimos dicta!
            </p>
            <br />
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input type="text" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};