import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

const BREEDS = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

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

        const catsWithImages = featuredCats.map((cat, index) => {
          const url =
            responses[index] && Array.isArray(responses[index]) && responses[index][0] && responses[index][0].url
              ? responses[index][0].url
              : FALLBACK_IMAGE;
          return {
            ...cat,
            image: url,
            breed: cat.breed || BREEDS[index % BREEDS.length],
          };
        });

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setCats(featuredCats.map((cat, index) => ({ ...cat, image: FALLBACK_IMAGE, breed: cat.breed || BREEDS[index % BREEDS.length] })));
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-item">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="cat-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}