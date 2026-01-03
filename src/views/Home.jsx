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
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages); // Set directly to avoid accumulation
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []); // FIX: Empty dependency array stops the loop

  return (
    <section>
      <div className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p className="text-muted">Find your new feline companion today.</p>
      </div>

      <div className="mt-5">
        <h3>Featured cats</h3>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} style={{height: '180px', objectFit: 'cover'}} />
              <div className="cat-info">
                <h4 className="h6 mb-0">{cat.name}</h4>
                <p className="small mb-0 text-muted">Age: {cat.age} | {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}