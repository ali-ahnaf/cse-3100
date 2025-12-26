import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
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
      <section className="welcome-section">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="featured-section">
        <h2>Featured cats</h2>
        <div className="cats-grid" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              {cat.image ? (
                <img src={cat.image} alt={cat.name} />
              ) : (
                <div className="cat-image-placeholder"></div>
              )}
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}