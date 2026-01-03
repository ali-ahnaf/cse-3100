import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Birman' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index] && responses[index][0] ? responses[index][0].url : '',
        }));

        if (!cancelled) setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();

    return () => {
      cancelled = true;
    };
  }, []); // run once only

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Purrfect Adoption connects loving families with shelter cats in need of
          permanent homes. We provide medical care, behavior assessment, and
          adoption support to ensure every cat finds a safe, joyful home.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="cats-grid" id="cats-container">
          {cats.map((cat, i) => (
            <article key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}