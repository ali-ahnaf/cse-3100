import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Bob Doe', age: '3', breed: 'Siamese' },
  { name: 'Bob Doe', age: '4', breed: 'Persian' },
  { name: 'Bob Doe', age: '2', breed: 'Bengal' },
  { name: 'Bob Doe', age: '2', breed: 'Abyssinian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then(res =>
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
        // Fallback to placeholder images
        const catsWithPlaceholders = featuredCats.map((cat, index) => ({
          ...cat,
          image: `https://placekitten.com/300/200?image=${index + 1}`,
        }));
        setCats(catsWithPlaceholders);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div style={styles.container}>
      {/* Welcome section - CENTERED like PDF Page 2 */}
      <section style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome to Purrfect Adoption</h2>
        <p style={styles.welcomeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lue
        </p>

      </section>

      {/* Featured cats section - matching PDF Page 2 */}
      <section style={styles.featuredSection}>
        <h2 style={styles.featuredTitle}>Featured cats</h2>
        <div style={styles.featuredGrid}>
          {cats.map((cat, i) => (
            <div key={i} style={styles.featuredCard}>
              <div style={styles.imageContainer}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={styles.catImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placekitten.com/300/200?image=${i + 1}`;
                  }}
                />
              </div>
              <div style={styles.catInfo}>
                <h3 style={styles.catName}>{cat.name}</h3>
                <p style={styles.catAge}>Age: {cat.age} years</p>
                <p style={styles.catBreed}>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Styling - EXACTLY like assignment PDF
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  welcomeSection: {
    textAlign: 'center', // CENTERED title
    marginBottom: '40px',
    padding: '20px'
  },
  welcomeTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
    textAlign: 'center' // CENTERED
  },
  welcomeText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '15px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  featuredSection: {
    marginTop: '40px'
  },
  featuredTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '25px',
    textAlign: 'left'
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px'
  },
  featuredCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  },
  catImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  catInfo: {
    padding: '15px'
  },
  catName: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
  },
  catAge: {
    margin: '0 0 5px 0',
    fontSize: '14px',
    color: '#666'
  },
  catBreed: {
    margin: 0,
    fontSize: '14px',
    color: '#666'
  }
};