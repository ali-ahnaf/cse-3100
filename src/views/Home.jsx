import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Birman' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Cleo', age: '3', breed: 'Peterbald' },
  { name: 'Nala', age: '1', breed: 'Persian' },
];

// short descriptions for breed tooltips
const breedDescriptions = {
  Sphynx: 'Hairless, affectionate and energetic — needs regular skin care.',
  Peterbald: 'Slim, elegant, playful; often hairless or with fine coat.',
  Birman: 'Gentle, sociable, and striking blue eyes.',
  Abyssinian: 'Active, intelligent and very curious.',
  Persian: 'Calm, long-haired, requires regular grooming.',
  Bengal: 'Vibrant, playful, and loves to climb.',
  Siamese: 'Vocal, intelligent, and highly social.',
};

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((r) => r.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i] && responses[i][0] ? responses[i][0].url : '',
        }));

        if (!cancelled) setCats(catsWithImages);
      } catch (err) {
        console.error('Failed to fetch cat images', err);
      }
    };

    fetchImages();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-inner text-center">
          <h2 className="hero-title">Welcome to Purrfect Adoption</h2>
          <p className="hero-sub">
            We connect caring families with healthy, well-evaluated rescue cats.
            Our team provides veterinary care, behavioral assessment and adoption guidance
            so every match becomes a happy, lasting home.
          </p>

          <div className="hero-ctas mt-3">
            <Link to="/available-cats" className="btn btn-primary me-2">View available cats</Link>
            <Link to="/contact" className="btn btn-outline">Donate / Contact</Link>
          </div>
        </div>
      </section>

      <section className="featured mt-4">
        <h3 className="section-title">Featured cats</h3>

        <div className="cats-grid" aria-live="polite">
          {cats.map((cat, i) => (
            <article
              key={i}
              className="cat-card card-enter"
              style={{ animationDelay: `${i * 70}ms` }}
              role="listitem"
              aria-label={`${cat.name}, ${cat.breed}`}
            >
              <div className="card-media">
                <img src={cat.image} alt={`${cat.name}`} />
              </div>

              <div className="cat-info">
                <h4 className="cat-name">{cat.name}</h4>
                <p className="cat-age">Age: {cat.age}</p>
                <span
                  className="cat-breed"
                  data-desc={breedDescriptions[cat.breed] || 'Breed information'}
                >
                  {cat.breed}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}