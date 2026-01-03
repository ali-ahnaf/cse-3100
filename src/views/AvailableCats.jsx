import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Maine Coon' },
  { name: 'Luna', age: '4 months', breed: 'Ragdoll' },
  { name: 'Simba', age: '2', breed: 'British Shorthair' },
  { name: 'Oliver', age: '3', breed: 'Persian' },
  { name: 'Bella', age: '1', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );

        if (mounted) {
          const catsWithImages = availableCats.map((cat, index) => ({
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
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {loading ? (
        <p>Loading cats...</p>
      ) : (
        <div className="mt-2 row g-4 cats-container" id="cats-container">
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
  );
}