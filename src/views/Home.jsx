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
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }));

        setCats(catsWithImages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Find your perfect feline friend among our featured cats!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" >
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p >Age: {cat.age}</p>
                  <p>Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
