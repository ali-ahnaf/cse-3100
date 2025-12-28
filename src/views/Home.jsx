import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
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

        // Replace append with a simple set to avoid unbounded growth
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="hero text-center mt-4">
        <div className="container">
          <h2>Welcome to Purrfect Adoption</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <h2>Featured cats</h2>
          <div className="mt-2 cats-container" id="cats-container">
            {cats.map((cat, i) => (
              <div key={i}>
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{
                      borderRadius: '8px',
                      height: '200px',
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
        </div>
      </section>
    </>
  );
}
