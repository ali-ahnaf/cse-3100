import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('Select Breed');
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const breeds = [
    'Select Breed',
    'Sphynx',
    'Peterbald',
    'Birman',
    'Abyssinian',
    'Persian',
    'Bengal',
    'Siamese',
  ];

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
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSearchQuery(searchInput.trim());
  };

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === 'Select Breed' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesBreed && matchesName;
  });

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="row mb-3 g-2">
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            aria-label="Filter by breed"
          >
            {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search by name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Search cats by name"
            />
            <button className="btn btn-primary ms-2" type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat) => (
          <div key={cat.name} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <small className="text-muted">Breed: {cat.breed}</small>
              </div> 
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h3 className="mt-4">Detailed list</h3>
      <ul className="list-group mt-2">
        {filteredCats.map((cat) => (
          <li key={cat.name} className="list-group-item d-flex align-items-center">
            <img
              src={cat.image}
              alt={`${cat.name} thumbnail`}
              className="rounded me-3"
              style={{ width: 72, height: 72, objectFit: 'cover' }}
            />
            <div>
              <strong>{cat.name}</strong>
              <div>Age: {cat.age}</div>
              <div className="text-muted">Breed: {cat.breed}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
