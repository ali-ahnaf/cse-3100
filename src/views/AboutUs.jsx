export default function AboutUs() {
  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>
      <p>Learn more about Purrfect Adoption and our mission to help cats find loving homes.</p>

      <div style={{ maxWidth: '900px', margin: '2rem auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h3>Our Mission</h3>
          <p>
            At Purrfect Adoption, our mission is to connect loving families with wonderful cats in need of homes. We are dedicated to providing safe, healthy, and happy cats that are ready to become beloved members of your family. Every cat deserves a second chance at happiness, and we're here to make that happen.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3>Our History</h3>
          <p>
            Founded in 2015, Purrfect Adoption began as a small local rescue operation with a passion for saving cats from shelters and difficult situations. Over the years, we've grown into a thriving community-driven organization. What started with just a handful of devoted volunteers has now expanded to serve hundreds of families across the region.
          </p>
          <p>
            Our journey has been filled with heartwarming stories of cats finding their forever homes and families discovering the joy and companionship that a feline friend can bring. Every successful adoption fuels our passion to continue this important work.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3>Our Team</h3>
          <p>
            We are a dedicated team of passionate individuals who believe in the power of giving second chances to cats. Our team includes:
          </p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li><strong>Sarah Mitchell</strong> - Founder & Executive Director - A lifelong cat lover with over 20 years of experience in animal rescue.</li>
            <li><strong>James Chen</strong> - Veterinary Coordinator - Ensures all our cats receive the best medical care and are healthy before adoption.</li>
            <li><strong>Emma Rodriguez</strong> - Adoption Specialist - Helps match families with the perfect feline companion.</li>
            <li><strong>Marcus Thompson</strong> - Volunteer Coordinator - Manages our amazing volunteer community that makes it all possible.</li>
            <li><strong>Lisa Park</strong> - Marketing & Communications - Spreads the word about cat adoption and shares our success stories.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Together with our volunteer network, we work tirelessly to improve the lives of cats in need. Our team is motivated by the belief that every cat deserves love, care, and a permanent home.
          </p>
        </div>

        <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h3>Why Adopt?</h3>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>You'll save a life and free up resources for other animals in need</li>
            <li>Adopted cats are typically already spayed/neutered and vaccinated</li>
            <li>Adult cats are wonderful companions with established personalities</li>
            <li>You'll join a community of caring, compassionate people</li>
            <li>The love and gratitude from a rescue cat is truly special</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
