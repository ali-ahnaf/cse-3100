import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Oliver', age: '5', breed: 'Peterbald' },
  { name: 'Chloe', age: '3', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  if (loading) {
    return (
      <section className="text-center mt-4 p-5">
        <h2>Available Cats</h2>
        <p>Loading cats...</p>
      </section>
    );
  }

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
        
      <div className="mt-2 row g-4">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4 col-lg-3">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-1">Age: {cat.age} years</p>
                <p className="mb-2 breed-type">
                  Breed: <span className="breed-badge">{cat.breed}</span>
                </p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}