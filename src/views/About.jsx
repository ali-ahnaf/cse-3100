export default function About() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="text-center mb-5">
          <h2>About Purrfect Adoption</h2>
          <p className="lead">Our mission is to connect loving cats with caring families.</p>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <h3>Our Story</h3>
            <p>
              Founded in 2020, Purrfect Adoption began as a small volunteer-run organization 
              dedicated to rescuing and rehoming abandoned cats. What started as a passion project 
              has grown into a community of cat lovers working together to make a difference.
            </p>
            <p>
              We believe every cat deserves a safe, loving home. Our team works tirelessly to 
              provide medical care, socialization, and temporary shelter to cats in need while 
              we search for their forever families.
            </p>
          </div>
          
          <div className="col-md-6">
            <h3>What We Do</h3>
            <ul>
              <li>Rescue and rehabilitate abandoned and stray cats</li>
              <li>Provide veterinary care including vaccinations and spay/neuter services</li>
              <li>Offer temporary foster homes for cats awaiting adoption</li>
              <li>Educate the community about responsible pet ownership</li>
              <li>Match cats with compatible families based on personality and lifestyle</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-5">
          <h3>Our Team</h3>
          <p>
            Our team consists of dedicated veterinarians, animal behaviorists, foster families, 
            and volunteers who share a common love for felines. Together, we've helped over 500 
            cats find their forever homes.
          </p>
        </div>
      </div>
    </section>
  );
}