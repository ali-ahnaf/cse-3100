import { useEffect, useState } from 'react';

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const availableCats = [
          { name: 'Whiskers', age: '2', breed: 'Siamese' },
          { name: 'Mittens', age: '2', breed: 'Persian' },
          { name: 'Shadow', age: '1', breed: 'Abyssinian' },
          { name: 'Pumpkin', age: '3', breed: 'Bengal' },
          { name: 'Luna', age: '4', breed: 'Birman' },
          { name: 'Simba', age: '2', breed: 'Sphynx' },
        ];

        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((r) => r.json())
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Your trusted place to find loving homes for adorable cats. Browse our
          available cats and give them a forever home today!
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 cats-container" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-item">
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
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}