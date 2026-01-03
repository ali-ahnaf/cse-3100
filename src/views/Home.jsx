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

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // FIXED: Added empty dependency array to prevent infinite loop

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Welcome to Purrfect Adoption, where every cat finds its perfect home!
          We believe every feline deserves love and care. Browse our collection
          of adorable cats waiting for their forever families. Each cat has a
          unique personality and charm. Let's make a cat's dream come true!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i}>
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Breed: {cat.breed}</p>
                  <p className="mb-0">Age: {cat.age} years</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
