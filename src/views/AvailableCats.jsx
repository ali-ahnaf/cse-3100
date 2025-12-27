import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      setCats(
        availableCats.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }))
      );
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase()) &&
    (breed === '' || cat.breed === breed)
  );

  return (
    <section>
      <h2>Available cats</h2>

      <div style={{ marginBottom: 20 }}>
        <select onChange={e => setBreed(e.target.value)}>
          <option value="">Select breed</option>
          <option>Sphynx</option>
          <option>Peterbald</option>
          <option>Birman</option>
          <option>Abyssinian</option>
          <option>Persian</option>
          <option>Bengal</option>
          <option>Siamese</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          onChange={e => setSearch(e.target.value)}
          style={{ marginLeft: 10 }}
        />
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} style={{ height: 200, width: '100%', objectFit: 'cover' }} />
            <div className="cat-info">
              <strong>{cat.name}</strong>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
