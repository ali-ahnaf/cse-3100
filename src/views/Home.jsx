import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredCats = [
  { name: 'Bob Doe', age: '3', breed: 'Persian' },
  { name: 'Bob Doe', age: '4', breed: 'Birman' },
  { name: 'Bob Doe', age: '2 months', breed: 'Siamese' },
  { name: 'Bob Doe', age: '2 months', breed: 'Tabby' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
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
    <div className="layout">
      {/* NAVIGATION BAR SECTION */}
      <header>
        <Link to="/" className="logo">Purrfect Adoption</Link>
        <nav>
          <Link to="/available-cats">Available cats</Link>
          <Link to="/donate">Donate</Link>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="welcome-section">
          <h1>Welcome to Purrfect Adoption</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
          </p>
        </section>

        {/* FEATURED SECTION */}
        <h2 className="featured-header">Featured cats</h2>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-image-container">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 Purrfect Adoption</p>
      </footer>
    </div>
  );
}