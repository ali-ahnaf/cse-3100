function ContactUs() {
  return (
    <section className="mt-4">
      <h2>Contact us</h2>
      <p className="mb-4">
        Have questions about cat adoption or want to give a cat a loving home?
        We’re here to help you with adoption details, rescue information, and volunteering opportunities.
      </p>

      <div className="mb-4" style={{ 
        padding: '20px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px',
        maxWidth: '500px'
      }}>
        <h3 className="h5 mb-3">Our Contact Information</h3>
        <p className="mb-2"><strong>Email:</strong> catadoption@gmail.com</p>
        <p className="mb-2"><strong>Phone:</strong> 01XXXXXXXXX</p>
        <p className="mb-2"><strong>Address:</strong> Local Cat Rescue Center, Dhaka, Bangladesh</p>
        <p className="mb-0"><strong>Hours:</strong> Mon-Fri 9AM-5PM, Sat 10AM-4PM</p>
      </div>
    </section>
  );
}

export default ContactUs;