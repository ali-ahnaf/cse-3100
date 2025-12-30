import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
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
  }, []); // Added dependency array to prevent infinite loop

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Discover your perfect feline companion! Purrfect Adoption is dedicated to finding loving homes for cats in need. Our featured cats below are waiting to bring joy and companionship to your family. Each cat has been carefully evaluated and is ready for their forever home.
        </p>
      </section>

      <div className="dashboard-layout">
        <section className="featured-cats-section">
          <h2>Featured cats</h2>
          <div className="featured-cats-grid">
            {cats.map((cat, i) => (
              <div key={i} className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="cat-image"
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
