import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },

  { name: 'Oliver', age: '3' },
  { name: 'Nala', age: '1' },
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

        setCats((prevCats) => [...prevCats, ...catsWithImages]);

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
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Our TAI LUNG team will help you find your perfect furry friend.
          They are waiting to meet you!
        </p>
      </section>

      <section className="mt-5">
        <h2 style={{ textAlign: 'left' }}>Featured cats</h2>
        <div className="mt-2 row g-4 cats-container" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
