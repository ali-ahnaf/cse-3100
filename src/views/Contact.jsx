export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact us</h2>
            <p className="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name</label>
                <input type="text" className="form-control contact-input" placeholder="Enter Name" />

                <label>Contact Number</label>
                <input type="text" className="form-control contact-input" placeholder="Enter Contact Number"/>

                <label>Email</label>
                <input type="email" className="form-control contact-input" placeholder="Enter email"/>
                <button type="submit" class="btn contact-button">
                    Submit 
                </button>
            </form>
        </div>
    );
}