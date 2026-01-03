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
  const [searchInput, setSearchInput] = useState('');
  const [filteredCats, setFilteredCats] = useState(availableCats);

  const handleSearch = () => {
    if (!searchInput || searchInput.toLowerCase() === 'all') {
      // Show all cats if input empty or "All"
      setFilteredCats(availableCats);
      return;
    }

    let result = [...availableCats];

    // Check if input matches a breed
    if (BREEDS.includes(searchInput) && searchInput !== 'All') {
      result = result.filter((cat) => cat.breed === searchInput);
    } else {
      // Otherwise search by name
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredCats(result);
  };

  return (
    <section className="available-cats-section">
      <div className="container">
        <h2 className="text-center mb-3">Available Cats</h2>

        {/* Search Box */}
        <div className="filters-row">
          <input
            type="text"
            className="search-box"
            placeholder="Enter cat name or select breed..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            list="breeds"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              width: '250px',
            }}
          />
          <datalist id="breeds">
            {BREEDS.map((breed) => (
              <option key={breed} value={breed} />
            ))}
          </datalist>

          <button
            type="button"
            className="search-btn"
            onClick={handleSearch}
            style={{
              padding: '0.5rem 1rem',
              marginLeft: '0.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: '#f28c28', // cat-themed color
              color: '#fff',
              cursor: 'pointer',
            }}
          >
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
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    borderRadius: '0.5rem',
                  }}
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
