import { useEffect, useState } from 'react';

const catsData = [
  { name: 'Whiskers', breed: 'Sphynx' },
  { name: 'Mittens', breed: 'Peterbald' },
  { name: 'Shadow', breed: 'Birman' },
  { name: 'Luna', breed: 'Abyssinian' },
  { name: 'Simba', breed: 'Persian' },
  { name: 'Tiger', breed: 'Bengal' },
  { name: 'Chloe', breed: 'Siamese' },
  { name: 'Oscar', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breed, setBreed] = useState('');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        catsData.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res =>
            res.json()
          )
        )
      );

      setCats(
        catsData.map((cat, i) => ({
          ...cat,
          image: responses[i][0].url,
        }))
      );
    };

    fetchImages();
  }, []);

  const filteredCats = cats.filter(cat => {
    return (
      (breed === '' || cat.breed === breed) &&
      cat.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(search);
    }
  };

  return (
    <>
      <h2>Available Cats</h2>

      <div style={{ 
        marginTop: '20px', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px'
      }}>
        <select onChange={e => setBreed(e.target.value)} style={{ padding: '5px' }}>
          <option value="">Select Breed</option>
          <option>Sphynx</option>
          <option>Peterbald</option>
          <option>Birman</option>
          <option>Abyssinian</option>
          <option>Persian</option>
          <option>Bengal</option>
          <option>Siamese</option>
        </select>

        <input
          placeholder="search by name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ padding: '5px' }}
        />

        <button
          onClick={() => setQuery(search)}
          style={{ padding: '5px 15px' }}
        >
          Search
        </button>
      </div>

      <div className="cats-grid" style={{ marginTop: '30px' }}>
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <strong>{cat.name}</strong>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}