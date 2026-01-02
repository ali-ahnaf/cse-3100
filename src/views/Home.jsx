import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Oliver', age: '2 months' },
  { name: 'Bella', age: '2 months' },
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
  }, []);

  return (
    <>
      <section className="home-welcome">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect feline companion! We connect loving families with cats in need of forever homes.
          Every cat deserves a warm, safe place to call home, and we're here to make that happen.
          Browse our available cats and start your adoption journey today.
        </p>
      </section>

      <section className="featured-cats">
        <h2>Featured cats</h2>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
