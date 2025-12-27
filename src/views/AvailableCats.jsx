import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];

const possibleBreeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
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
          breed: possibleBreeds[Math.floor(Math.random() * possibleBreeds.length)],
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat => {
    const matchesName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === '' || cat.breed === selectedBreed;
    return matchesName && matchesBreed;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div style={{ marginBottom: '2em', display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '200px',
          }}
        />
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '200px',
          }}
        >
          <option value="">All Breeds</option>
          {possibleBreeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2em',
          justifyItems: 'center',
        }}
      >
        {filteredCats.map((cat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '1.5em',
              width: '100%',
              maxWidth: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                borderRadius: '8px',
                height: '180px',
                objectFit: 'cover',
                width: '100%',
                marginBottom: '1em',
              }}
            />
            <h3 style={{ fontSize: '1.2em', fontWeight: '600', margin: '0 0 0.5em 0', color: '#333' }}>
              {cat.name}
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '0.9em' }}>
              Age: {cat.age}
            </p>
            <p style={{ margin: '0', color: '#666', fontSize: '0.9em' }}>
              Breed: {cat.breed}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
