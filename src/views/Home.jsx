import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        // Replace the cats array (don't append on every effect run).
        // Also include a dependency array on the effect so it only runs once.
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Purrfect Adoption is dedicated to finding loving homes for cats across Bangladesh. 
          We believe every cat deserves a safe, caring family. Our mission is to connect rescued 
          and abandoned cats with compassionate owners who will provide them with the love and care they deserve.
        </p>
      </section>

      <section className="featured-section mt-5">
        <h2>Featured Cats</h2>
        <div className="featured-grid" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-2">Age: {cat.age}</p>
                <p className="breed-badge">{cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
