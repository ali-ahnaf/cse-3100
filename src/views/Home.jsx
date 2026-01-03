import whiskers from '../assets/images/cat-whiskers.jpg';
import mittens from '../assets/images/cat-mittens.jpg';
import shadow from '../assets/images/cat-shadow.jpg';
import luna from '../assets/images/cat-luna.jpg';
import hero from '../assets/images/hero-banner.jpg';

const featuredCats = [
  { id: 1, name: 'Whiskers', age: '2 years', breed: 'Persian', image: whiskers },
  { id: 2, name: 'Mittens', age: '2 years', breed: 'Siamese', image: mittens },
  { id: 3, name: 'Shadow', age: '1 year', breed: 'Bengal', image: shadow },
  { id: 4, name: 'Luna', age: '4 months', breed: 'Birman', image: luna },
];

export default function Home() {
  return (
    <>
      <section className="hero-section text-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to Purrfect Adoption</h1>
          <p className="lead col-lg-8 mx-auto">Find your new best friend today. Our cats are waiting for their loving hoomans.</p>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-5 display-5">Featured Cats</h2>
        <div className="row g-4">
          {featuredCats.map(cat => (
            <div key={cat.id} className="col-md-6 col-lg-3">
              <div className="cat-card h-100">
                <img src={cat.image} alt={cat.name} className="w-100" />
                <div className="cat-info">
                  <h3 className="h4">{cat.name}</h3>
                  <p>Age: {cat.age}<br />Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}