import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Bob', age: '2' },
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

        if (cats.length > 10) {
          alert(
            'Hey, you should quickly fix this infinite state loop before your PC crashes! Stop the App, Refresh the browser and fix the bug!! '
          );
        }
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="hero-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Welcome to Purrfect Adoption</h2>
          <p className="lead mx-auto" style={{maxWidth: '700px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
