import { useState } from 'react';

const availableCats = [
  {
    name: 'Whiskers',
    age: '2',
    breed: 'Siamese',
    location: 'Shelter A',
    description: 'Playful and affectionate. Good with kids.',
    image: 'https://cdn2.thecatapi.com/images/9j7.jpg',
  },
  {
    name: 'Mittens',
    age: '2',
    breed: 'Persian',
    location: 'Foster Home',
    description: 'Calm lap cat who enjoys naps and brushing.',
    image: 'https://cdn2.thecatapi.com/images/ae.jpg',
  },
  {
    name: 'Shadow',
    age: '1',
    breed: 'Abyssinian',
    location: 'Shelter B',
    description: 'Curious and energetic — loves to climb.',
    image: 'https://cdn2.thecatapi.com/images/bb.jpg',
  },
  {
    name: 'Pumpkin',
    age: '3',
    breed: 'Bengal',
    location: 'Shelter A',
    description: 'Active and playful; needs space to run.',
    image: 'https://cdn2.thecatapi.com/images/cc.jpg',
  },
];

const BREEDS = [
  'All',
  'Siamese',
  'Persian',
  'Abyssinian',
  'Bengal',
  'Birman',
  'Sphynx',
  'Peterbald',
];

export default function AvailableCats() {
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchName, setSearchName] = useState('');
  const [filteredCats, setFilteredCats] = useState(availableCats);

  const handleSearch = () => {
    let result = [...availableCats];

    if (selectedBreed !== 'All') {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName.trim() !== '') {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(result);
  };

  return (
    <section className="available-cats-section">
      <div className="container">
        {/* Headline with extra space */}
        <h2 className="text-center mb-5">Available Cats</h2>

        {/* Added extra margin top to search/filter row */}
        <div className="filters-row" style={{ marginTop: '1.5rem' }}>
          <select
            className="breed-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="name-search"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <hr className="cats-divider" />

        {/* Cats Grid */}
        <div className="cats-grid">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="cat-card">
                <div
                  className="cat-image"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>
                    <strong>Age:</strong> {cat.age}
                  </p>
                  <p>
                    <strong>Breed:</strong> {cat.breed}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No cats found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
