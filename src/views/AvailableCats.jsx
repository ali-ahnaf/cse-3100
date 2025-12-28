import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Peterbald' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())));
      const catsWithImages = availableCats.map((cat, index) => ({ ...cat, image: responses[index][0].url }));
      setCats(catsWithImages);
    };
    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(cat => 
    (selectedBreed === 'All' || cat.breed === selectedBreed) &&
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Available Cats</h2>
        <div className="d-flex gap-2">
          <select className="form-select" onChange={(e) => setSelectedBreed(e.target.value)}>
            {breeds.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="form-control" 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3>{cat.name}</h3>
            <p>Breed: {cat.breed}</p>
          </div>
        ))}
      </div>
    </section>
  );
}