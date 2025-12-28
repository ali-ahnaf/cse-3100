import { useEffect, useState } from 'react';

export default function Home() {
  const [featuredCats, setFeaturedCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredCatData = [
    { name: 'Whiskers', breed: 'Siamese', date: 'Apr 3', age: 2 },
    { name: 'Mittens', breed: 'Persian', date: 'Apr 4', age: 3 },
    { name: 'Shadow', breed: 'Bengal', date: 'Apr 2', age: 1 },
    { name: 'Luna', breed: 'Birman', date: 'Apr 2', age: 4 },
  ];

  useEffect(() => {
    const fetchFeaturedCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCatData.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search')
              .then((res) => res.json())
              .catch(() => [{ url: `https://placekitten.com/300/200?image=${Math.floor(Math.random() * 10) + 1}` }])
          )
        );
        
        const catsWithImages = featuredCatData.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setFeaturedCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        // Use fallback images
        const catsWithFallback = featuredCatData.map((cat, index) => ({
          ...cat,
          image: `https://placekitten.com/300/200?image=${index + 1}`,
        }));
        setFeaturedCats(catsWithFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCatImages();
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Welcome to Purrfect Adoption</h1>
        <p>
          At Purrfect Adoption, we believe every cat deserves a loving home. 
          Our mission is to connect them with caring families. Browse our available 
          cats and find your new best friend today!
        </p>
        
        <div className="inspirational-quote">
          <p className="quote-text">
            "Saving one cat won't change the world, but it will change the world for that one cat."
          </p>
        </div>
      </section>

      <section>
        <h2>Featured Cats</h2>
        
        {loading ? (
          <div className="loading">
            <p>Loading featured cats...</p>
          </div>
        ) : (
          <div className="featured-cats">
            {featuredCats.map((cat, index) => (
              <div key={index} className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  onError={(e) => {
                    e.target.src = `https://placekitten.com/300/200?image=${index + 1}`;
                  }}
                  style={{
                    borderRadius: '8px',
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-1">Breed: {cat.breed}</p>
                  <p className="mb-1">Age: {cat.age} years</p>
                  <p className="mb-0">Available: {cat.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}