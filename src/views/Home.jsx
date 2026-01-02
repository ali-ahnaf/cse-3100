import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Bob Doe', age: '3', breed: 'Bengal' },
  { name: 'Bob Doe', age: '4', breed: 'Persian' },
  { name: 'Bob Doe', age: '2 months', breed: 'Siamese' },
  { name: 'Bob Doe', age: '2 months', breed: 'Birman' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        featuredCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
        )
      );

      const data = featuredCats.map((cat, i) => ({
        ...cat,
        id: i,
        image: responses[i][0].url,
      }));

      setCats(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      <section className="text-center mb-5">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          We help loving cats find safe, caring homes. Browse our featured cats
          below or explore all available cats ready for adoption.
        </p>
      </section>

      <h3>Featured Cats</h3>
      <div className="featured-cats">
        {cats.map(cat => (
          <div className="cat-card" key={cat.id}>
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              {cat.name}<br />
              Age: {cat.age}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
