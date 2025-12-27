import aboutImg from '../assets/about-cat.avif'; 

export default function About() {
  return (
    <div className="about-container">
      
      <section className="text-center py-5 bg-white">
        <h1 className="display-4 fw-bold">About Purrfect Adoption</h1>
        <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
          Connecting hearts with paws. We believe every cat deserves a story that ends in a loving home.
        </p>
      </section>

      
      <section className="row align-items-center my-5 gx-5">
        <div className="col-md-5">
          <img
            src={aboutImg}
            alt="Adorable cat"
            className="about-img img-fluid rounded-4 shadow-lg"
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-4">🐾 About Us 🐾</h2>
          <p className="fs-5">
            At our heart, we believe every cat deserves a safe home, a full bowl, and someone who understands their quiet blinks and loud opinions.
          </p>
          <p className="fs-5 mb-4">
            Our goal is simple: to connect cats in need with people ready to love them for life. We rescue, foster, and rehome cats of all ages, personalities, and backgrounds—shy window-watchers, playful troublemakers, and wise old nap champions alike.
          </p>

          <h3 className="h4 fw-bold mb-3">Our Goals:</h3>
          <ul className="list-unstyled">
            <li className="mb-2">✨ No cat is overlooked because of age, color, or medical needs</li>
            <li className="mb-2">🏠 Adoption is thoughtful, compassionate, and lifelong</li>
            <li className="mb-2">📚 Education helps humans understand cats, not just own them</li>
            <li className="mb-2">💛 Kindness replaces convenience when it comes to animal care</li>
          </ul>
        </div>
      </section>

      
      <section className="bg-dark text-white p-5 rounded-4 text-center my-5 about-quote">
        <p className="fs-5 italic">
          "Beyond adoptions, we aim to advocate for responsible pet ownership, support spay and neuter efforts, and provide guidance so every adoption is a success—for both human and cat."
        </p>
        <h4 className="mt-4 text-warning">Because when the right cat finds the right person, it’s not just a home that’s created. It’s a family. 🐱💛</h4>
      </section>
    </div>
  );
}