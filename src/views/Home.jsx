import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

const BREEDS = [
  'Sphynx',
  'Peterbald',
  'Birman',
  'Abyssinian',
  'Persian',
  'Bengal',
  'Siamese',
];

const FALLBACK_IMAGE = 'https://placekitten.com/400/300';

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
              .catch(() => null)
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url || FALLBACK_IMAGE,
          breed: BREEDS[index % BREEDS.length],
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error(error);
        setCats(
          featuredCats.map((cat, index) => ({
            ...cat,
            image: FALLBACK_IMAGE,
            breed: BREEDS[index % BREEDS.length],
          }))
        );
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-light py-5 mb-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Welcome to Purrfect Adoption</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Purrfect Adoption is dedicated to connecting loving families with cats
            looking for a safe and caring forever home. From playful kittens to
            calm companions, we help you find the perfect match and make adoption
            a joyful, meaningful experience.
          </p>
        </div>
      </section>

      {/* FEATURED CATS */}
      <section className="container mb-5">
        <h2 className="text-center fw-semibold mb-4">Featured Cats</h2>

        <div className="row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top rounded-top-4"
                  style={{ height: '250px', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold mb-2">
                    {cat.name}
                  </h5>
                  <p className="card-text text-muted mb-1">
                    Breed: {cat.breed}
                  </p>
                  <p className="card-text text-muted mb-0">
                    Age: {cat.age} years
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
