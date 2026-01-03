import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
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
  }, []);

  return (
    <>
      <section className="hero">
        <h2>Welcome to Purrfect Adoption</h2>
        <p className="hero-sub">
          Welcome to Purrfect Adoption
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5 featured-section">
        <h2>Featured cats</h2>
        <div className="cats-container mt-2">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-img" />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0"><strong>Breed:</strong> {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
