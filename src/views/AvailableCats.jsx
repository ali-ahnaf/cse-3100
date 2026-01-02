import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Sphynx' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
  { name: 'Leo', age: '1', breed: 'Peterbald' },
  { name: 'Nala', age: '3', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breed, setBreed] = useState('');
  const [search, setSearch] = useState('');

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
        )
      );

      const data = availableCats.map((cat, i) => ({
        ...cat,
        image: responses[i][0].url,
      }));

      setCats(data);
      setFilteredCats(data);
    };

    fetchImages();
  }, []);

  // Filter automatically when breed or search changes
  useEffect(() => {
    const result = cats.filter(cat => {
      const breedMatch = breed === '' || cat.breed.toLowerCase() === breed.toLowerCase();
      const nameMatch = cat.name.toLowerCase().includes(search.toLowerCase());
      return breedMatch && nameMatch;
    });

    setFilteredCats(result);
  }, [breed, search, cats]);

  // Optional: can manually trigger search on button click
  const handleSearchClick = () => {
    const result = cats.filter(cat => {
      const breedMatch = breed === '' || cat.breed.toLowerCase() === breed.toLowerCase();
      const nameMatch = cat.name.toLowerCase().includes(search.toLowerCase());
      return breedMatch && nameMatch;
    });
    setFilteredCats(result);
  };

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Available Cats</h2>

        <div className="filter-bar" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <select
            className="filter-select"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
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
            className="filter-input"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* ✅ Blue Search Button */}
          <button
            onClick={handleSearchClick}
            style={{
              padding: '8px 16px',
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0077cc')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#1e90ff')}
          >
            Search
          </button>
        </div>
      </div>

      <div className="available-cats-grid">
        {filteredCats.length === 0 && <p>No cats found.</p>}

        {filteredCats.map((cat, i) => (
          <div className="cat-card" key={i}>
            <img src={cat.image} alt={cat.name} />
            <div className="cat-info">
              <strong>{cat.name}</strong><br />
              Age: {cat.age}<br />
              Breed: {cat.breed}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
