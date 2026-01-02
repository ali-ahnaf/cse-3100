import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
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
      {/* WELCOME SECTION */}
      <section style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome to Purrfect Adoption</h2>
        <p style={styles.welcomeParagraph}>
          We help loving cats find safe, caring homes. Browse our featured cats
          below or explore all available cats ready for adoption.
        </p>
      </section>

      {/* FEATURED TITLE */}
      <h3 style={styles.featuredTitle}>Featured Cats</h3>

      {/* CAT GRID */}
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

const styles = {
  welcomeSection: {
    textAlign: "center",
    marginBottom: "50px", 
  },
  welcomeTitle: {
    fontSize: "2rem",
    marginBottom: "20px", 
  },
  welcomeParagraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "30px", 
  },
  featuredTitle: {
    marginBottom: "20px",
    textAlign: "center",
  },
};
