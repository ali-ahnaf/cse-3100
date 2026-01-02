export default function AboutUs() {
  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card p-4">
            <h3 className="mb-4">Our Mission</h3>
            <p className="mb-4">
              At Purrfect Adoption, we believe every cat deserves a loving home. 
              Our mission is to connect wonderful cats with caring families, 
              ensuring each adoption is a perfect match for both the cat and their new human companions.
            </p>

            <h3 className="mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in 2020, Purrfect Adoption started as a small community initiative 
              to help stray cats find homes. Today, we've grown into a full-service adoption 
              center, having successfully placed over 500 cats in forever homes.
            </p>

            <h3 className="mb-4">What We Do</h3>
            <ul className="text-start mb-4">
              <li>Rescue and rehabilitate cats in need</li>
              <li>Provide medical care and vaccinations</li>
              <li>Match cats with compatible families</li>
              <li>Offer post-adoption support and advice</li>
              <li>Educate the community about responsible pet ownership</li>
            </ul>

            <h3 className="mb-4">Our Team</h3>
            <p className="mb-4">
              Our dedicated team of veterinarians, caregivers, and adoption specialists 
              work tirelessly to ensure every cat receives the best care possible while 
              waiting for their forever home.
            </p>

            <div className="mt-4">
              <h4>Ready to Adopt?</h4>
              <p className="mb-0">
                Browse our available cats and find your perfect feline companion today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}