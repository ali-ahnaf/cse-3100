import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Luna', age: '4 months', breed: 'Ragdoll' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        if (mounted) {
          const catsWithImages = featuredCats.map((cat, index) => ({
            ...cat,
            image: responses[index][0].url,
          }));

          setCats(catsWithImages);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          console.error('Error fetching cat images:', error);
          setLoading(false);
        }
      }
    };

    fetchCatImages();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>

        {loading ? (
          <p>Loading featured cats...</p>
        ) : (
          <div className="mt-2 row g-4" id="cats-container">
            {cats.map((cat, i) => (
              <div key={i} className="col">
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="cat-image"
                  />
                  <div className="cat-info">
                    <h3 className="cat-name">{cat.name}</h3>
                    <p className="cat-age">Age: {cat.age} years</p>
                    <p className="cat-breed">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}